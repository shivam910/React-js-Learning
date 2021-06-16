import React from "react"

const Destructuring = props =>{
    const {name,depart} = props
    return(
        <div>
            <h1>{name} aka {depart}</h1>
        </div>
    )
}

export default Destructuring;