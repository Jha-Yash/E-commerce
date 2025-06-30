import React,{useState,useEffect} from "react";

function Digitalclock(){
       const[time,setTime]=useState(new Date());
        
       useEffect(()=>{
             const intervalid=setInterval(()=>{
                setTime(new Date());
             },1000) ;

             return ()=>{ //when this component unmounds it will clear the interval
              clearInterval(intervalid);
             }
       });


       function formattime(){ 
       let hours=time.getHours();
       let meridian=hours>=12?"PM":"AM";
       let minutes=time.getMinutes();
       let seconds=time.getSeconds();
       hours=hours%12||12;
       return `${padstart(hours)}:${padstart(minutes)}:${padstart(seconds)}:${meridian}`;
       }

       function padstart(number){
        return (number<10?"0":"")+number;
       }

       return(
        <div className="clock-container">
        <div className="clock"> 
            <span>{formattime()}</span>
        </div>
        </div>
       );
}
export default Digitalclock;