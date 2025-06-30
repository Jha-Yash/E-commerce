//useContext()=react hook that allows you to share values bw multiple levels of components without passing props through each level
// PROP DRILLING = PASSING COMPONENTS DOWN TO THE CENTRE ,WITH THE help of props using in every component
//instead of this we use useContext() ,in this its easy to pass component directly to centre or anywhere we want


//Provider Component
//1. import {createContext} from `react`;
//2. export const MyContext =createContext();
//3. <MyContext.Provider value={value}>
//     <child/>
//   <MyContext.Provider>

//Consumer Components
//1. import React,{useContext} from "react";
//   import {MyContext} from './ComponentA';
//2. const value =useContext (MyContext);
import React,{useState,createContext} from "react";
import ComponentB  from "./ComponentB.jsx";
export const userContext =createContext();

function ComponentA(){
    const[user,setuser]=useState("Yash");
    return(
    <div className="box">
        <h1>ComponentA</h1>
        <h2>{ `hello ${user}`}</h2>
        <userContext.Provider value={user}>

        <ComponentB></ComponentB>
        </userContext.Provider>
    </div>);
}
export default ComponentA