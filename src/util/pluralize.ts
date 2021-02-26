export const pluralizeParts = (count: number) => count === 1
  ? `${count.toLocaleString()} part`
  : `${count.toLocaleString()} parts`;
