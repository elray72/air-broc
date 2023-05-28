import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render the button', () => {
    render(<Button>Submit</Button>);

    expect(screen.getByText(/submit/i)).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
