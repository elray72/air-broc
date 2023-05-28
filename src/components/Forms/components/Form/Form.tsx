import React from 'react';
import clsx from 'clsx';
import './_form.scss';

interface IForm extends React.FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
  className?: string;
}

const Form: React.FC<IForm> = ({
  children,
  className,
  forwardRef,
  ...props
}) => {
  return (
    <form className={clsx(className, 'form')} ref={forwardRef} {...props}>
      {children}
    </form>
  );
};

export default Form;
