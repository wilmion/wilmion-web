export const elegibleDate = (date: Date) => {
  return date.toISOString().slice(0, 10);
};
