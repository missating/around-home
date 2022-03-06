import React from 'react';
import { render, screen } from '@testing-library/react';

import ReservedTimeSlots from './index';

const mockProps = {
  name: 'test company',
  selectedTime: {
    'test company': {
      "start_time": "2018-07-09T08:00:00.000+02:00",
      "end_time": "2018-07-09T09:30:00.000+02:00"
    }
  }
};

describe('ReservedTimeSlots Component', () => {
  it('should display the reserved time correctly', () => {
    render(<ReservedTimeSlots {...mockProps} />);

    expect(screen.getByText(/Reservation/i)).toBeInTheDocument();
  });
});
