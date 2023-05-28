import { IValidationResult } from '../../interfaces';

const validateRequired = (
  elem: EventTarget & HTMLInputElement,
): IValidationResult => {
  const { value, placeholder, dataset } = elem;
  const error = `${dataset?.label || placeholder || 'Field'} is required.`;

  if (!value?.length) {
    return {
      isValid: false,
      error,
    };
  }

  return {
    isValid: true,
  };
};

export default validateRequired;
