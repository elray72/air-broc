import { validateField } from './index';
import { IFormData } from '../../interfaces/IFormData';

const INPUT_TAGS = ['INPUT', 'SELECT', 'TEXTAREA'];

const validateForm = (form: HTMLFormElement | null) => {
  if (!form || !form?.elements) return { isValid: true };

  const formData: IFormData = {};
  let isFormValid = true;

  [...(form?.elements || [])].forEach(
    (elem: EventTarget & HTMLInputElement) => {
      if (!INPUT_TAGS.includes(elem.tagName)) return;

      formData[elem.name] = elem.value;
      const { isValid } = validateField(elem);
      if (!isValid) isFormValid = false;
    },
  );
  return { isFormValid, formData };
};

export default validateForm;
