import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)

    const IncrimentFive =() => {
        for(let i=0 ; i< 5 ; i++){
        setCount( count+ 1)
        console.log(count)
        // setCount(prevCount => prevCount+ 1)
        }
    }

    return (
        <div>
            Count:{count}
            <button onClick = {() => setCount(initialCount)}>Reset</button>
            <button onClick = {() => setCount(prevCount => prevCount+ 1)}>Increment</button>
            <button onClick = {() => setCount(prevCount => prevCount- 1)}>Decrement</button>
            <button onClick = {IncrimentFive}>Increment Five</button>
        </div>
    )
}

export default HookCounterTwo