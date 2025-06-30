//condn rendering
import PropTypes from 'prop-types'
 function UserGreeting(props){
    return(props.isLogged? 
        <p>Welcome {props.username}</p>:<p>Please Log in First</p>
    );

 }
 UserGreeting.propTypes={
    isLogged:PropTypes.bool,
    username:PropTypes.string,
 }
 UserGreeting.defaultProps ={
   isLogged:false,
   username:"Guest",
 }
 export default UserGreeting