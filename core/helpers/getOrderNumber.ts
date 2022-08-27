export const getOrderNumber = () => {
  let number: string = "";
  const date = new Date();
  number += `${date.getFullYear()}${
    date.getMonth() + 1
  }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${Math.floor(
    Math.random() * 9999
  )}`;
  return number;
};
