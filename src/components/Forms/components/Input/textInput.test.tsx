import React from 'react';
import {
  render,
  screen,
  fireEvent,
  userEvent,
  waitFor,
} from '../../../../test/utils';
import TextInput from './TextInput';

const INPUT_LABEL = 'Text input field';

describe('Button', () => {
  it('should render input', () => {
    render(<TextInput label={INPUT_LABEL} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should trigger required error', async () => {
    render(<TextInput label={INPUT_LABEL} validation={{ required: true }} />);

    const input = screen.getByRole('textbox');
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByText(/is required/)).toBeInTheDocument();
    });
  });

  it('should not trigger required error', async () => {
    render(<TextInput label={INPUT_LABEL} validation={{ required: true }} />);

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Test123');
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByRole('textbox')).not.toHaveClass('input--has-error');
    });
  });
});
