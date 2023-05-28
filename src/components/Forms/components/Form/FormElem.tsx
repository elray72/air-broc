import React from 'react';
import clsx from 'clsx';

export interface IFormElem {
  children?: React.ReactNode;
  className?: string;
  elemName: string;
  tagName?: 'div' | 'h1';
}

const FormElem: React.FC<IFormElem> = ({
  children,
  className,
  elemName,
  tagName = 'div',
}) => {
  const Elem = tagName;
  return (
    <Elem className={clsx(className, `form__${elemName}`)}>{children}</Elem>
  );
};

export default FormElem;
