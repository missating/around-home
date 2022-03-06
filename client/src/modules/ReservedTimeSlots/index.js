import PropTypes from 'prop-types';

import Box from 'components/Box';
import Text from 'components/Text';

import { formatTime } from "utils/formatTime";

const ReservedTimeSlots = ({name, selectedTime}) => {

  const displayReservedTime = () => {
    if (!selectedTime[name]) return null;
    return (
      <Text fontWeight="bold" fontFamily="primary" fontSize="md">
        Reservation <br/>
        {`${formatTime(selectedTime[name]?.start_time)} - ${formatTime(selectedTime[name]?.end_time)}`}
      </Text>
    );
  };

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
        {displayReservedTime()}
    </Box>
  );
};

ReservedTimeSlots.proTypes = {
  selectedTime: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default ReservedTimeSlots;
