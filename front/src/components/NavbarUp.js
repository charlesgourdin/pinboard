import React from 'react'
import {MDBIcon} from 'mdbreact'

const NavbarUp = () => {

    return (
        <div
            className='d-flex justify-content-between align-items-center'
            style={{
                backgroundColor: '#2e1fb1',
                height: '65px',
                width: '100%'
            }}
        >
            <h1
                style={{
                    fontSize: '24px',
                    margin: '0 0 0 12px'
                }}
            >P I N B O A R D</h1>
            <MDBIcon icon="user-circle" size='2x'className='white-text mr-3' />
        </div>
    )
}

export default NavbarUp

//far