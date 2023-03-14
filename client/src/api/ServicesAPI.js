import {useState, useEffect} from 'react'
import axios from 'axios'

function CatigoryAPI() {
    const [services, setServices] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getServices = async () =>{
            const res = await axios.get('/api/services')
            setServices(res.data)
        }
        
        getServices()
    },[callback])
    return {
        services: [services, setServices],
        callback: [callback, setCallback]
    }
}

export default CatigoryAPI