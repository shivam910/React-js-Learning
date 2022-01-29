import React ,{useState, useEffect} from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1)
        // setCount(prevCount => prevCount + 1)
        // or we can use setCount(prevCount => prevCount +1) and  remove [count] by []
    }

    // whenever you want to call a function from use effect define that function inside useeffect and pass the dependencies into array function

    useEffect(() => {
        // function doSomething() {
        //     console.log(someProp)
        // }
        // doSomething() 
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    },[count])  //[someProp]

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
