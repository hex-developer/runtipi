#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail

echo "Installing runtipi..."

ARCHITECTURE="$(uname -m)"
# Not supported on 32 bits systems
if [[ "$ARCHITECTURE" == "armv7"* ]] || [[ "$ARCHITECTURE" == "i686" ]] || [[ "$ARCHITECTURE" == "i386" ]]; then
    echo "runtipi is not supported on 32 bits systems"
    exit 1
fi

### --------------------------------
### CLI arguments
### --------------------------------
UPDATE="false"
while [ -n "${1-}" ]; do
    case "$1" in
    --update) UPDATE="true" ;;
    --)
        shift # The double dash makes them parameters
        break
        ;;
    *) echo "Option $1 not recognized" && exit 1 ;;
    esac
    shift
done


OS="$(cat /etc/[A-Za-z]*[_-][rv]e[lr]* | grep "^ID=" | cut -d= -f2 | uniq | tr '[:upper:]' '[:lower:]' | tr -d '"')"
SUB_OS="$(cat /etc/[A-Za-z]*[_-][rv]e[lr]* | grep "^ID_LIKE=" | cut -d= -f2 | uniq | tr '[:upper:]' '[:lower:]' | tr -d '"')"

function install_generic() {
  local dependency="${1}"
  local os="${2}"

  if [[ "${os}" == "debian" ]]; then
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -y "${dependency}"
    return 0
  elif [[ "${os}" == "ubuntu" || "${os}" == "pop" ]]; then
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -y "${dependency}"
    return 0
  elif [[ "${os}" == "centos" ]]; then
    sudo yum install -y --allowerasing "${dependency}"
    return 0
  elif [[ "${os}" == "fedora" ]]; then
    sudo dnf -y install "${dependency}"
    return 0
  elif [[ "${os}" == "arch" ]]; then
    if ! sudo pacman -Sy --noconfirm "${dependency}" ; then
      if command -v yay > /dev/null 2>&1 ; then
        sudo -u $SUDO_USER yay -Sy --noconfirm "${dependency}"
      else
        echo "Could not install \"${dependency}\", either using pacman or the yay AUR helper. Please try installing it manually."
        return 1
      fi
    fi
    return 0
  else
    return 1
  fi
}

function install_docker() {
  local os="${1}"
  echo "Installing docker for os ${os}"

  if [[ "${os}" == "debian" ]]; then
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -y ca-certificates curl gnupg lsb-release
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list >/dev/null
    sudo DEBIAN_FRONTEND=noninteractive apt-get update -y
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
    return 0
  elif [[ "${os}" == "ubuntu" || "${os}" == "pop" ]]; then
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -y ca-certificates curl gnupg lsb-release
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list >/dev/null
    sudo DEBIAN_FRONTEND=noninteractive apt-get update -y
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
    return 0
  elif [[ "${os}" == "centos" ]]; then
    sudo yum install -y yum-utils
    sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
    sudo yum install -y --allowerasing docker-ce docker-ce-cli containerd.io docker-compose-plugin
    sudo systemctl start docker
    sudo systemctl enable docker
    return 0
  elif [[ "${os}" == "fedora" ]]; then
    sudo dnf -y install dnf-plugins-core
    sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
    sudo dnf -y install docker-ce docker-ce-cli containerd.io docker-compose-plugin
    sudo systemctl start docker
    sudo systemctl enable docker
    return 0
  elif [[ "${os}" == "arch" ]]; then
    sudo pacman -Sy --noconfirm docker docker-compose
    sudo systemctl start docker.service
    sudo systemctl enable docker.service
    return 0
  else
    return 1
  fi
}

echo "Updating system"
sudo DEBIAN_FRONTEND=noninteractive apt-get update -y
echo "Upgrading system"
sudo DEBIAN_FRONTEND=noninteractive apt-get upgrade -y

if ! command -v docker >/dev/null; then
  echo "Installing docker"
  install_docker "${OS}"
  docker_result=$?

  if [[ docker_result -eq 0 ]]; then
    echo "Docker installed"
  else
    echo "Your system ${OS} is not supported trying with sub_os ${SUB_OS}"
    install_docker "${SUB_OS}"
    docker_sub_result=$?

    if [[ docker_sub_result -eq 0 ]]; then
      echo "Docker installed"
    else
      echo "Your system ${SUB_OS} is not supported please install docker manually"
      exit 1
    fi
  fi
fi

function check_dependency_and_install() {
  local dependency="${1}"

  if ! command -v "${dependency}" >/dev/null; then
    echo "Installing ${dependency}"
    install_generic "${dependency}" "${OS}"
    install_result=$?

    if [[ install_result -eq 0 ]]; then
      echo "${dependency} installed"
    else
      echo "Your system ${OS} is not supported trying with sub_os ${SUB_OS}"
      install_generic "${dependency}" "${SUB_OS}"
      install_sub_result=$?

      if [[ install_sub_result -eq 0 ]]; then
        echo "${dependency} installed"
      else
        echo "Your system ${SUB_OS} is not supported please install ${dependency} manually"
        exit 1
      fi
    fi
  fi
}

# Example
# check_dependency_and_install "openssl"


LATEST_VERSION=$(curl -s https://api.github.com/repos/meienberger/runtipi/releases/latest | grep tag_name | cut -d '"' -f4)

LATEST_ASSET="runtipi-cli-linux-x64"
if [ "$ARCHITECTURE" == "arm64" ] || [ "$ARCHITECTURE" == "aarch64" ]; then
  LATEST_ASSET="runtipi-cli-linux-arm64"
fi

URL="https://github.com/meienberger/runtipi/releases/download/$LATEST_VERSION/$LATEST_ASSET"

if [[ "${UPDATE}" == "false" ]]; then
    mkdir -p runtipi
    cd runtipi || exit
fi

curl --location "$URL" -o ./runtipi-cli
chmod +x ./runtipi-cli

# Check if user is in docker group
if ! groups | grep -q docker; then
  echo "User is not in docker group. Please make sure your user is allowed to run docker commands and restart the script."
  echo "See https://docs.docker.com/engine/install/linux-postinstall/ for more information."
  exit 1
fi

./runtipi-cli start
