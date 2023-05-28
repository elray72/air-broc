import React from 'react';
import clsx from 'clsx';
import { Button } from '../../components/UI/Buttons';
import { Modal, useModal } from '../../components/UI/Modal';
import './_home.scss';

interface IHome {
  className?: string;
}

const Home: React.FC<IHome> = ({ className }) => {
  const inviteModal = useModal();

  const handleRequestInviteClick = () => {
    inviteModal.handleOpen();
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
      <Modal
        isOpen={inviteModal.isOpen}
        onClose={inviteModal.handleClose}
      ></Modal>
    </div>
  );
};

export default Home;
