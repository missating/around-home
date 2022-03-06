import React from 'react';
import { render, screen } from '@testing-library/react';

import CompanyCard from './index';

const mockProps = {
  id: 1,
  name: 'test company',
  timeSlots: [
    {
      "start_time": "2018-07-09T08:00:00.000+02:00",
      "end_time": "2018-07-09T09:30:00.000+02:00"
    }
  ]
};

describe('CompanyCard Component', () => {
  it('should display company box correctly', () => {
    render(<CompanyCard {...mockProps} />);

    expect(screen.getByText(/test company/i)).toBeInTheDocument();
  });
});
