import React from 'react'
import { MDBIcon } from 'mdbreact'
import { Link } from 'react-router-dom'


const NavbarDown = () => {

    return (
        <div
            className='d-flex justify-content-around align-items-center'
            style={{
                backgroundColor: '#2e1fb1',
                height: '55px',
                width: '100%'
            }}
        >
            <MDBIcon icon="thumbtack" size='lg' className='white-text ml-3' />
            <Link to='search'>
                <MDBIcon icon="search" size='lg' className='white-text mr-3' />
            </Link>
        </div>
    )
}

export default NavbarDown