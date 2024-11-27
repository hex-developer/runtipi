// This file is auto-generated by @hey-api/openapi-ts

import type { OptionsLegacyParser } from '@hey-api/client-fetch';
import { queryOptions, type UseMutationOptions, infiniteQueryOptions, type InfiniteData } from '@tanstack/react-query';
import {
  client,
  userContext,
  appContext,
  updateUserSettings,
  acknowledgeWelcome,
  systemLoad,
  downloadLocalCertificate,
  getTranslation,
  login,
  verifyTotp,
  register,
  logout,
  changeUsername,
  changePassword,
  getTotpUri,
  setupTotp,
  disableTotp,
  resetPassword,
  cancelResetPassword,
  checkResetPasswordRequest,
  getInstalledApps,
  getGuestApps,
  getApp,
  searchApps,
  getAppDetails,
  getImage,
  pull,
  getAll,
  installApp,
  startApp,
  stopApp,
  restartApp,
  uninstallApp,
  resetApp,
  updateApp,
  updateAllApps,
  updateAppConfig,
  backupApp,
  restoreAppBackup,
  getAppBackups,
  deleteAppBackup,
  getLinks,
  createLink,
  editLink,
  deleteLink,
  check,
} from '../sdk.gen';
import type {
  UpdateUserSettingsData,
  UpdateUserSettingsError,
  UpdateUserSettingsResponse,
  AcknowledgeWelcomeData,
  AcknowledgeWelcomeError,
  AcknowledgeWelcomeResponse,
  GetTranslationData,
  LoginData,
  LoginError,
  LoginResponse,
  VerifyTotpData,
  VerifyTotpError,
  VerifyTotpResponse,
  RegisterData,
  RegisterError,
  RegisterResponse,
  LogoutError,
  LogoutResponse,
  ChangeUsernameData,
  ChangeUsernameError,
  ChangeUsernameResponse,
  ChangePasswordData,
  ChangePasswordError,
  ChangePasswordResponse,
  GetTotpUriData,
  GetTotpUriError,
  GetTotpUriResponse,
  SetupTotpData,
  SetupTotpError,
  SetupTotpResponse,
  DisableTotpData,
  DisableTotpError,
  DisableTotpResponse,
  ResetPasswordData,
  ResetPasswordError,
  ResetPasswordResponse,
  CancelResetPasswordError,
  CancelResetPasswordResponse,
  GetAppData,
  SearchAppsData,
  SearchAppsError,
  SearchAppsResponse,
  GetAppDetailsData,
  GetImageData,
  PullError,
  PullResponse,
  InstallAppData,
  InstallAppError,
  InstallAppResponse,
  StartAppData,
  StartAppError,
  StartAppResponse,
  StopAppData,
  StopAppError,
  StopAppResponse,
  RestartAppData,
  RestartAppError,
  RestartAppResponse,
  UninstallAppData,
  UninstallAppError,
  UninstallAppResponse,
  ResetAppData,
  ResetAppError,
  ResetAppResponse,
  UpdateAppData,
  UpdateAppError,
  UpdateAppResponse,
  UpdateAllAppsError,
  UpdateAllAppsResponse,
  UpdateAppConfigData,
  UpdateAppConfigError,
  UpdateAppConfigResponse,
  BackupAppData,
  BackupAppError,
  BackupAppResponse,
  RestoreAppBackupData,
  RestoreAppBackupError,
  RestoreAppBackupResponse,
  GetAppBackupsData,
  GetAppBackupsError,
  GetAppBackupsResponse,
  DeleteAppBackupData,
  DeleteAppBackupError,
  DeleteAppBackupResponse,
  CreateLinkData,
  CreateLinkError,
  CreateLinkResponse,
  EditLinkData,
  EditLinkError,
  EditLinkResponse,
  DeleteLinkData,
  DeleteLinkError,
  DeleteLinkResponse,
} from '../types.gen';

type QueryKey<TOptions extends OptionsLegacyParser> = [
  Pick<TOptions, 'baseUrl' | 'body' | 'headers' | 'path' | 'query'> & {
    _id: string;
    _infinite?: boolean;
  },
];

const createQueryKey = <TOptions extends OptionsLegacyParser>(id: string, options?: TOptions, infinite?: boolean): QueryKey<TOptions>[0] => {
  const params: QueryKey<TOptions>[0] = { _id: id, baseUrl: (options?.client ?? client).getConfig().baseUrl } as QueryKey<TOptions>[0];
  if (infinite) {
    params._infinite = infinite;
  }
  if (options?.body) {
    params.body = options.body;
  }
  if (options?.headers) {
    params.headers = options.headers;
  }
  if (options?.path) {
    params.path = options.path;
  }
  if (options?.query) {
    params.query = options.query;
  }
  return params;
};

export const userContextQueryKey = (options?: OptionsLegacyParser) => [createQueryKey('userContext', options)];

export const userContextOptions = (options?: OptionsLegacyParser) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await userContext({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: userContextQueryKey(options),
  });
};

export const appContextQueryKey = (options?: OptionsLegacyParser) => [createQueryKey('appContext', options)];

export const appContextOptions = (options?: OptionsLegacyParser) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await appContext({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: appContextQueryKey(options),
  });
};

export const updateUserSettingsMutation = (options?: Partial<OptionsLegacyParser<UpdateUserSettingsData>>) => {
  const mutationOptions: UseMutationOptions<UpdateUserSettingsResponse, UpdateUserSettingsError, OptionsLegacyParser<UpdateUserSettingsData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await updateUserSettings({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const acknowledgeWelcomeMutation = (options?: Partial<OptionsLegacyParser<AcknowledgeWelcomeData>>) => {
  const mutationOptions: UseMutationOptions<AcknowledgeWelcomeResponse, AcknowledgeWelcomeError, OptionsLegacyParser<AcknowledgeWelcomeData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await acknowledgeWelcome({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const systemLoadQueryKey = (options?: OptionsLegacyParser) => [createQueryKey('systemLoad', options)];

export const systemLoadOptions = (options?: OptionsLegacyParser) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await systemLoad({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: systemLoadQueryKey(options),
  });
};

export const downloadLocalCertificateQueryKey = (options?: OptionsLegacyParser) => [createQueryKey('downloadLocalCertificate', options)];

export const downloadLocalCertificateOptions = (options?: OptionsLegacyParser) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await downloadLocalCertificate({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: downloadLocalCertificateQueryKey(options),
  });
};

export const getTranslationQueryKey = (options: OptionsLegacyParser<GetTranslationData>) => [createQueryKey('getTranslation', options)];

export const getTranslationOptions = (options: OptionsLegacyParser<GetTranslationData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getTranslation({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getTranslationQueryKey(options),
  });
};

export const loginQueryKey = (options: OptionsLegacyParser<LoginData>) => [createQueryKey('login', options)];

export const loginOptions = (options: OptionsLegacyParser<LoginData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await login({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: loginQueryKey(options),
  });
};

export const loginMutation = (options?: Partial<OptionsLegacyParser<LoginData>>) => {
  const mutationOptions: UseMutationOptions<LoginResponse, LoginError, OptionsLegacyParser<LoginData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await login({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const verifyTotpQueryKey = (options: OptionsLegacyParser<VerifyTotpData>) => [createQueryKey('verifyTotp', options)];

export const verifyTotpOptions = (options: OptionsLegacyParser<VerifyTotpData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await verifyTotp({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: verifyTotpQueryKey(options),
  });
};

export const verifyTotpMutation = (options?: Partial<OptionsLegacyParser<VerifyTotpData>>) => {
  const mutationOptions: UseMutationOptions<VerifyTotpResponse, VerifyTotpError, OptionsLegacyParser<VerifyTotpData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await verifyTotp({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const registerQueryKey = (options: OptionsLegacyParser<RegisterData>) => [createQueryKey('register', options)];

export const registerOptions = (options: OptionsLegacyParser<RegisterData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await register({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: registerQueryKey(options),
  });
};

export const registerMutation = (options?: Partial<OptionsLegacyParser<RegisterData>>) => {
  const mutationOptions: UseMutationOptions<RegisterResponse, RegisterError, OptionsLegacyParser<RegisterData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await register({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const logoutQueryKey = (options?: OptionsLegacyParser) => [createQueryKey('logout', options)];

export const logoutOptions = (options?: OptionsLegacyParser) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await logout({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: logoutQueryKey(options),
  });
};

export const logoutMutation = (options?: Partial<OptionsLegacyParser>) => {
  const mutationOptions: UseMutationOptions<LogoutResponse, LogoutError, OptionsLegacyParser> = {
    mutationFn: async (localOptions) => {
      const { data } = await logout({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const changeUsernameMutation = (options?: Partial<OptionsLegacyParser<ChangeUsernameData>>) => {
  const mutationOptions: UseMutationOptions<ChangeUsernameResponse, ChangeUsernameError, OptionsLegacyParser<ChangeUsernameData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await changeUsername({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const changePasswordMutation = (options?: Partial<OptionsLegacyParser<ChangePasswordData>>) => {
  const mutationOptions: UseMutationOptions<ChangePasswordResponse, ChangePasswordError, OptionsLegacyParser<ChangePasswordData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await changePassword({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const getTotpUriMutation = (options?: Partial<OptionsLegacyParser<GetTotpUriData>>) => {
  const mutationOptions: UseMutationOptions<GetTotpUriResponse, GetTotpUriError, OptionsLegacyParser<GetTotpUriData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await getTotpUri({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const setupTotpMutation = (options?: Partial<OptionsLegacyParser<SetupTotpData>>) => {
  const mutationOptions: UseMutationOptions<SetupTotpResponse, SetupTotpError, OptionsLegacyParser<SetupTotpData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await setupTotp({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const disableTotpMutation = (options?: Partial<OptionsLegacyParser<DisableTotpData>>) => {
  const mutationOptions: UseMutationOptions<DisableTotpResponse, DisableTotpError, OptionsLegacyParser<DisableTotpData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await disableTotp({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const resetPasswordQueryKey = (options: OptionsLegacyParser<ResetPasswordData>) => [createQueryKey('resetPassword', options)];

export const resetPasswordOptions = (options: OptionsLegacyParser<ResetPasswordData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await resetPassword({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: resetPasswordQueryKey(options),
  });
};

export const resetPasswordMutation = (options?: Partial<OptionsLegacyParser<ResetPasswordData>>) => {
  const mutationOptions: UseMutationOptions<ResetPasswordResponse, ResetPasswordError, OptionsLegacyParser<ResetPasswordData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await resetPassword({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const cancelResetPasswordMutation = (options?: Partial<OptionsLegacyParser>) => {
  const mutationOptions: UseMutationOptions<CancelResetPasswordResponse, CancelResetPasswordError, OptionsLegacyParser> = {
    mutationFn: async (localOptions) => {
      const { data } = await cancelResetPassword({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const checkResetPasswordRequestQueryKey = (options?: OptionsLegacyParser) => [createQueryKey('checkResetPasswordRequest', options)];

export const checkResetPasswordRequestOptions = (options?: OptionsLegacyParser) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await checkResetPasswordRequest({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: checkResetPasswordRequestQueryKey(options),
  });
};

export const getInstalledAppsQueryKey = (options?: OptionsLegacyParser) => [createQueryKey('getInstalledApps', options)];

export const getInstalledAppsOptions = (options?: OptionsLegacyParser) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getInstalledApps({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getInstalledAppsQueryKey(options),
  });
};

export const getGuestAppsQueryKey = (options?: OptionsLegacyParser) => [createQueryKey('getGuestApps', options)];

export const getGuestAppsOptions = (options?: OptionsLegacyParser) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getGuestApps({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getGuestAppsQueryKey(options),
  });
};

export const getAppQueryKey = (options: OptionsLegacyParser<GetAppData>) => [createQueryKey('getApp', options)];

export const getAppOptions = (options: OptionsLegacyParser<GetAppData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getApp({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getAppQueryKey(options),
  });
};

export const searchAppsQueryKey = (options?: OptionsLegacyParser<SearchAppsData>) => [createQueryKey('searchApps', options)];

export const searchAppsOptions = (options?: OptionsLegacyParser<SearchAppsData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await searchApps({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: searchAppsQueryKey(options),
  });
};

const createInfiniteParams = <K extends Pick<QueryKey<OptionsLegacyParser>[0], 'body' | 'headers' | 'path' | 'query'>>(
  queryKey: QueryKey<OptionsLegacyParser>,
  page: K,
) => {
  const params = queryKey[0];
  if (page.body) {
    params.body = {
      ...(queryKey[0].body as any),
      ...(page.body as any),
    };
  }
  if (page.headers) {
    params.headers = {
      ...queryKey[0].headers,
      ...page.headers,
    };
  }
  if (page.path) {
    params.path = {
      ...queryKey[0].path,
      ...page.path,
    };
  }
  if (page.query) {
    params.query = {
      ...queryKey[0].query,
      ...page.query,
    };
  }
  return params as unknown as typeof page;
};

export const searchAppsInfiniteQueryKey = (options?: OptionsLegacyParser<SearchAppsData>): QueryKey<OptionsLegacyParser<SearchAppsData>> => [
  createQueryKey('searchApps', options, true),
];

export const searchAppsInfiniteOptions = (options?: OptionsLegacyParser<SearchAppsData>) => {
  return infiniteQueryOptions<
    SearchAppsResponse,
    SearchAppsError,
    InfiniteData<SearchAppsResponse>,
    QueryKey<OptionsLegacyParser<SearchAppsData>>,
    string | Pick<QueryKey<OptionsLegacyParser<SearchAppsData>>[0], 'body' | 'headers' | 'path' | 'query'>
  >(
    // @ts-ignore
    {
      queryFn: async ({ pageParam, queryKey, signal }) => {
        // @ts-ignore
        const page: Pick<QueryKey<OptionsLegacyParser<SearchAppsData>>[0], 'body' | 'headers' | 'path' | 'query'> =
          typeof pageParam === 'object'
            ? pageParam
            : {
                query: {
                  cursor: pageParam,
                },
              };
        const params = createInfiniteParams(queryKey, page);
        const { data } = await searchApps({
          ...options,
          ...params,
          signal,
          throwOnError: true,
        });
        return data;
      },
      queryKey: searchAppsInfiniteQueryKey(options),
    },
  );
};

export const getAppDetailsQueryKey = (options: OptionsLegacyParser<GetAppDetailsData>) => [createQueryKey('getAppDetails', options)];

export const getAppDetailsOptions = (options: OptionsLegacyParser<GetAppDetailsData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getAppDetails({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getAppDetailsQueryKey(options),
  });
};

export const getImageQueryKey = (options: OptionsLegacyParser<GetImageData>) => [createQueryKey('getImage', options)];

export const getImageOptions = (options: OptionsLegacyParser<GetImageData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getImage({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getImageQueryKey(options),
  });
};

export const pullQueryKey = (options?: OptionsLegacyParser) => [createQueryKey('pull', options)];

export const pullOptions = (options?: OptionsLegacyParser) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await pull({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: pullQueryKey(options),
  });
};

export const pullMutation = (options?: Partial<OptionsLegacyParser>) => {
  const mutationOptions: UseMutationOptions<PullResponse, PullError, OptionsLegacyParser> = {
    mutationFn: async (localOptions) => {
      const { data } = await pull({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const getAllQueryKey = (options?: OptionsLegacyParser) => [createQueryKey('getAll', options)];

export const getAllOptions = (options?: OptionsLegacyParser) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getAll({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getAllQueryKey(options),
  });
};

export const installAppQueryKey = (options: OptionsLegacyParser<InstallAppData>) => [createQueryKey('installApp', options)];

export const installAppOptions = (options: OptionsLegacyParser<InstallAppData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await installApp({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: installAppQueryKey(options),
  });
};

export const installAppMutation = (options?: Partial<OptionsLegacyParser<InstallAppData>>) => {
  const mutationOptions: UseMutationOptions<InstallAppResponse, InstallAppError, OptionsLegacyParser<InstallAppData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await installApp({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const startAppQueryKey = (options: OptionsLegacyParser<StartAppData>) => [createQueryKey('startApp', options)];

export const startAppOptions = (options: OptionsLegacyParser<StartAppData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await startApp({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: startAppQueryKey(options),
  });
};

export const startAppMutation = (options?: Partial<OptionsLegacyParser<StartAppData>>) => {
  const mutationOptions: UseMutationOptions<StartAppResponse, StartAppError, OptionsLegacyParser<StartAppData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await startApp({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const stopAppQueryKey = (options: OptionsLegacyParser<StopAppData>) => [createQueryKey('stopApp', options)];

export const stopAppOptions = (options: OptionsLegacyParser<StopAppData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await stopApp({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: stopAppQueryKey(options),
  });
};

export const stopAppMutation = (options?: Partial<OptionsLegacyParser<StopAppData>>) => {
  const mutationOptions: UseMutationOptions<StopAppResponse, StopAppError, OptionsLegacyParser<StopAppData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await stopApp({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const restartAppQueryKey = (options: OptionsLegacyParser<RestartAppData>) => [createQueryKey('restartApp', options)];

export const restartAppOptions = (options: OptionsLegacyParser<RestartAppData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await restartApp({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: restartAppQueryKey(options),
  });
};

export const restartAppMutation = (options?: Partial<OptionsLegacyParser<RestartAppData>>) => {
  const mutationOptions: UseMutationOptions<RestartAppResponse, RestartAppError, OptionsLegacyParser<RestartAppData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await restartApp({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const uninstallAppMutation = (options?: Partial<OptionsLegacyParser<UninstallAppData>>) => {
  const mutationOptions: UseMutationOptions<UninstallAppResponse, UninstallAppError, OptionsLegacyParser<UninstallAppData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await uninstallApp({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const resetAppQueryKey = (options: OptionsLegacyParser<ResetAppData>) => [createQueryKey('resetApp', options)];

export const resetAppOptions = (options: OptionsLegacyParser<ResetAppData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await resetApp({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: resetAppQueryKey(options),
  });
};

export const resetAppMutation = (options?: Partial<OptionsLegacyParser<ResetAppData>>) => {
  const mutationOptions: UseMutationOptions<ResetAppResponse, ResetAppError, OptionsLegacyParser<ResetAppData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await resetApp({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const updateAppMutation = (options?: Partial<OptionsLegacyParser<UpdateAppData>>) => {
  const mutationOptions: UseMutationOptions<UpdateAppResponse, UpdateAppError, OptionsLegacyParser<UpdateAppData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await updateApp({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const updateAllAppsMutation = (options?: Partial<OptionsLegacyParser>) => {
  const mutationOptions: UseMutationOptions<UpdateAllAppsResponse, UpdateAllAppsError, OptionsLegacyParser> = {
    mutationFn: async (localOptions) => {
      const { data } = await updateAllApps({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const updateAppConfigMutation = (options?: Partial<OptionsLegacyParser<UpdateAppConfigData>>) => {
  const mutationOptions: UseMutationOptions<UpdateAppConfigResponse, UpdateAppConfigError, OptionsLegacyParser<UpdateAppConfigData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await updateAppConfig({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const backupAppQueryKey = (options: OptionsLegacyParser<BackupAppData>) => [createQueryKey('backupApp', options)];

export const backupAppOptions = (options: OptionsLegacyParser<BackupAppData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await backupApp({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: backupAppQueryKey(options),
  });
};

export const backupAppMutation = (options?: Partial<OptionsLegacyParser<BackupAppData>>) => {
  const mutationOptions: UseMutationOptions<BackupAppResponse, BackupAppError, OptionsLegacyParser<BackupAppData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await backupApp({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const restoreAppBackupQueryKey = (options: OptionsLegacyParser<RestoreAppBackupData>) => [createQueryKey('restoreAppBackup', options)];

export const restoreAppBackupOptions = (options: OptionsLegacyParser<RestoreAppBackupData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await restoreAppBackup({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: restoreAppBackupQueryKey(options),
  });
};

export const restoreAppBackupMutation = (options?: Partial<OptionsLegacyParser<RestoreAppBackupData>>) => {
  const mutationOptions: UseMutationOptions<RestoreAppBackupResponse, RestoreAppBackupError, OptionsLegacyParser<RestoreAppBackupData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await restoreAppBackup({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const getAppBackupsQueryKey = (options: OptionsLegacyParser<GetAppBackupsData>) => [createQueryKey('getAppBackups', options)];

export const getAppBackupsOptions = (options: OptionsLegacyParser<GetAppBackupsData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getAppBackups({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getAppBackupsQueryKey(options),
  });
};

export const getAppBackupsInfiniteQueryKey = (options: OptionsLegacyParser<GetAppBackupsData>): QueryKey<OptionsLegacyParser<GetAppBackupsData>> => [
  createQueryKey('getAppBackups', options, true),
];

export const getAppBackupsInfiniteOptions = (options: OptionsLegacyParser<GetAppBackupsData>) => {
  return infiniteQueryOptions<
    GetAppBackupsResponse,
    GetAppBackupsError,
    InfiniteData<GetAppBackupsResponse>,
    QueryKey<OptionsLegacyParser<GetAppBackupsData>>,
    number | Pick<QueryKey<OptionsLegacyParser<GetAppBackupsData>>[0], 'body' | 'headers' | 'path' | 'query'>
  >(
    // @ts-ignore
    {
      queryFn: async ({ pageParam, queryKey, signal }) => {
        // @ts-ignore
        const page: Pick<QueryKey<OptionsLegacyParser<GetAppBackupsData>>[0], 'body' | 'headers' | 'path' | 'query'> =
          typeof pageParam === 'object'
            ? pageParam
            : {
                query: {
                  page: pageParam,
                },
              };
        const params = createInfiniteParams(queryKey, page);
        const { data } = await getAppBackups({
          ...options,
          ...params,
          signal,
          throwOnError: true,
        });
        return data;
      },
      queryKey: getAppBackupsInfiniteQueryKey(options),
    },
  );
};

export const deleteAppBackupMutation = (options?: Partial<OptionsLegacyParser<DeleteAppBackupData>>) => {
  const mutationOptions: UseMutationOptions<DeleteAppBackupResponse, DeleteAppBackupError, OptionsLegacyParser<DeleteAppBackupData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await deleteAppBackup({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const getLinksQueryKey = (options?: OptionsLegacyParser) => [createQueryKey('getLinks', options)];

export const getLinksOptions = (options?: OptionsLegacyParser) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await getLinks({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: getLinksQueryKey(options),
  });
};

export const createLinkQueryKey = (options: OptionsLegacyParser<CreateLinkData>) => [createQueryKey('createLink', options)];

export const createLinkOptions = (options: OptionsLegacyParser<CreateLinkData>) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await createLink({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: createLinkQueryKey(options),
  });
};

export const createLinkMutation = (options?: Partial<OptionsLegacyParser<CreateLinkData>>) => {
  const mutationOptions: UseMutationOptions<CreateLinkResponse, CreateLinkError, OptionsLegacyParser<CreateLinkData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await createLink({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const editLinkMutation = (options?: Partial<OptionsLegacyParser<EditLinkData>>) => {
  const mutationOptions: UseMutationOptions<EditLinkResponse, EditLinkError, OptionsLegacyParser<EditLinkData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await editLink({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const deleteLinkMutation = (options?: Partial<OptionsLegacyParser<DeleteLinkData>>) => {
  const mutationOptions: UseMutationOptions<DeleteLinkResponse, DeleteLinkError, OptionsLegacyParser<DeleteLinkData>> = {
    mutationFn: async (localOptions) => {
      const { data } = await deleteLink({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const checkQueryKey = (options?: OptionsLegacyParser) => [createQueryKey('check', options)];

export const checkOptions = (options?: OptionsLegacyParser) => {
  return queryOptions({
    queryFn: async ({ queryKey, signal }) => {
      const { data } = await check({
        ...options,
        ...queryKey[0],
        signal,
        throwOnError: true,
      });
      return data;
    },
    queryKey: checkQueryKey(options),
  });
};
