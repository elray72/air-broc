import React from 'react';
import clsx from 'clsx';
import './_page.scss';

interface IPage {
  children?: React.ReactNode;
  className?: string;
}

const Page: React.FC<IPage> = ({ children, className }) => {
  return <div className={clsx(className, 'page')}>{children}</div>;
};

export default Page;
