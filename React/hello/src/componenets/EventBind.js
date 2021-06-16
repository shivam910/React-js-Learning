import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message : "Before Clicking"
        }
        this.clickHandler = this.clickHandler.bind(this)
        // Approach 3 binding this in constructor
    }
    
    clickHandler()
    {
        this.setState({         // this keyword within a eventhandler is undefined therefore we have to bind this
            message: "After Clicking Bye"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}> Clickkk</button> */}
                {/* approach 1 using binding function in the render method */}

                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* approach 2 using arrow function */}

                <button onClick= {this.clickHandler}>Clickk</button>
            </div>
        )
    }
}

export default EventBind
