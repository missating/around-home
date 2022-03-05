import React from "react";

import Text from "components/Text";
import Button from "components/Button";

import { formatTime } from "utils/formatTime";

const TimeSlots = ({ day, timeSlots }) => {
  return (
    <>
      <Text fontWeight="bold" fontFamily="primary" fontSize="md" marginTop="xs">
        {day}
      </Text>
      {
        timeSlots.map((item) => (
          <Button
            variant="primary"
            width="50%"
            margin="xs">
            {formatTime(item.start_time)} - {formatTime(item.end_time)}
          </Button>
        ))
      }
    </>
  );
};

export default TimeSlots;
