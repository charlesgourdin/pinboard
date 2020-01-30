import React  from 'react';
import NavbarUp from '../components/NavbarUp';
import NavbarDown from '../components/NavbarDown';

const NewPinboard = () => {

    return (
        <div className='w-100 h-100 d-flex flex-column justify-content-between'>
            <NavbarUp />
            <div
                className='h-100 d-flex flex-column align-items-center'
                style={{
                }}
            >
                <h3 className='mt-3'>Créer un nouveau Pinboard !</h3>
            </div>
            <NavbarDown />
        </div>
    )
}

export default NewPinboard