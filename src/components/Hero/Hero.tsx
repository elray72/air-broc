import React from 'react';
import clsx from 'clsx';
import './_hero.scss';

interface IHero {
  children?: React.ReactNode;
  className?: string;
}

const Hero: React.FC<IHero> = ({ children, className }) => {
  return <div className={clsx(className)}>{children}</div>;
};

export default Hero;
