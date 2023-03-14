import {useState, useEffect} from 'react'
import axios from 'axios'

function CatigoryAPI() {
    const [catigories, setCatigories] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getCatigories = async () =>{
            const res = await axios.get('/api/category')
            setCatigories(res.data)
        }
        
        getCatigories()
    },[callback])
    return {
        catigories: [catigories, setCatigories],
        callback: [callback, setCallback]
    }
}

export default CatigoryAPI
