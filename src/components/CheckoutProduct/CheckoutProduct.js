import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import { connect } from "react-redux";
import "./CheckoutProduct.css";
import { removeFromBasket } from "../../redux/action";

export const CheckoutProduct = (props) => {
   // console.log(props);
   const { basket } = props.data;
   const { removeFromBasket } = props;

   const removeItemFromBasket = (id) => {
      removeFromBasket(id);
   };

   return basket.map((item, key) => {
      const { id, title, image, rating, price } = item;
      return (
         <div className="checkout-product" key={key}>
            <img src={image} alt="" className="checkout-product-image" />
            <div className="checkout-product-info">
               <p className="checkout-product-title">{title}</p>
               <p className="checkout-product-price">
                  <strong>$</strong>
                  <strong>{price}</strong>
               </p>
               <div className="checkout-product-rating">
                  {Array(rating)
                     .fill()
                     .map((_, index) => (
                        <p key={index}>⭐</p>
                     ))}
               </div>
               <button onClick={() => removeItemFromBasket(id)}>
                  <i>
                     <ShoppingCartOutlined />
                  </i>
                  Remove From Basket
               </button>
            </div>
         </div>
      );
   });
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = { removeFromBasket };

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutProduct);
