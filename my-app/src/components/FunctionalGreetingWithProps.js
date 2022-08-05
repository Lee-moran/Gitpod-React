import React from "react"

const FunctionalGreetingWithProps = (props) =>{
    console.log(props);
    return <h1> Hello,{props.name}! I see you're {props.age} years old; {props.greetings} </h1>
} 
// Arrow function 

export default FunctionalGreetingWithProps;