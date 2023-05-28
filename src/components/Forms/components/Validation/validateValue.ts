import { IValidationResult } from '../../interfaces';

const validateValue = (
  elem: EventTarget & HTMLInputElement,
  value: string | number | boolean,
): IValidationResult => {
  const { value: _value, placeholder, dataset } = elem;
  const error =
    dataset?.validationError ||
    `${dataset?.label || placeholder || 'Field value'} is invalid.`;

  if (_value !== value) {
    return {
      isValid: false,
      error,
    };
  }

  return {
    isValid: true,
  };
};

export default validateValue;
