import React, { Component } from 'react'
import axios from 'axios';
export const GlobalContext = React.createContext()

class GlobalProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <GlobalContext.Provider value={this.state}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

export default GlobalProvider