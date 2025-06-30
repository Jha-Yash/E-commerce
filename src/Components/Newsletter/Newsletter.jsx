import React from "react";
import "./Newsletter.css"
function Newsletter(){
    return(
        <div className="box">
            <h1>Get Exclusive Offers On Your Mails</h1>
            <p>Subscribe to Our Newsletter and Stay Updated</p>
            <input type="text" placeholder="Your Email id"></input>
            <button>Subscribe</button>
        </div>
    );
}
export default Newsletter;