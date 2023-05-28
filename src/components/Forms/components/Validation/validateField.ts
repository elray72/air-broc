import { Validate, validateRegex, VALIDATION } from './index';
import { IValidation } from '../../interfaces';

const validateField = (
  elem: EventTarget & HTMLInputElement,
  validation?: IValidation,
) => {
  let _isValid = true;
  let _error = '';

  Object.entries(elem.dataset).forEach(([key, value]) => {
    if (!Validate[key]) return;

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
