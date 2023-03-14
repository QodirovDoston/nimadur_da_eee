import {useState, useEffect} from 'react'
import axios from 'axios'

function CatigoryAPI() {
    const [blogs, setBlogs] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getCatigories = async () =>{
            const res = await axios.get('/api/blogs_create')
            setBlogs(res.data)
        }
        
        getCatigories()
    },[callback])
    return {
        blogs: [blogs, setBlogs],
        callback: [callback, setCallback]
    }
}

export default CatigoryAPI
