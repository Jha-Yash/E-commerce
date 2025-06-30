//useEffect(): react hook that tells react to do this code when (pick one):
//        this component renders 
//         this component mounts

import React,{ useState,useEffect } from "react";


function Useeffect(){
     const[count,setcount]=useState(0);
   
     function addcount(){
        setcount(c=>c+1);
     }
     useEffect( ()=>{
      document.title=`count: ${count}`;// isme title ka count bhi chng hoga jitni baar add(render) krengai utni baar 
     });//if title same rkhna hai toh useeffect(()=>{},[])

     return(<>
        <p>COUNT:{count}</p>
        <button onClick={addcount}>ADD</button>
        </>
     )
}
export default Useeffect