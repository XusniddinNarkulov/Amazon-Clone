import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutInitiate } from "../../redux/action";

const Header = (props) => {
   const { logoutInitiate } = props;
   const { user, basket } = props.data;

   const signOut = () => {
      if (user) {
         logoutInitiate();
      }
   };

   return (
      <nav className="header">
         <Link to="/">
            <img
               className="header-logo"
               src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
               alt="amazon logo"
            />
         </Link>
         <div className="header-option" style={{ marginRight: "-10px" }}>
            <LocationOnOutlinedIcon />
         </div>
         <div className="header-option">
            <span className="header-option1">Hello</span>
            <span className="header-option2">Select Your Address</span>
         </div>
         <div className="search">
            <select name="" id="">
               <option value="">All</option>
            </select>
            <input type="text" className="searchInput" />
            <SearchIcon className="searchIcon" />
         </div>
         <div className="header-nav">
            {user ? (
               <div className="header-option">
                  <span className="header-option1">Hello, {user.email}</span>
                  <span
                     className="header-option2"
                     onClick={signOut}
                     style={{ cursor: "pointer" }}
                  >
                     Sign Out
                  </span>
               </div>
            ) : (
               <Link to="/login" className="header-link">
                  <div className="header-option">
                     <span className="header-option1">Hello, Guest</span>
                     <span className="header-option2">Sign In</span>
                  </div>
               </Link>
            )}

            <Link to="/orders" className="header-link">
               <div className="header-option">
                  <span className="header-option1">Returns</span>
                  <span className="header-option2">& Orders</span>
               </div>
            </Link>
            <Link to="/checkout" className="header-link">
               <div className="header-basket">
                  <ShoppingCartOutlinedIcon />
                  <span className="header-option2 basket-count">
                     {basket.length}
                  </span>
               </div>
            </Link>
         </div>
      </nav>
   );
};

export default connect((s) => s, { logoutInitiate })(Header);
