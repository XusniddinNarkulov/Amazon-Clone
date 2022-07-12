import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { registerInitiate } from "../../redux/action";
import { connect } from "react-redux";
import { useEffect } from "react";

const Register = (props) => {
   // console.log(props);
   const { registerInitiate, data } = props;

   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   const navigate = useNavigate();

   const register = (e) => {
      e.preventDefault();
      registerInitiate(email, password);
      setEmail("");
      setPassword("");
   };

   useEffect(() => {
      if (data.user) {
         navigate("/");
      }
   }, [data.user]);

   return (
      <div className="register">
         <div className="register-container">
            <h1>Create Account</h1>
            <form action="" onSubmit={register}>
               <h5>E-Mail</h5>
               <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
               />
               <h5>Password</h5>
               <input
                  type="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button className="continue">Continue</button>
               <div className="detail">
                  <p>Already have an account? </p>
                  <Link to="/login" className="signin-link">
                     <p> Sign In</p>
                  </Link>
               </div>
            </form>
         </div>
      </div>
   );
};

export default connect((s) => s, { registerInitiate })(Register);
