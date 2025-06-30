import React, { useState } from "react";
import Nike from '/src/assets/nike_PNG12.png'
import logo_big from "../src/assets/logo_big.png"
import { Link} from "react-router-dom";
import Cart from '/src/assets/cart.jpg'
function Navbar(){
    const [menu,setmenu] = useState("Home");
    return (
        <>
          <nav className="navb">
                        <img className="pic" src={logo_big}></img>
                        <p>SHOPPER</p>
                        <ul className="bar">
                        <li onClick={()=>setmenu("Home")}><Link style={{textDecoration:'none'}} to="/">Home</Link> {menu==="Home"?<hr/>:<></>}</li>
                        <li onClick={()=>setmenu("Men")}><Link style={{textDecoration:'none'}} to="/men">Men</Link>{menu==="Men"?<hr/>:<></>}</li>
                    <li onClick={()=>setmenu("women")}><Link style={{textDecoration:'none'}} to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
                    <li onClick={()=>setmenu("kid")}><Link style={{textDecoration:'none'}} to="/kid">Kids</Link>{menu==="kid"?<hr/>:<></>}</li>
                    {/* <li onClick={()=>setmenu("Contact")}><Link style={{textDecoration:'none'}} to="/contact">Contact</Link>{menu==="Contact"?<hr/>:<></>}</li> */}
                        </ul>
                       <Link to="/login"> <button className="but">Login</button></Link>
                  <Link to="/cart">  <img className="cart" src={Cart}></img></Link>
        
                    </nav></>
    );
}
export default Navbar;