import React, { useRef, useState } from 'react';
import clsx from 'clsx';

import { HTTP_STATUS } from '../../../common/enums';
import { ERROR_MESSAGES, REGEX } from '../../../common/constants';
import InvitationService from '../../../services/InvitationService';

import { ErrorPanel } from '../../UI/Panels';
import { Button } from '../../UI/Buttons';
import { Form, FormHeading, FormRow, TextInput } from '../components';
import { Loading } from '../../UI/Loading';
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
  const [isLoading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleInputBlur = () => {
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { isFormValid, formData } = validateForm(formRef.current);
    if (!isFormValid) {
      setError('One or more fields are invalid.');
      return;
    }

    setLoading(true);
    const result = await InvitationService.createInvitation({
      name: formData.name,
      email: formData.email,
    });

    setLoading(false);
    if (result.status !== HTTP_STATUS.OK) {
      setError(result.data.errorMessage || ERROR_MESSAGES.Default);
      return;
    }

    onSuccess(e);
  };

  return (
    <Form
      className={clsx(className, 'invite-form')}
      onSubmit={handleSubmit}
      forwardRef={formRef}
    >
      {isLoading && <Loading />}
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
      {error && (
        <ErrorPanel className="invite-form__error-panel">{error}</ErrorPanel>
      )}
      <FormRow>
        <Button className="invite-form__submit-btn" type="submit">
          Submit
        </Button>
      </FormRow>
    </Form>
  );
};

export default InviteForm;
