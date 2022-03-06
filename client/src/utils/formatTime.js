export const formatTime = (time) => {
  if (!time) return;
  return new Date(time).toLocaleTimeString('en', { timeStyle: 'short', hour12: false, timeZone: 'UTC' });
};
