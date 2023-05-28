export interface IValidation {
  error?: string;
  'min-length'?: number;
  regex?: string;
  required?: boolean;
  value?: number | string;
}
