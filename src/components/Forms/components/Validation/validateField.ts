import { Validate } from './index';

const validateField = (elem: EventTarget & HTMLInputElement) => {
  let _isValid = true;
  let _error = '';

  Object.entries(elem.dataset).forEach(([key, value]) => {
    if (!Validate[key as keyof typeof Validate]) return;

    // @ts-ignore
    const { isValid, error } = Validate[key](elem, value);
    if (!isValid) {
      _isValid = isValid;
      _error = error || '';
    }
  });

  return {
    isValid: _isValid,
    error: _error,
  };
};

export default validateField;
