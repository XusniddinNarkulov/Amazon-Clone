import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import SubTotal from "../../components/SubTotal/SubTotal";

const Checkout = () => {
   const { basket, user } = useSelector((s) => s.data);

   return (
      <div className="checkout">
         <div className="checkout-left"></div>
         <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout-title">
               {basket.length === 0
                  ? "Your Shopping Basket is Empty"
                  : "Your Shopping Basket"}
            </h2>
            <CheckoutProduct />
         </div>
         <div className="checkout-right">
            <SubTotal />
         </div>
      </div>
   );
};

export default Checkout;
