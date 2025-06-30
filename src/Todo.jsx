import React,{useState} from "react";

function Todo(){
    const[tasks,setTask]=useState(["Eat Breakfast","Take a Shower","Walk the dog"]);
    const[newTask,setnewTask]=useState("");
    
    function handleinputchng(event){
      setnewTask(event.target.value);
    }
    function addtask(){
       
        if(newTask.trim()!=""){ //pehle task na add krne pai bhi add button click pai space create hori thii ab ni hogi
          
        setTask([...tasks,newTask]);
        setnewTask("");
        }
    }
    function removetask(index){
         setTask(tasks.filter((Element,i)=>i!=index));
    }
    function movetaskup(index){
      if(index>0){ 
       const updatetask=[...tasks];
       [updatetask[index],updatetask[index-1]]= [updatetask[index-1],updatetask[index]];//index swap
       setTask(updatetask);
      }
    }
    function movetaskdown(index){
      if(index<tasks.length-1){
      const updatetask=[...tasks];
      [updatetask[index],updatetask[index+1]]= [updatetask[index+1],updatetask[index]];
      setTask(updatetask);
      }
    }

     return(<div className="to-do">
        <h2>To-Do-List</h2>
        <input type="text" value={newTask} onChange={handleinputchng} placeholder="Enter a Task..."></input>
        <button className="add" onClick={addtask}>Add</button>
        <ol>{tasks.map((task,index)=><li key={index} >
           <span className="text">{task}</span> 
            <button className="del" onClick={()=>removetask(index)}>Delete</button>
            <button className="up" onClick={()=>movetaskup(index)}>👆</button>
            <button className="down" onClick={()=>movetaskdown(index)}>👇</button>

        </li>

        )}</ol>
     </div>);
}
export default Todo