import React from "react";
import Navbar from "/src/Navbar.jsx";
import { Link } from "react-router-dom";
import "./Css/Loginpage.css"
function LoginPage(){
 
 return(
        <>
        <div className="conto">
            <div className="signupcont">
                <h1>Sign Up</h1>
                <div className="ino">
                 <input type="email" placeholder="Email Address"></input><br/>
                  <input type="password" placeholder="Password"></input><br/>
                  </div>
                  <button className="con">Continue</button>
                  
                    <p className="login">Already have an account? <span>Login here</span></p>
                    
                   
                  
                  <div className="conti">
                   <input type="checkbox"></input>
                   <p>by Continuing, i agree to the terms of use and privacy policy </p>
                   </div>
            </div>
        </div>
        </>
    );

}
export default LoginPage;