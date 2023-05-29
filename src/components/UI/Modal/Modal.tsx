import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import clsx from 'clsx';
import { ReactComponent as CloseIcon } from './assets/close.svg';
import { PORTAL_ID } from '../../../common/constants';
import './_modal.scss';

const MODAL_DELAY = 300;

export interface IModal {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose: (e: React.MouseEvent | KeyboardEvent) => void;
}

const Modal: React.FC<IModal> = ({
  className,
  children,
  isOpen = false,
  onClose,
}) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const [isVisible, setVisible] = useState(isOpen);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose(e);
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      // transition in
      setModalOpen(true);
      setTimeout(() => {
        setVisible(true);
      }, 0);
      return;
    }

    // transition out
    setVisible(false);
    setTimeout(() => {
      setModalOpen(false);
    }, MODAL_DELAY);
  }, [isOpen]);

  const handleClose = (e: React.MouseEvent) => {
    onClose(e);
  };

  return isModalOpen
    ? createPortal(
        <div
          className={clsx(className, 'modal', {
            'modal--is-open': isVisible,
          })}
          role="document"
        >
          <div
            className="modal__overlay"
            onClick={handleClose}
            aria-hidden="true"
          />
          <div className={'modal__content'}>
            <button className="modal__close-btn" onClick={handleClose}>
              <span className="modal__close-text">Close popup</span>
              <CloseIcon className="modal__close-icon" />
            </button>
            <div className="modal__content-inner">
              {children || <div className="modal__placeholder"></div>}
            </div>
          </div>
        </div>,
        document.getElementById(PORTAL_ID),
      )
    : null;
};

export default Modal;
