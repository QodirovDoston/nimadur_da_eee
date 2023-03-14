import {useState, useEffect} from 'react'
import axios from 'axios'

function CatigoryAPI() {
    const [posts, setPosts] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getCatigories = async () =>{
            const res = await axios.get('/api/clients_message')
            setPosts(res.data)
        }
        
        getCatigories()
    },[callback])
    return {
        posts: [posts, setPosts],
        callback: [callback, setCallback]
    }
}

export default CatigoryAPI
