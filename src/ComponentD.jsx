import React,{useContext} from 'react';
import { userContext } from './ComponentA.jsx';
function ComponentD(){
    const name=useContext(userContext);
    return(
    <div className="box">
        <h1>ComponentD</h1>
        <h2>{`final goodbye ${name}`}</h2>

    </div>);
}
export default ComponentD