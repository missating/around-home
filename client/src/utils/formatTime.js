export const formatTime = (time) => 
  new Date(time).toLocaleTimeString('en', { timeStyle: 'short', hour12: false, timeZone: 'UTC' });
