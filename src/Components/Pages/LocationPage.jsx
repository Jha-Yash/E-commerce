import React from "react";
import Navbar from "/src/Navbar.jsx";
import women_banner from "../../assets/banner_women.png";
import all_product from "../../assets/all_product"
import Item from "../Item/Item";
import './Css/Productrate.css'
 import dropdown_icon from '../.././assets/dropdown_icon.png'
function LocationPage() {
  return(
    <>
    <div className="ban">
    <img className="banner" src={women_banner}></img>
    </div>
    <div className="point">
       <p><span>Showing 1-12</span> out of 36 Products</p>
       
     <div className="drop">
            Sort by <img src={dropdown_icon}></img>
           </div>
           </div>
  <div className="productcate">
         {all_product.map( (item,i)=>{
           if(item.category=="women"){
             return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
           }else{
             return null;
           }
         })}
       </div>
        <div className="loadmore">Explore More</div>
  </>
  );
}

export default LocationPage;