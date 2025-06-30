import PropTypes from 'prop-types'
function Student(props){//PROPS
     return(
      
      <div>
        <p>Name: {props.name}</p>
        <p>AGE: {props.age}</p>
        <p>isStudent: {props.isStudent?"Yes":"No"}</p>
        </div>
        
     );
}
//PROPTYPES
 Student.propTypes={ //we did this to check ki proptype correct hai ya nhi ,- ht jaata hai react mai jb usko fn mai use krte tb
     name:PropTypes.string,
     age:PropTypes.number,
     isStudent:PropTypes.bool,
}
//DEFAULT PROPS :- IN CASE VALUE PASS NI KRI TOH
Student.defaultProps={
     name:"Guest",
     age:0,
     isStudent:false,
}
export default Student