import React from 'react';
import PropTypes from 'prop-types';

import Text from "components/Text";
import Button from "components/Button";

import { formatTime } from "utils/formatTime";

const TimeSlots = ({ day, timeSlots, handleClick, id, selectedTime, name }) => {
  const objectValues = Object.keys(selectedTime).length > 0 && Object.values(selectedTime)[0];

  return (
    <>
      <Text fontWeight="bold" fontFamily="primary" fontSize="md" marginTop="xs">
        {day}
      </Text>
      {
        timeSlots.map((item, index) => {
          const checkSelectedItem = selectedTime[name]?.start_time === item.start_time 
              && selectedTime[name]?.end_time === item.end_time;

          const checkDisabledTimeSlot = formatTime(item.start_time) < formatTime(objectValues.end_time) 
              && formatTime(objectValues.start_time) < formatTime(item.end_time);

          let isTimeslotDisabled = false;

          if (checkDisabledTimeSlot && !checkSelectedItem) {
            isTimeslotDisabled = true
          } 
          return (
            <Button
              key={`${id}${index}`}
              variant={checkSelectedItem
                 ? 'primary' 
                 : 'secondary'}
              width="50%"
              margin="xs"
              disabled={isTimeslotDisabled}
              onClick={() => handleClick(item)}>
              {formatTime(item.start_time)} - {formatTime(item.end_time)}
            </Button>
          )
        })
      }
    </>
  );
};

TimeSlots.propTypes = {
  day: PropTypes.string.isRequired,
  timeSlots: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  selectedTime: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default TimeSlots;
