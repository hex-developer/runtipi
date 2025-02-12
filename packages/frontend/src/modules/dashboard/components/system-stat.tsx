import { Skeleton } from '@/components/ui/Skeleton/Skeleton';
import type { IconAperture } from '@tabler/icons-react';
import clsx from 'clsx';
import type React from 'react';

interface IProps {
  icon: typeof IconAperture;
  progress: number;
  title: string;
  subtitle: string;
  metric: string;
  isLoading?: boolean;
}

export const SystemStat: React.FC<IProps> = ({ icon: IconComponent, progress, title, subtitle, metric, isLoading }) => (
  <div className="col-sm-6 col-lg-4">
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <Skeleton loading={isLoading}>
            <div className={clsx('h2 mb-3 font-weight-bold')}>{title}</div>
          </Skeleton>
          <IconComponent />
        </div>
        <div className={clsx('h2')}>
          <Skeleton loading={isLoading}>{metric}</Skeleton>
        </div>
        <div className={clsx('mb-3 text-muted')}>
          <Skeleton loading={isLoading}>{subtitle}</Skeleton>
        </div>
        <Skeleton loading={isLoading}>
          <div className="progress progress-sm">
            <div
              className="progress-bar bg-primary"
              style={{ width: `${progress.toFixed(0)}%` }}
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${progress.toFixed(0)}%`}
            >
              <span className="visually-hidden">{`${progress.toFixed(0)}%`}</span>
            </div>
          </div>
        </Skeleton>
      </div>
    </div>
  </div>
);
