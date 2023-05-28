import React from 'react';
import clsx from 'clsx';
import './_loading.scss';

interface ILoading {
  children?: React.ReactNode;
  className?: string;
}

const Loading: React.FC<ILoading> = ({ children, className }) => {
  return (
    <div className={clsx('loading', className)}>
      <div className={clsx(className, 'loading-dots')}>
        <span className="loading-dots__dot" />
        <span className="loading-dots__dot" />
        <span className="loading-dots__dot" />
        <span className="loading-dots__dot" />
      </div>
    </div>
  );
};

export default Loading;
