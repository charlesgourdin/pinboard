import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../providers/GlobalContext'
import axios from 'axios'

const Image = ({ src, alt, style }) => {

    const { endpoint } = useContext(GlobalContext)

    const [image, setImage] = useState(null)

    useEffect(() => {

        axios.get(`${endpoint}/api/images/${src}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
            .then(r => {
                setImage(r.data)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (image)
        return <img src={image} alt={alt} style={style} />
    return null
}

export default Image;