import React from 'react';
import { MDBBtn } from 'mdbreact';

const SignIn = () => {

    return (
        <div className='p-3'
            style={{
                width: '85%',
                backgroundColor: 'white',
                borderRadius: '8px'
            }}>
            <form>
                <p className="h4 text-center py-4">Sign in</p>
                <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                >
                    Your email
                            </label>
                <input
                    type="email"
                    id="defaultFormCardEmailEx"
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

export default SignIn