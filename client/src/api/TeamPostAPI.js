import {useState, useEffect} from 'react'
import axios from 'axios'

function TeamPostAPI() {
    const [teamPost, setTeamPost] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getPost = async () =>{
            const res = await axios.get('/api/teams')
            setTeamPost(res.data)
        }
        
        getPost()
    },[callback])
    return {
        teamPost: [teamPost, setTeamPost],
        callback: [callback, setCallback]
    }
}

export default TeamPostAPI