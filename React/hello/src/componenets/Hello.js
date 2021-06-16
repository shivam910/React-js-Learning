import React from "react"


// React using with and without JSX

const hello = () => {
    // return(
    //     <div>
    //         <h1>HellShivam</h1>
    //     </div>
    // )

    return React.createElement(`div`,{id : "hello", className : "dummy-class"},React.createElement('h1',null,'Hi Shivam'))
}

export default hello