import { render, screen } from '../../../test/utils';
import InviteForm from './InviteForm';

import React from 'react';

describe('Invite form', () => {
  it('should render', () => {
    render(<InviteForm onSuccess={() => void 0} />);

    expect(screen.getByText('Request an Invite')).toBeInTheDocument();
  });
});
