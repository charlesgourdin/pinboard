import React, { useContext, useState } from 'react'
import { GlobalContext } from '../providers/GlobalContext'
import axios from 'axios'

const Image = ({ src, alt, style }) => {

    const { endpoint, userProfilImg } = useContext(GlobalContext)

    const [image, setImage] = useState(null)

    axios.get(`${endpoint}/api/images/${src}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
        .then(r => {
            setImage(endpoint + '/images' + r.data.src)
        })
    if (image)
        return <img src={image} alt={alt} style={style} />
    return null
}

export default Image;