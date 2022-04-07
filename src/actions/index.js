export const increment = (number) => {
  return {
    type: "INCREMENT",
    payload: number
  }; /* returning an object */
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  }; 
};
