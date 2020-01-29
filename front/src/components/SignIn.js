import React, { useState, useContext } from 'react';
import { GlobalContext } from '../providers/GlobalContext'
import axios from 'axios'
import { MDBBtn } from 'mdbreact';
import { useHistory } from 'react-router-dom';

const SignIn = () => {

    const { endpoint, setToken } = useContext(GlobalContext)

    const [data, updateData] = useState({ email: '', password: '' })

    let history = useHistory();

    const updateFields = (event) => {
        let obj = { [event.target.name]: event.target.value }
        updateData(Object.assign(data, obj))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${endpoint}/api/users/auth`, { data })
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
                <p className="h4 text-center py-4">Sign in</p>
                <label
                    htmlFor="email"
                    className="grey-text font-weight-light"
                >
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

export default SignIn