export const getBasketTotal = (basket) => {
   return basket.reduce((amount, item) => {
      // console.log(amount);
      // console.log(item);
      return item.price + amount;
   }, 0);
};
