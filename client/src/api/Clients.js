import {useState, useEffect} from 'react'
import axios from 'axios'

function Clients() {
    const [clients, setClients] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getPost = async () =>{
            const res = await axios.get('/api/clients_create')
            setClients(res.data)
        }
        
        getPost()
    },[callback])
    return {
        clients: [clients, setClients],
        callback: [callback, setCallback]
    }
}

export default Clients