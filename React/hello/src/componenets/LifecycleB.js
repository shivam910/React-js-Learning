import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "Shivam"
        }
        console.log("LifecycleB constructor");
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("LifecycleB getDerivedStateFromProps");
        return null
    }

    componentDidMount(){
        console.log("LifecycleB componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleB getSnapshotBeforeUpdate")
    }

    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate")
    }
    
    render() {
        console.log("LifecycleB rendered")
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
