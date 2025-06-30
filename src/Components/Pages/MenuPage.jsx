import React from "react";
import Navbar from "/src/Navbar.jsx";
import men_banner from "../../assets/banner_mens.png";
import all_product from "../../assets/all_product"
import Item from "../Item/Item";
import './Css/Productrate.css'
 import dropdown_icon from '../.././assets/dropdown_icon.png'
function MenuPage() {
  return(
    <>
   <div className="ban">
       <img className="banner" src={men_banner}></img>
       </div>
         <div className="point">
       <p><span>Showing 1-12</span> out of 36 Products</p>
       
        <div className="drop">
               Sort by <img src={dropdown_icon}></img>
              </div>
              </div>
  <div className="productcate">
         {all_product.map( (item,i)=>{
           if(item.category=="men"){
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

export default MenuPage;