//click events
function Button(){
    const styles={
        backgroundColor:"blue",//- nhi aayega bg c kai beech and sb terms in ""
        color:"white",//and ; ki jgah , use hoga
        padding:"10px 20px",
        borderRadius:"5px",
        border:"none",
        cursor:"pointer",
    }
    const handleclick=(e,name)=>e.target.textContent=`stop ${name}`;//e mtlb button ki prop ,ek baar sirf e leke console.log(e) kro
    //toh button ki prop show hogi toh usi mai target mai textcontent hota
    const click=(e)=>e.target.textContent="press again";
    return(
        <>
    <button style={styles} onClick={(e)=>click(e)}
    onDoubleClick={(e,name)=>handleclick(e,"yash")}>click me</button>
  
    </>
    );
}
export default Button