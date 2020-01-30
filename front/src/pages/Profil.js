import React, { useContext } from 'react';
import { GlobalContext } from '../providers/GlobalContext'
import NavbarUp from '../components/NavbarUp';
import NavbarDown from '../components/NavbarDown';
import profil from '../assets/profil.jpg'



const Profil = () => {

    const { pseudo } = useContext(GlobalContext)

    return (
        <div className='w-100 h-100 d-flex flex-column justify-content-between'>
            <NavbarUp />
            <div
                className='h-100 d-flex flex-column align-items-center'
                style={{
                }}
            >
                <div className='d-flex align-items-center m-4 pl-4 w-100'>
                    <div
                        className='d-flex justify-content-center'
                        style={{
                            overflow: 'hidden',
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%'
                        }}>
                        <img src={profil} alt='profil'
                            style={{
                                maxHeight: '100%'
                            }}
                        />
                    </div>
                    <h2 className='m-0 ml-3'>{pseudo}</h2>
                </div>
                <div className='d-flex align-items-center justify-content-around w-100'>
                    <button className='profil-button'>Pinboards</button>
                    <button className='profil-button'>abonnés</button>
                    <button className='profil-button'>abonnements</button>
                </div>

                <div
                    className='h-100 mt-4 z-depth-2'
                    style={{
                        width: '90%',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px'
                    }}
                >

                </div>
            </div>
            <NavbarDown />
        </div>
    )
}

export default Profil