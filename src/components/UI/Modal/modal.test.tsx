import { render, screen } from '../../../test/utils';
import Modal from './Modal';

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
        <h1>Test modal</h1>
      </Modal>,
    );

    const modal = screen.queryByRole('document');

    expect(modal).not.toBeInTheDocument();
  });
});
