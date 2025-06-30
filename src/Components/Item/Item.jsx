import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"
function Item (props){
   return(
    <div className="item">
       <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} />
         {/* ye window.scroll use taaki koi particular item click krey toh vo sbse uppr show hou zoomed view mai ,ex:-isko undo krke
         similar products pai  click krke dekho */}
      </Link>
       
        <p>{props.name}</p>
        <div className="itemprices">
            <div className="ipnew">
               ${props.new_price}
            </div>
            <div className="ipold">
               ${props.old_price}
            </div>

        </div>
    </div>
   );


}
export default Item;