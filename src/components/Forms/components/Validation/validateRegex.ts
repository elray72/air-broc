import { IValidationResult } from '../../interfaces';

const validateRegex = (
  elem: EventTarget & HTMLInputElement,
  regex?: string,
): IValidationResult => {
  const { value, placeholder, dataset } = elem;
  const error =
    dataset?.validationError ||
    `Invalid ${dataset?.label || placeholder || 'field value'}.`;

  if (!regex) {
    return {
      isValid: true,
    };
  }

  if (!new RegExp(regex).test(value)) {
    return {
      isValid: false,
      error,
    };
  }

  return {
    isValid: true,
  };
};

export default validateRegex;
