import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: "PArent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    // In the parent component define the method 
    greetParent(childName) {
        // alert("Hello" + this.state.parentName) we can write it in this way but as we are using es6 we will write it as
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                    <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
