import React from 'react';
import clsx from 'clsx';

import { ElementTheme } from '../../../common/types';
import './_button.scss';

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  theme?: ElementTheme;
  type?: 'button' | 'reset' | 'submit';
}

const Button: React.FC<IButton> = ({
  children,
  className,
  theme = 'primary',
  type = 'button',
  ...props
}) => {
  return (
    <button
      className={clsx(className, 'btn', {
        [`btn--${theme}`]: !!theme,
      })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
