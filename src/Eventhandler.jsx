import React,{useState} from "react";
 function Eventhandler(){
    const [name,setName]=useState("guest");
    const [text,settext]=useState("");
    const [payment,setpayment]=useState("");
    const [shipping,setshipping]=useState("");

    const username=(event)=>{
         setName(event.target.value)
    }
    const textchng=(event)=>{
        settext(event.target.value)
   }
   const paymentexc=(event)=>{
    setpayment(event.target.value)
}
const shipexc=(event)=>{
    setshipping(event.target.value)
}
    return(
        <>
        <input value={name} onChange={username}></input>
        <p>Name: {name}</p>
        <textarea value={text} onChange={textchng} placeholder="enter text"></textarea>
        <p>comment:{text}</p>
        <select value={payment} onChange={paymentexc}>
        <option>select an option</option>
        <option>gpay</option>
        <option>phone pay</option>
        </select><br/>
      <label> 
         <input type="radio" value="pick up" 
         checked={shipping==="pick up"}//isse we can choose bw radio
         onChange={shipexc}></input>
         pick up
      </label><br/>
      <label> 
         <input type="radio" value="delivery" 
           checked={shipping==="delivery"}
         onChange={shipexc}></input>
         delivery
      </label>
      <p>shipping:{shipping}</p>
       
        </>
    );
 }
 export default Eventhandler