import React from 'react';
import clsx from 'clsx';

import { Button } from '../../components/UI/Buttons';
import { Modal, useModal } from '../../components/UI/Modal';
import { InviteForm, InviteSuccess } from '../../components/Forms/InviteForm';
import './_home.scss';

interface IHome {
  className?: string;
}

const Home: React.FC<IHome> = ({ className }) => {
  const inviteModal = useModal();
  const successModal = useModal();

  const handleRequestInviteClick = () => {
    inviteModal.handleOpen();
  };

  const handleInviteSuccess = () => {
    inviteModal.handleClose();

    setTimeout(() => {
      successModal.handleOpen();
    }, 300);
  };

  return (
    <div className={clsx(className, 'home')}>
      <div className="home__inner">
        <h1 className="home__heading">
          A <em>better way</em>
          <br /> to enjoy every day
        </h1>
        <p className="home__tagline">Be the first to know when we launch.</p>
        <Button
          className="home__cta"
          theme="primary"
          onClick={handleRequestInviteClick}
        >
          Get Started
        </Button>
      </div>
      <Modal isOpen={inviteModal.isOpen} onClose={inviteModal.handleClose}>
        <InviteForm onSuccess={handleInviteSuccess} />
      </Modal>
      <Modal isOpen={successModal.isOpen} onClose={successModal.handleClose}>
        <InviteSuccess onClose={successModal.handleClose} />
      </Modal>
    </div>
  );
};

export default Home;
