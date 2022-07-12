import React, { useState } from "react";
import "./Login.css";
import AmazonLogo from "../../amazon-resource/Amazon_Logo.png";
import { Link } from "react-router-dom";

const Login = () => {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   const signIn = (e) => {
      e.preventDefault();
   };

   return (
      <div className="login">
         <div className="login-container">
            <h1>Sign In</h1>
            <form action="" onSubmit={signIn}>
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
               <button type="submit" className="login-signIn">
                  Sign In
               </button>
            </form>
            <p>
               By continuing, you agree to Amazon's Conditions of Use and
               Privacy Notice
            </p>
         </div>
         <p>New to Amazon? </p>
         <Link to="/register">
            <button className="login-register">
               Create Your Amazon Account
            </button>
         </Link>
      </div>
   );
};

export default Login;
