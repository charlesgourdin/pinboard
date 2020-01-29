import React, {useContext} from 'react';
import {GlobalContext} from '../providers/GlobalContext'

const Profil = () => {

    const {pseudo} = useContext(GlobalContext)

    return(
        <div>
            <p style={{color: 'white'}}>{pseudo}</p>
        </div>
    )
}

export default Profil