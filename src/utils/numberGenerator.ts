export const generateRandomNumber = (max: number, min = 0): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export  const generateRandomNumberFromArray = (arrayLength: number): number => {
  return generateRandomNumber(arrayLength - 1);
}