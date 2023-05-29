import React, { useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { IValidation, validateField } from '../Validation';
import './_input.scss';

interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  validation: IValidation;
}

const TextInput: React.FC<ITextInput> = ({
  className,
  label,
  required,
  validation,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isTouched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const { id, name, disabled, onBlur } = props;
  const resolvedId = id ? id : name;

  const dataset = useMemo(() => {
    let set = {};
    Object.entries(validation || []).map(([key, value]) => {
      set = {
        ...set,
        [`data-validation-${key}`]: value,
      };
    });
    return set;
  }, [validation]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setError('');
    setTouched(true);
    const { isValid, error } = validateField(e.target, validation);

    if (!isValid) setError(error);
    if (onBlur) onBlur(e);
  };

  return (
    <div
      className={clsx(className, 'input', {
        [`input--disabled`]: disabled,
        [`input--has-error`]: !!error,
        [`input--has-value`]: !!inputRef.current?.value,
        [`input--touched`]: isTouched,
      })}
    >
      {label && (
        <label className="input__label" htmlFor={resolvedId}>
          {label}
        </label>
      )}
      <input
        id={resolvedId}
        className="input__field"
        placeholder={label}
        ref={inputRef}
        {...dataset}
        {...props}
        onBlur={handleBlur}
      />
      {error && <span className="input__error">{error}</span>}
    </div>
  );
};

export default TextInput;
