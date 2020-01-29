import React, { useState, useContext } from 'react';
import { GlobalContext } from '../providers/GlobalContext'
import axios from 'axios'
import { MDBBtn } from 'mdbreact';
import { useHistory } from 'react-router-dom';

const SignUp = () => {

    const { endpoint, setToken } = useContext(GlobalContext)

    const [data, updateData] = useState({ pseudo: '', email: '', password: '' })

    let history = useHistory();

    const updateFields = (event) => {
        let obj = { [event.target.name]: event.target.value }
        updateData(Object.assign(data, obj))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${endpoint}/api/users/new`, { data })
            .then(res => {
                if (res.status === 200) {
                    setToken(res.data)
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('pseudo', res.data.pseudo)
                    localStorage.setItem('userId', res.data.id)
                }
            })
            .then(() => {
                history.replace('/home')
            })
            .catch(err => {
                console.log(err.response.data.message)
            })
    }

    return (

        <div className='p-3 z-depth-3'
            style={{
                width: '85%',
                backgroundColor: 'white',
                borderRadius: '8px'
            }}>
            <form>
                <p className="h4 text-center mb-4">Sign up</p>
                <label htmlFor="pseudo" className="grey-text">
                    Your pseudo
                            </label>
                <input
                    type="text"
                    id="pseudo"
                    name="pseudo"
                    className="form-control"
                    onChange={updateFields}
                />
                <br />
                <label htmlFor="email" className="grey-text">
                    Your email
                            </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    onChange={updateFields}

                />
                <br />
                <label
                    htmlFor="password"
                    className="grey-text"
                >
                    Your password
                            </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    onChange={updateFields}

                />
                <div className="text-center mt-4">
                    <MDBBtn color="pink" type="submit" onClick={handleSubmit}>
                        Register
                    </MDBBtn>
                </div>
            </form>
        </div>

    )
}

export default SignUp