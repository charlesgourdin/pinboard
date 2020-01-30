import React, { useState } from 'react';
// import { GlobalContext } from '../providers/GlobalContext'
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

const Accueil = () => {

    const [logType, SetLogType] = useState(false)

    return (
        <div
            className='h-100 d-flex flex-column align-items-center justify-content-between'
            style={{
                backgroundColor: '#2e1fb1'
            }}>
            <h1 className='mt-5'>P I N B O A R D</h1>
            <div className='w-100 mb-5 d-flex flex-column align-items-center justify-content-end'>
                {
                    !logType ?
                        <>
                            <SignUp />
                            <p
                                className='accueil mt-2'
                                style={{ cursor: 'pointer' }}
                                onClick={() => SetLogType(true)}>I already have an account</p>
                        </>
                        :
                        <>
                            <SignIn />
                            <p
                                className='accueil mt-2'
                                style={{ cursor: 'pointer' }}
                                onClick={() => SetLogType(false)}>I don't have an account</p>
                        </>
                }
            </div>
        </div>
    )
}

export default Accueil