import React, { useEffect, useState } from "react";
import "./Login.css";
import AmazonLogo from "../../amazon-resource/Amazon_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginInitiate } from "../../redux/action";
import { NavigateBefore } from "@mui/icons-material";

const Login = (props) => {
   const { loginInitiate, data } = props;
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const navigate = useNavigate();

   const signIn = (e) => {
      e.preventDefault();
      loginInitiate(email, password);
      setEmail("");
      setPassword("");
   };

   useEffect(() => {
      if (data.user) {
         navigate("/");
      }
   }, [data.user]);

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

export default connect((s) => s, { loginInitiate })(Login);
