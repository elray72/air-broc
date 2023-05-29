import React, { useState } from 'react';
import {
  render,
  screen,
  fireEvent,
  userEvent,
  waitFor,
} from '../../../test/utils';
import { Button } from '../Buttons';
import Modal, { IModal } from './Modal';

const ModalArrangement: React.FC<IModal> = ({
  isOpen: initialIsOpen = false,
}) => {
  const [isOpen, setOpen] = useState(initialIsOpen);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <h1>Modal title</h1>
      </Modal>
    </div>
  );
};

describe('Button', () => {
  document.body.innerHTML = '<div id="portal" />';

  it('should render modal', () => {
    render(
      <Modal isOpen={true}>
        <h1>Test modal</h1>
      </Modal>,
    );

    expect(screen.getByText('Test modal')).toBeInTheDocument();
  });

  it('should not render modal', () => {
    render(
      <Modal isOpen={false}>
        <h1>Modal title</h1>
      </Modal>,
    );

    const modal = screen.queryByRole('document');

    expect(modal).not.toBeInTheDocument();
  });

  it('should open modal on click', async () => {
    render(<ModalArrangement isOpen={false} />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    await waitFor(() =>
      expect(screen.queryByText('Modal title')).toBeInTheDocument(),
    );
  });

  it('should close modal on close click', async () => {
    render(<ModalArrangement isOpen={true} />);

    const button = screen.getByText('Close popup');
    await userEvent.click(button);

    await waitFor(() =>
      expect(screen.queryByText('Modal title')).not.toBeInTheDocument(),
    );
  });

  it('should close modal on esc keypress', async () => {
    render(<ModalArrangement isOpen={true} />);

    const modal = screen.getByRole('document');
    fireEvent.keyDown(modal, { key: 'Escape' });

    await waitFor(() =>
      expect(screen.queryByText('Modal title')).not.toBeInTheDocument(),
    );
  });
});
