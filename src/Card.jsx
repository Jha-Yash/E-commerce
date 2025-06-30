import pic from './assets/$RYE21G2.jpg'
import pic2 from './assets/$RA7DOV4.jpg'
function Card(){
    return(
        <>
        <div className="card">
            <img className ="card-pfp" src={pic} alt="profile pic"></img>
            <h2 className="title" >Yash jha</h2>
            <p className="content">I do React and I love Coding</p>
        </div>
        <div className="card">
        <img className ="card-pfp" src={pic2} alt="profile pic"></img>
        <h2 className="title" >Yash jha</h2>
        <p className="content">I do React and I love Coding</p>
    </div>
    </>
    );
}
export default Card