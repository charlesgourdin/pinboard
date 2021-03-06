import React, { Component } from 'react'
import { defaultProfil } from '../assets/defaultProfil.jpg'
import axios from 'axios';
export const GlobalContext = React.createContext()

class GlobalProvider extends Component {
    constructor(props) {
        super(props)
        this.token = localStorage.getItem("token") || null;
        this.state = {
            // endpoint: "http://192.168.0.21:4000",
            endpoint: "http://192.168.146.52:4000",
            pseudo: localStorage.getItem("pseudo") || '',
            userId: localStorage.getItem('userId') || null,
            searchResult: [],
            userProfilImg: defaultProfil,
            setToken: this.setToken,
            searchUser: this.searchUser
        }
    }

    changerUserProfilImg = (image) => {
        this.setState({ userProfilImg: image })
    }

    setToken = (data) => {
        this.setState({ pseudo: data.pseudo, userId: data.id })
        this.token = data.token
    }

    searchUser = (search) => {
        axios.get(`${this.state.endpoint}/api/search/${search}`)
            .then(res => {
                console.log(res.data)
                const searchResult = res.data;
                this.setState({ searchResult });
            })
    }

    componentDidMount = () => {
        
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