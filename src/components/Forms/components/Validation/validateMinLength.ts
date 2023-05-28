import { IValidationResult } from '../../interfaces';

const validateMinLength = (
  elem: EventTarget & HTMLInputElement,
  minLength: number,
): IValidationResult => {
  const { value, placeholder, dataset } = elem;
  const error = `${
    dataset?.label || placeholder || 'Field value'
  } must be at least ${minLength} characters long.`;

  if (value.length < minLength) {
    return {
      isValid: false,
      error,
    };
  }

  return {
    isValid: true,
  };
};

export default validateMinLength;
