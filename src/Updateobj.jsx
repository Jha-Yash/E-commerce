import React ,{ useState } from "react";

function Updateobj(){
    const[car,setCar]=useState({year:2025,model:"mustang",make:"ford"});

    function updateyear(event){
        setCar(c=>({...c,year:event.target.value}));//agr ...car ni krrhey tou initial jitni prop hai object ki usko year sai replace 
        //kr de rhey hai pr hume update year kai saath baaki 2 prop bhi chahiye isliye ...car use that means saare objects
        //setCar({year:2025,model:"mustang",make:"ford",year:event.target.value}) ye hai extended version ,tou in js if do prop
        //same name sai hoti tou jo latest hoti vo show hoti thats why year kai case mai model make same rhengai but year updated
        //show hoga ,(arrow fn use kiya for better practice)
    }
    function updatemodel(event){
        setCar(c=>({...c,model:event.target.value}));
    }
    function updatemake(event){
        setCar(c=>({...c,make:event.target.value}));
    }
    

    return(
        <>
        <p> your favt car is:{car.year} {car.model} {car.make}</p>
        <input type="number" value={car.year} onChange={updateyear}></input>
        <input type="text" value={car.model} onChange={updatemodel}></input>
        <input type="text" value={car.make} onChange={updatemake}></input>
        </>
    );

}
export default Updateobj