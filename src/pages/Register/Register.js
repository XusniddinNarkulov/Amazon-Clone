import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   const register = (e) => {
      e.preventDefault();
   };

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

export default Register;
