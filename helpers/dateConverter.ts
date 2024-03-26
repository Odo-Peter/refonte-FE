export const dateConverter = (unixTimestamp: any) => {
  const date = new Date(unixTimestamp);

  const month =
    date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;

  return `${month}/${day}/${date.getFullYear()}`;
};
