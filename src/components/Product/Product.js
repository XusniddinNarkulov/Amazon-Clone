import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Product = (props) => {
   const { id, title, image, price, rating, specification, detail } = props;
   return (
      <div className="product">
         <div className="info">
            <Link to={`/products/${id}`} className="title">
               <p>{title}</p>
            </Link>
            <p className="price">
               <strong>$</strong>
               <strong>{price}</strong>
            </p>
            <div className="rating">
               {Array(rating)
                  .fill()
                  .map((_, index) => (
                     <p key={index}>⭐</p>
                  ))}
            </div>
         </div>
         <img src={image} alt={title} />
         <button>
            <i>
               <ShoppingCartOutlinedIcon />
            </i>
            Add To Basket
         </button>
      </div>
   );
};

export default Product;
