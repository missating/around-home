import React from 'react';
import { render, screen } from '@testing-library/react';

import Companies from './index';

describe('Companies Component', () => {
  it('should display company list and time slots correctly', () => {
    render(<Companies />);

    expect(screen.getByText(/Book your resevations/i)).toBeInTheDocument();
  });
});
