import React,{useState,useEffect,useRef} from "react";
function Stopwatch(){
      const[isrunning,setisrunnig]=useState(false);
      const[elapsedtime,setelapsedtime]=useState(0);
      const intervalidref=useRef(null);
      const Starttimeref=useRef(0);

      useEffect(()=>{
            if(isrunning){
                 intervalidref.current= setInterval(()=>{
                        setelapsedtime(Date.now()-Starttimeref.current);
                  },10);
            }
            return()=>{
                  clearInterval(intervalidref.current);
            }

      },[isrunning]);

      function start(){
            setisrunnig(true);
            Starttimeref.current=Date.now()-elapsedtime;//date.now computer ki abtk ki calulated time milisecond mai bta deta hai
            
      }
      function stop(){
            setisrunnig(false);
            
      }
      function reset(){
            setelapsedtime(0);
            setisrunnig(false);

      }
      function formattime(){
            let hours=Math.floor(elapsedtime/(1000*60*60));
            let minutes=Math.floor(elapsedtime/(1000*60)%60);
            let seconds=Math.floor(elapsedtime/(1000)%60);
            let milisecond=Math.floor((elapsedtime%1000)/10);
          return `${padstart(minutes)}:${padstart(seconds)}:${padstart(milisecond)}`;
      }
      function padstart(number){
           return (number<10?"0":"")+number;
           //if direct padstart krna react mai to hours=String(hours).padStart(2,"0");
      }

     return(
     <div className="cont">
           <div className="watch">{formattime()}</div>
           <button onClick={start} className="sbut" >Start</button>
           <button onClick={stop} className="pbut">Stop</button>
           <button onClick={reset} className="rbut">Reset</button>
     </div>);
}
export default Stopwatch