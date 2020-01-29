import React from 'react';
import { MDBBtn } from 'mdbreact';

const SignUp = () => {

    return (

        <div className='p-3'
            style={{
                width: '85%',
                backgroundColor: 'white',
                borderRadius: '8px'
            }}>
            <form>
                <p className="h4 text-center mb-4">Sign up</p>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                    Your name
                            </label>
                <input
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                    Your email
                            </label>
                <input
                    type="email"
                    id="defaultFormRegisterEmailEx"
                    className="form-control"
                />
                <br />
                <label
                    htmlFor="defaultFormRegisterPasswordEx"
                    className="grey-text"
                >
                    Your password
                            </label>
                <input
                    type="password"
                    id="defaultFormRegisterPasswordEx"
                    className="form-control"
                />
                <div className="text-center mt-4">
                    <MDBBtn color="elegant" type="submit">
                        Register
                    </MDBBtn>
                </div>
            </form>
        </div>

    )
}

export default SignUp