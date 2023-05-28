import validateField from './validateField';
import validateForm from './validateForm';
import validateMinLength from './validateMinLength';
import validateRegex from './validateRegex';
import validateRequired from './validateRequired';
import validateValue from './validateValue';

type TargetElem = EventTarget & HTMLInputElement;

export enum VALIDATION {
  MinLength = 'validationMinLength',
  Regex = 'validationRegex',
  Required = 'validationRequired',
  Value = 'validationValue',
}

export const Validate = {
  [VALIDATION.MinLength]: (elem: TargetElem, minLength: number) =>
    validateMinLength(elem, minLength),
  [VALIDATION.Regex]: (elem: TargetElem, pattern: RegExp) =>
    validateRegex(elem, pattern),
  [VALIDATION.Required]: (elem: TargetElem) => validateRequired(elem),
  [VALIDATION.Value]: (elem: TargetElem, value: string | number | boolean) =>
    validateValue(elem, value),
};

export { validateField, validateForm, validateMinLength, validateRegex, validateRequired };
export * from '../../interfaces';
