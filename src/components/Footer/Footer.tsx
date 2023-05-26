import React from 'react';
import clsx from 'clsx';
import './_footer.scss';

interface IFooter {
  children?: React.ReactNode;
  className?: string;
}

const Footer: React.FC<IFooter> = ({ children, className }) => {
  return <footer className={clsx(className)}>{children}</footer>;
};

export default Footer;
