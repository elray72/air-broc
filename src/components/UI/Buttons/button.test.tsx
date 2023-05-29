import { render, screen } from '../../../test/utils';
import Button from './Button';

describe('Button', () => {
  it('should render the button', () => {
    render(<Button>Submit</Button>);

    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should have theme class', () => {
    render(<Button theme="primary">Submit</Button>);

    expect(screen.getByText('Submit')).toHaveClass('btn--primary');
  });

  it('should have type attribute', () => {
    render(<Button type="submit">Submit</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
