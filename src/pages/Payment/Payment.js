import React, { useState } from "react";
import { connect } from "react-redux";
import "./Payment.css";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { getBasketTotal } from "../../utils/BasketTotal";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import instance from "../../utils/axios";
import axios from "axios";
import { useEffect } from "react";
// import { async } from "@firebase/util";

export const Payment = (props) => {
   const { basket, user } = props.data;
   const navigate = useNavigate();

   const [succeeded, setSucceeded] = useState(false);
   const [processing, setProcessing] = useState("");
   const [error, setError] = useState(null);
   const [disabled, setDisabled] = useState(true);
   const [clientSecret, setClientSecret] = useState(true);

   useEffect(() => {
      const getClientSecret = async () => {
         const response = await axios({
            method: "POST",
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
         });
         console.log(response);
         setClientSecret(response.data.clientSecret);
      };
      getClientSecret();
   }, [basket]);

   const stripe = useStripe();
   const elements = useElements();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setProcessing(true);
      const payload = await stripe
         .confirmCardPayment(clientSecret, {
            payment_method: {
               card: elements.getElement(CardElement),
            },
         })
         .then(({ paymentIntent }) => {
            db.collection("users")
               .doc(user && user.uid)
               .collection("orders")
               .doc(paymentIntent.id)
               .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created,
               });
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            navigate.replace("/orders");
         });
   };

   const handleChange = (e) => {
      setDisabled(e.empty);
      setError(e.error ? e.error.message : "");
   };

   return (
      <div className="payment">
         <div className="payment-container">
            <h1>
               Checkout <Link to="/checkout">{basket.length} items</Link>
            </h1>
            <div className="payment-section">
               <div className="payment-title">
                  <h3>Delivery Address</h3>
               </div>
               <div className="payment-address">
                  <p>{user.email}</p>
                  <p>House no. 12 Near Feruza Street</p>
                  <p>Lucknow, Tashkent</p>
               </div>
            </div>

            <div className="payment-section">
               <div className="payment-title">
                  <h3>Review items and Delivery</h3>
               </div>
               <div className="paymnet-items">
                  <CheckoutProduct />
               </div>
            </div>

            <div className="payment-section">
               <div className="payment-title">
                  <h3>Payment Method</h3>
               </div>
               <div className="payment-details">
                  <form action="" onSubmit={handleSubmit}>
                     <CardElement onChange={handleChange} />
                     {error && <div>{error}</div>}
                     <div className="payment-priceContainer">
                        <CurrencyFormat
                           renderText={(value) => (
                              <>
                                 <h3>Order Total: {value}</h3>
                              </>
                           )}
                           decimalScale={2}
                           value={getBasketTotal(basket)}
                           displayType={"text"}
                           thousandSeparator={true}
                           prefix={"$"}
                        />
                     </div>
                     <button
                        disabled={processing || disabled || succeeded}
                        className="payment-button"
                     >
                        {processing ? "Processing" : "Buy Now"}
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
