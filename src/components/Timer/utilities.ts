export function convertTime(inputInSeconds: number) {
  const hours = Math.floor(inputInSeconds / 3600);
  const minutes = Math.floor((inputInSeconds % 3600) / 60);
  const seconds = inputInSeconds % 60;

  return { hours, minutes, seconds };
}
