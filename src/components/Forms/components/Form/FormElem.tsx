import React from 'react';
import clsx from 'clsx';

export interface IFormElem {
  children?: React.ReactNode;
  className?: string;
  elemName?: string;
  tagName?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

const FormElem: React.FC<IFormElem> = ({
  children,
  className,
  elemName = 'elem',
  tagName = 'div',
}) => {
  const Elem = tagName;
  return (
    <Elem className={clsx(className, `form__${elemName}`)}>{children}</Elem>
  );
};

export default FormElem;
