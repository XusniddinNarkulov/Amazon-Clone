import React from "react";
import { connect } from "react-redux";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "../../utils/BasketTotal";

export const SubTotal = (props) => {
   // console.log(props);
   const { basket, user } = props.data;
   const navigate = useNavigate();

   const handleCheckout = () => {
      if (user) {
         navigate("/payment");
      } else {
         navigate("/login");
      }
   };

   return (
      <div className="subtotal">
         <CurrencyFormat
            renderText={(value) => (
               <>
                  <p>
                     Subtotal {basket.length} items : <strong>{value}</strong>
                  </p>
                  <small>
                     <input type="checkbox" />
                     This orders contain a gift
                  </small>
               </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
         />
         <button onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
   );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SubTotal);
