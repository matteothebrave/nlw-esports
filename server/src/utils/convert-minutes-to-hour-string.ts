// Script made to convert minutes (EX 1080) into hours 18:00
// Easier for the backend understand.  

export function convertMinutesToHourString(minutesAmount: number) {
  const hour = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;

  return `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}