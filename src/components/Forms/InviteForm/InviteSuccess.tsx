import React from 'react';
import clsx from 'clsx';
import { FormHeading } from '../components';
import { Button } from '../../UI/Buttons';
import './_inviteForm.scss';

interface IInviteSuccess {
  className?: string;
  onClose: (e: React.MouseEvent | KeyboardEvent) => void;
}

const InviteSuccess: React.FC<IInviteSuccess> = ({ className, onClose }) => {
  return (
    <div className={clsx(className, 'invite-form', 'invite-form--success')}>
      <FormHeading className="invite-form__heading">
        Your invitation request has been sent
      </FormHeading>
      <p className="invite-form__text">
        Check your inbox, including your spam folder, and follow the
        instructions to complete your registration.
      </p>
      <Button onClick={onClose}>OK</Button>
    </div>
  );
};

export default InviteSuccess;
