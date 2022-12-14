// Script made to convert Hours ex 18:00 into 1080 minutes
// Easier for the backend understand. 

export function convertHourStringToMinutes(hourString: string) {
  const [hour, minutes] = hourString.split(':').map(Number);

  const minutesAmount = hour * 60 + minutes;

  return minutesAmount;
}
