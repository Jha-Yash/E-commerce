import React,{useState} from 'react';
function ColorPicker(){
    const[color,setColor]=useState("#ffffff");
    const colorfn=(event)=>{
           setColor(event.target.value);
    }
return(
    <>
    <h3>Color Picker</h3>
    <div className="box" style={{backgroundColor:color}}>
        <p>Selected Color:{color}</p>
       
    </div>
    <h3>Select a color:</h3>
    <input type="color" value={color} onChange={colorfn}></input>
    </>
);
}
export default ColorPicker