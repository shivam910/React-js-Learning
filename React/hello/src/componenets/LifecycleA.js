import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "Shivam"
        }
        console.log("LifecycleA constructor");
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("LifecycleA getDerivedStateFromProps");
        return null
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")
    }
    
    changeState = () => {
        this.setState({
            name: "Code Evaluation"
        })
    }

    render() {
        console.log("LifecycleA rendered")
        return (
            <div>
                <div>LifecycleA</div>
                <button onclick = {this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA