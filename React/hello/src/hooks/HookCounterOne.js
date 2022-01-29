// import React, {useState , useEffect} from 'react'

// function HookCounterOne() {

//     const [count, setCount] = useState(0)
//     const [name, setName] = useState("")
//     useEffect(() => {
//         console.log("useeffect updating document title")
//         document.title =`You Clicked ${count} times`
//     },[count])  //In order to conditionally run an effect specify the 2nd parameter to useEffect

//     return (
//         <div >
//             <input type="text" value= {name} onChange = { e => setName(e.target.value)} />
//             <button className="btn" onClick = {() => setCount(count + 1)}>Click {count} times</button>
//         </div>
//     )
// }

// export default HookCounterOne

import React,{useState, useEffect} from 'react';

function HookCounterOne() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("abc");
    document.title = `clicked ${count} times `;
  },[count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;