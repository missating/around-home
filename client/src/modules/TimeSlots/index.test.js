import React from 'react';
import { render, screen } from '@testing-library/react';

import TimeSlots from './index';

const mockProps = {
  day: 'Monday',
  name: 'test company',
  timeSlots: [
    {
      "start_time": "2018-07-09T08:00:00.000+02:00",
      "end_time": "2018-07-09T09:30:00.000+02:00"
    }
  ],
  handleClick: jest.fn(),
  selectedTime: {
    'test company': {
      "start_time": "2018-07-09T08:00:00.000+02:00",
      "end_time": "2018-07-09T09:30:00.000+02:00"
    }
  },
  id: 2,
};

describe('TimeSlots Component', () => {
  it('should display time slots for all companies correctly', () => {
    render(<TimeSlots {...mockProps} />);

    expect(screen.getByText(/Monday/i)).toBeInTheDocument();
    expect(screen.getByText(/06:00 - 07:30/i)).toBeInTheDocument();
  });
});
