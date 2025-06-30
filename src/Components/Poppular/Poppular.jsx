import React from "react";
import './Poppular.css'
import data_product from "../../assets/data";
import Item from '../Item/Item'
function Poppular(){
    return(
        <div className="poppular">
            <h1>POPPULAR IN WOMEN</h1>
            <div className="poppitem">
                {data_product.map((item,i)=>{
                  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    );
}
export default Poppular
// Use <Item /> when passing only props (like in your case).

// Use <Item></Item> only if Item is meant to wrap content. mtlb <h3>item.name</h3>