import React from "react";
import "./Footer.css"
import logo_big from "../../../src/assets/logo_big.png"
import instagram_icon from "../../../src/assets/instagram_icon.png"
import pintester_icon from "../../../src/assets/pintester_icon.png"
import whatsapp_icon from "../../../src/assets/whatsapp_icon.png"
function Footer(){
    return(
        <div className="foot">
            <div className="logo">
            <img src={logo_big}></img>
           <p>SHOPPER</p> 
           </div>
            <ul className="com">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="icons">
            <img src={instagram_icon}></img>
            <img src={pintester_icon}></img>
            <img src={whatsapp_icon}></img>
            </div>
            <p>Copyright @ 2024 - All Right Reserved</p>
            
        </div>
    );
}
export default Footer