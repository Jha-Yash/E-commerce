import React,{useState} from 'react';
function Ushook(){
    const [name,setName]=useState("guest");
    const [age,setAge]=useState(0);
    const [isEmployed,setisemployed]=useState(false);
    const [count,setCount]=useState(0);
    
    const updatename=()=>{
        setName("yash");
    }
    const updateage=()=>{
        setAge(age+1);
    }
    const updateemploy=()=>{
        setisemployed(true);
    }
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    return(
        <>
        <p>name: {name}</p>
        <button onClick={updatename}>set name</button>
        <p>age: {age}</p>
        <button onClick={updateage}>increment age</button>
        <p>isEmployed: {isEmployed?"yes":"no"}</p>
        <button onClick={updateemploy}>set employment</button>
        <h3>{count}</h3>
        <button onClick={increment}>increment</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrement}>decrement</button>
        </>
    );
}
export default Ushook