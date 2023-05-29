import { HTMLAttributes } from 'react';
import FormElem, { IFormElem } from './Form/FormElem';

export { default as Form } from './Form/Form';
export { default as TextInput } from './Input/TextInput';

export const FormHeading = ({ tagName, ...props }: IFormElem) =>
  FormElem({ elemName: 'heading', tagName: tagName || 'h1', ...props });

export const FormRow = (props: HTMLAttributes<any>) =>
  FormElem({ elemName: 'row', ...props });
