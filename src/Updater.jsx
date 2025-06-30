//updater fn = a fn passed as an argument to setState() usually 
               //ex: setYear(arrow fn)
              //good practice to use updater fn

import React,{useState} from "react";               
function Updater(){
   const[count,setCount]=useState(0);
   function increment(){
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);//tou ab increment mai hum expect krrhey hai ki icrement button dbaane pai sidha +3 hou but hou +1 he 
 //rha bcz hr baar vo inital value mai he + le rha ,humne abtk count update nhi kiya hai toh vo 0 he hai usi mai 3 baar 0+1 krdiya

 //thats why arrow fn use krengai taaki saath saath he update ho jaaye
 setCount(c=>c+1);
 setCount(c=>c+1);
 setCount(c=>c+1);//arrown fn mai aargument ka 1st letter use krte hai
 //if sirf ek baar increment krna toh bhi arrow fn he use krow (good practice)
   }
    return(
        <>
        <p>{count}</p>
    <button onClick={increment}>increment</button>
    </>
    );
    
}
export default Updater