import React from 'react';
import clsx from 'clsx';
import './_errorPanel.scss';

interface IErrorPanel {
  children?: React.ReactNode;
  className?: string;
}

const ErrorPanel: React.FC<IErrorPanel> = ({ children, className }) => {
  return (
    <div className={clsx(className, 'error-panel')}>
      <div className="error-panel__inner">{children}</div>
    </div>
  );
};

export default ErrorPanel;
