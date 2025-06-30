import React from "react";
import "./Newc.css"
import new_collections from "../../assets/new_collections"
import Item from "../Item/Item";
function Newc(){
    return(
       <div className="cont">
        <h1>New Collections</h1>
        <div className="newc">
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            })}
        </div>
       </div>
    );
}
export default Newc;