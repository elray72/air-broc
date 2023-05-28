import React, { useState } from 'react';

interface IUseModal {
  isOpen: boolean;
  setOpen: (initialOpen: boolean) => void;
  handleOpen: (e?: React.MouseEvent | KeyboardEvent) => void;
  handleClose: (e?: React.MouseEvent | KeyboardEvent) => void;
  handleToggle: (e?: React.MouseEvent | KeyboardEvent) => void;
}

export const useModal = (isOpen = false): IUseModal => {
  const [isModalOpen, setModalOpen] = useState(isOpen);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleToggle = () => {
    setModalOpen(o => !o);
  };

  return {
    isOpen: isModalOpen,
    setOpen: setModalOpen,
    handleOpen,
    handleClose,
    handleToggle,
  };
};

export default useModal;
