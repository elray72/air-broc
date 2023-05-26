import React from 'react';
import clsx from 'clsx';
import './_header.scss';

interface IHeader {
  children?: React.ReactNode;
  className?: string;
}

const Header: React.FC<IHeader> = ({ children, className }) => {
  return <header className={clsx(className)}>{children}</header>;
};

export default Header;
