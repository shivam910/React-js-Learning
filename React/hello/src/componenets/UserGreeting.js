import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true
        }
    }

// if else statement doesnot works inside the JSX because JSX is just a syntactic sugar for function calls and object constructions adding ifelse staement inside jsx is not valid

    render() {

        // approach 4: short circuit operator
        return this.state.isLoggedin && <div>Welcome you logged in</div>

        // approach 3 : Ternary conditional operator
        // return(
        //     this.state.isLoggedin ?
        //     <div>Welcome you logged in</div>:
        //     <div>Welcome, you aint logged in</div>
        // )

        // approach 2 Element Variable 
        // let message
        // if(this.state.isLoggedin){
        //     message = <div>IsLoggedin rendering</div>
        // }
        // else
        // {
        //     message = <div>Is logged in not rendering / Guest</div>
        // }

        // return <div>{message}</div>

        // approach 1 using if else
        // if (this.state.isLoggedin) {
        //     return (
        //         <div>Welcome Conditional Rendering , isLoggedin is getting displayed</div>
        //     )
        // }
        // else
        //     return (
        //         <div>Welcome Guest, isLoggedin isnt rendering</div>
        //     )

        // return (
        //     <div>
        //         <div>Welcome Conditional Rendering , isLoggedin is getting displayed</div>
        //         <div>Welcome Guest, isLoggedin isn't rendering</div>
        //     </div>
        // )
    }
}

export default UserGreeting