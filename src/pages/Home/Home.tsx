import React from 'react';
import clsx from 'clsx';
import { Button } from '../../components/UI/Buttons';
import { Modal, useModal } from '../../components/UI/Modal';
import InviteForm from '../../components/Forms/InviteForm/InviteForm';
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
        <h1>
          A better way
          <br /> to enjoy every day
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Button theme="primary" onClick={handleRequestInviteClick}>
          Get Started
        </Button>
      </div>
      <Modal isOpen={inviteModal.isOpen} onClose={inviteModal.handleClose}>
        <InviteForm onSuccess={handleInviteSuccess} />
      </Modal>
      <Modal isOpen={successModal.isOpen} onClose={successModal.handleClose}>
        woo hooo
      </Modal>
    </div>
  );
};

export default Home;
