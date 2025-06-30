import React from "react";
import "./Relatedproducts.css"
import data_product from "../../assets/data";
import Item from '../Item/Item'
function Relatedproducts(){
    return(
        <div className="poppular">
            <h1>Similar Products</h1>
            <div className="poppitem">
                {data_product.map((item,i)=>{
                  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    );
}
export default Relatedproducts