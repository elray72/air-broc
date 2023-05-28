import React, { useRef, useState } from 'react';
import clsx from 'clsx';

import { REGEX } from '../../../common/constants';
// import InvitationService from '../../../services/InvitationService';

import { ErrorPanel } from '../../UI/Panels';
import { Button } from '../../UI/Buttons';
import { Form, FormHeading, FormRow, TextInput } from '../components';
import { validateForm } from '../components/Validation';
import './_inviteForm.scss';

interface IInviteForm {
  children?: React.ReactNode;
  className?: string;
  onSuccess: (e: React.FormEvent) => void;
}

const InviteForm: React.FC<IInviteForm> = ({ className, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleInputBlur = () => {
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { isFormValid, formData } = validateForm(formRef.current);
    if (!isFormValid) {
      setError('One or more fields are invalid.');
      return;
    }

    // const result = InvitationService.createInvitation();
    // //onSuccess(e);
  };

  return (
    <Form
      className={clsx(className, 'invite-form')}
      onSubmit={handleSubmit}
      forwardRef={formRef}
    >
      <FormHeading className="invite-form__heading" tagName="h2">
        Request an Invite
      </FormHeading>
      <FormRow>
        <TextInput
          label="Full name"
          name="name"
          validation={{
            'min-length': 3,
            required: true,
          }}
          onBlur={handleInputBlur}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Email"
          name="email"
          validation={{
            regex: REGEX.Email,
            error: 'Please enter a valid email address.',
            required: true,
          }}
          onBlur={handleInputBlur}
          onChange={handleEmailChange}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Confirm email"
          name="confirmEmail"
          validation={{
            value: email,
            error: 'Email addresses must match.',
            required: true,
          }}
          onBlur={handleInputBlur}
        />
      </FormRow>
      {error && <ErrorPanel>{error}</ErrorPanel>}
      <FormRow>
        <Button type="submit">Submit</Button>
      </FormRow>
    </Form>
  );
};

export default InviteForm;
