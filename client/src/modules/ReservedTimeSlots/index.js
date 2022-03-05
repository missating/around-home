import React from "react";

import Box from 'components/Box';
import Text from 'components/Text';

const ReservedTimeSlots = () => {
  return (
    <Box 
      height="60px"
      borderWidth="md"
      borderStyle="solid"
      borderColor="primary_600"
      borderRadius="md"
      boxShadow="lg"
      textAlign="center"
      marginTop="lg"da>
      <Text fontWeight="bold" fontFamily="primary" fontSize="md" marginTop="xs">
        Reserved Time
      </Text>
    </Box>
  );
};

export default ReservedTimeSlots;
