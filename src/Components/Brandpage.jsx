import React from "react";
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import Nike from '../assets/nike_PNG12.png'//../ use if brandpage is inside a subfolder
import Amz from '../assets/1920x1080-brands-amazon-logo.jpg'
import flip from '../assets/Flipkart-Emblem.png'
import shoe from '../assets/nikeshoe.png'
import Navbar from "/src/Navbar.jsx";
import hero_image from "../assets/hero_image.png"
import Poppular from '../Components/Poppular/Poppular'
import Offers from "./Offers/Offers";
import Newc from "../../src/Components/Newcollections/Newc"
import Newsletter from "../../src/Components/Newsletter/Newsletter"
function Brandpage(){
   
    return(
        <>
        <div className="cont">
           {/* <Navbar></Navbar> */}
            <div className="conthold">
            <div className="textcont">
            <div className="text"><h1>YOUR BODY DESERVE THE BEST</h1></div>
            <div className="text2"><p>YOUR BODY DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR CLOTHES </p></div>
            <div className="butt">
                <button className="butt1">Latest Collections ➡️</button>
                
            </div>
            <div className="text3">
               
                
            
            </div>
            </div>
            <div className="textcont2">
                <img className="bi" src={hero_image}></img>
            </div>
            </div>
          
        </div>
        <Poppular/>
        <Offers/>
        <Newc/>
        <Newsletter/>
        </>
    );
}
export default Brandpage;