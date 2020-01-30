import React, { useContext, useState } from 'react';
import { GlobalContext } from '../providers/GlobalContext'
import NavbarUp from '../components/NavbarUp';
import NavbarDown from '../components/NavbarDown';
import profil from '../assets/profil.jpg'
import { post } from 'axios';



const Profil = () => {

    const { pseudo, endpoint, userId } = useContext(GlobalContext)
    const [modal, displayModal] = useState(false)
    const [data, loadData] = useState('null')

    const setData = (event) => {
        loadData(event.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fileUpload(data).then((response) => {
            console.log(response.data);
        })
        displayModal(false);
        loadData('null');
    }

    const fileUpload = (file) => {
        const url = `${endpoint}/api/users/upload`;
        const formData = new FormData();
        formData.append('file', file)
        formData.append('userId', userId)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }
        return post(url, formData, config)
    }

    return (
        <div className='w-100 h-100 d-flex flex-column justify-content-between' style={{ position: 'relative' }}>
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
                        }}
                        onClick={() => displayModal(true)}>
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
            {modal &&
                <div
                    className='z-depth-3 align-self-center d-flex flex-column'
                    style={{
                        position: 'absolute',
                        top: 'calc(100vh/2)',
                        width: '300px',
                        height: '120px',
                        margin: 'auto',
                        backgroundColor: '#4d4d4d',
                        borderRadius: '12px'
                    }}>
                    <form>
                        {data === 'null' ?
                            <>
                                <label htmlFor='profil' className='modal-button'>
                                    Modifier la photo de profil
                                </label>
                                <input id='profil' name='profil' type='file' onChange={setData} />
                            </>
                            :
                            <>
                                <button className='modal-button' type='submit' onClick={handleSubmit}>Valider</button>
                            </>
                        }
                    </form>
                    <hr className='w-100 m-0' />
                    <button className='modal-button' onClick={() => { displayModal(false); loadData('null') }}>Annuler</button>
                </div>
            }
        </div>
    )
}

export default Profil