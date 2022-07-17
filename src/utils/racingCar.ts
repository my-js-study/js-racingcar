export const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });
};

export const getRandomNumber = (start: number, end: number) => {
  return Math.trunc(Math.random() * (end + 1) + start);
};
