import React, { useContext } from 'react';
import { GlobalContext } from '../providers/GlobalContext'
import NavbarUp from '../components/NavbarUp';
import NavbarDown from '../components/NavbarDown';
import { MDBInput } from 'mdbreact'

const SearchUsers = () => {

    const { searchUser, searchResult } = useContext(GlobalContext)

    return (
        <div className='w-100 h-100 d-flex flex-column justify-content-between'>
            <NavbarUp />
            <div
                className='h-100 d-flex flex-column align-items-center'
                style={{
                }}
            >
                <div
                    className='h-100 mt-3 z-depth-2 d-flex flex-column align-items-center'
                    style={{
                        width: '90%',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px'
                    }}
                >
                    <form style={{ width: '80%' }}>
                        <MDBInput
                            label="Rechercher un utilisateur"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            onChange={(e) => { e.target.value.length > 0 && searchUser(e.target.value) }}
                        />
                    </form>
                    <div>
                        {
                            searchResult.map((user, i) => {
                                return (
                                    <div key={'user' + i}>
                                        <p>{user.pseudo}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
            <NavbarDown />
        </div>
    )
}

export default SearchUsers