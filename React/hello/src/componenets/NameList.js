import React from 'react'
import Person from './Person.js'

//These all are good but it is recomended to make a seperate component for person jsx

function NameList() {

    const names = ["Bruce", "Clark", "Diana"]
    const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 11,
            skill: "React"
        },
        {
            id: 2,
            name: "Clark",
            age: 12,
            skill: "Angular"
        },
        {
            id: 3,
            name: "Diana",
            age: 13,
            skill: "Vue"
        }
    ]

    // const names = ["Bruce", "Clark", "Diana"]
    // approach 1
    // return (    //map method is javascript code that needs to be evaluated & curly braces are the way to do that
    //     <div> 
    //        {
    //            names.map(name => <h2>{name}</h2>)
    //        }
    //     </div>
    // )

    // another way

    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>{nameList}</div>
    )

}

export default NameList
