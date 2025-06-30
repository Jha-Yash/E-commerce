//useState() = re-renders the component when the state value chnages .

//useRef() = it does not cause re-renders when its value changes.when you want a component to "remember" some info.,but you
//           dont want that info to trigger new renders.

import React,{useState,useEffect,useRef} from "react";

function UseRef(){
    // const[count,setcount]=useState(0);
    
    // const ref=useRef(0);
    //check prop of ref console.log(ref);its an object with one prop current 

    const inputref=useRef(null);
    const inputref2=useRef(null);
    useEffect(()=>{
        console.log("component rendered");
    })//its re-render in usestate we can do this without re-rendering by using useeffect(()=>{},[])orusing useRef instead of useState
    function handle(){
        // setcount(count+1);
        // console.log(count);

        // ref.current=ref.current+1;
        // console.log(ref.current);

        inputref.current.focus();
        inputref.current.style.backgroundColor="yellow";

        // inputre2.current.focus();
        inputref2.current.style.backgroundColor="";
    }
    function handle2(){
       
        // inputref.current.focus();
        inputref.current.style.backgroundColor="";

        inputref2.current.focus();
        inputref2.current.style.backgroundColor="yellow";
    }
    return(<>
    <button onClick={handle} >click me</button>
    <input ref={inputref}></input>
    <button onClick={handle2} >click me</button>
    <input ref={inputref2}></input>
    </>);
}
export default UseRef