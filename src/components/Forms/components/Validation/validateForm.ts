import { validateField } from './index';

const INPUT_TAGS = ['INPUT', 'SELECT', 'TEXTAREA'];

const validateForm = (form: HTMLFormElement | null) => {
  if (!form || !form?.elements) return { isValid: true };

  let isFormValid = true;
  [...(form?.elements || [])].forEach(elem => {
    if (!INPUT_TAGS.includes(elem.tagName)) return;

    const { isValid } = validateField(elem);
    if (!isValid) isFormValid = false;
  });
  return { isFormValid };
};

export default validateForm;
