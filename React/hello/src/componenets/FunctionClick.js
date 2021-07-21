import React from 'react'

function FunctionClick() {

    function clickHandler()
    {
        console.log("Button Clicked");
    }
    return (
        <div>
            <button onClick={clickHandler}>Click //console</button>
        </div>
    )
}

export default FunctionClick
