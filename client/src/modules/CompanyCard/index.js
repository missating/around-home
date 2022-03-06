import React, { useMemo, useState } from "react";
import PropTypes from 'prop-types';

import Box from 'components/Box';
import Text from 'components/Text';
import Flex from "components/Flex";

import ReservedTimeSlots from 'modules/ReservedTimeSlots';
import TimeSlots from 'modules/TimeSlots';

import { formatDate } from "utils/formatDate";

const CompanyCard = ({ id, name, timeSlots }) => {
  const [selectedTime, setSelectedTime] = useState({});

  const groups = useMemo(() => timeSlots.reduce((a, b) => {
    const item = b.start_time.split('T')[0];
    if (!a[item]) {
      a[item] = [];
    }
    a[item].push(b);
    return a;
  }, {}), [timeSlots]);

  const groupedByDate = useMemo(() => Object.keys(groups).map((date) => {
    return {
      day: formatDate(new Date(date).toISOString()),
      timeSlots: groups[date]
    };
  }), [groups]);

  const handleClick = (item) => 
    selectedTime[name]?.start_time === item.start_time 
    && selectedTime[name]?.end_time === item.end_time 
    ? setSelectedTime({}) 
    : setSelectedTime({
      [name]: item
    });

  return (
    <>
      <Box 
        height="60px"
        borderWidth="md"
        borderStyle="solid"
        borderColor="primary_600"
        borderRadius="md"
        boxShadow="lg"
        textAlign="center">
          <Text fontWeight="bold" fontFamily="primary" fontSize="md" marginTop="xs">
            {name}
          </Text>
      </Box>
      <ReservedTimeSlots name={name} selectedTime={selectedTime} />
      <Flex 
        height="400px" 
        alignItems="center" 
        flexDirection="column" 
        overflowY="scroll"
        borderWidth="md"
        borderStyle="solid"
        borderColor="primary_600"
        marginTop="lg">
          {
            groupedByDate.map((slots, index) =>(
              <TimeSlots
                key={`${id}${index}`}
                timeSlots={slots.timeSlots}
                day={slots.day}
                id={id}
                handleClick={handleClick}
                name={name} 
                selectedTime={selectedTime} 
              />
            ))
          }
      </Flex>
    </>
  );
};

CompanyCard.proTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  timeSlots: PropTypes.array.isRequired,
};

export default CompanyCard;
