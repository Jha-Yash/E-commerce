import React from "react";
import './Offers.css'
import exclusive_image from "../../assets/exclusive_image.png"
function Offers(){
    return(
        <div className="offers">
            <div className="content">
                <h1>Exclusive</h1>
                <h3>Offers for You</h3>
                <p>Only on best seller Products</p>
                <button>check now</button>
            </div>
            <div className="image">
                <img src={exclusive_image}></img>
            </div>
        </div>
    );
}
export default Offers;