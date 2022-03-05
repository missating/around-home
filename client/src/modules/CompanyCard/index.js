import React, { useMemo } from "react";

import Box from 'components/Box';
import Text from 'components/Text';
import Flex from "components/Flex";

import { formatDate } from "utils/formatDate";

import TimeSlots from 'modules/TimeSlots';
import ReservedTimeSlots from 'modules/ReservedTimeSlots'

const CompanyCard = ({ id, name, time_slots }) => {
  const groups = useMemo(() => time_slots.reduce((a, b) => {
    const item = b.start_time.split('T')[0];
    if (!a[item]) {
      a[item] = [];
    }
    a[item].push(b);
    return a;
  }, {}), [time_slots])

  const groupedByDate = useMemo(() => Object.keys(groups).map((date) => {
    return {
      day: formatDate(new Date(date).toISOString()),
      timeSlots: groups[date]
    };
  }), [groups]);

  console.log(groupedByDate)

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
      <ReservedTimeSlots />
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
              />
            ))
          }
      </Flex>
    </>
  );
};

export default CompanyCard;
