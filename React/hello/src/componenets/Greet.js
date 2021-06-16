import React from "react"

// function Greet()        //funstional component
//     {
//         return <h1>Hello Shivam</h1>;
//     }

// export const Greet = () => <h1>Hello Shivam</h1>
const Greet = (props) =>{
    console.log(props);
    return (
    <div>
    <h1>Hello {props.name} {props.depart}</h1>
    {props.children}
    </div>
    )
}

    export default Greet;