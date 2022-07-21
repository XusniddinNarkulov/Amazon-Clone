import React from "react";
import "./SingleProduct.css";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { products } from "../../utils/ProductsData";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { addToBasket } from "../../redux/action";

export const SingleProduct = (props) => {
   const { id } = useParams();
   const singleProduct = products.find((item) => item.id === id);
   const dispatch = useDispatch();

   const addItemToBasket = () => {
      dispatch(addToBasket(singleProduct));
   };

   return (
      <div className="single-product-container">
         <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className="single-product-ad"
         />
         <div>
            <div className="single-product">
               <img
                  src={singleProduct.image}
                  alt=""
                  className="single-product-image"
               />
               <div className="single-product-info">
                  <div className="single-product-title">
                     {singleProduct.title}
                  </div>
                  <div className="single-product-rating">
                     {Array(singleProduct.rating)
                        .fill()
                        .map((_, index) => (
                           <p key={index}>⭐</p>
                        ))}
                  </div>
                  <p className="single-product-price">
                     Price: <strong>$</strong>
                     <strong>{singleProduct.price}</strong>
                  </p>
                  <div className="single-product-specification">
                     <h4>Specification</h4>
                     {singleProduct.specification.map((item, index) => (
                        <li key={index}>{item}</li>
                     ))}
                  </div>
                  <div className="single-product-description">
                     <h4>Product Description</h4>
                     <p>{singleProduct.detail}</p>
                  </div>
                  <button onClick={addItemToBasket}>
                     <i>
                        <ShoppingCartOutlined />
                     </i>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
