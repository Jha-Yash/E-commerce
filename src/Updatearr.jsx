import React,{useState} from "react";
function Updatearr(){
    const[foods,setFood]=useState(["apple","mango","banana"]);
    function addFood(){
        const newfood= document.getElementById("keyfood").value;
        document.getElementById("keyfood").value="";//ye kiya taaki jb button click krey toh input add hoke fir khaali ho haaye
          setFood([ ...foods,newfood]);
    }
    function removefood(index){
        setFood(foods.filter((element,i)=>i!=index))//element usused hai isko _ sai replace bhi kr skte iska mtlb ignored parameter

    }

    return(<div>
        <h2>List of Food</h2>
        <ul>{foods.map((food,index)=><li key={index} onClick={()=>removefood(index)}>
                 {food}
        </li>)}</ul>
        <input type="text" id="keyfood"></input>
        <button onClick={addFood}>Add Food</button>
    </div>);

}
export default Updatearr