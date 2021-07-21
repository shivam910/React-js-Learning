import React, { Component } from 'react'
import { UserConsumer } from './userContext'

 class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    username => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
