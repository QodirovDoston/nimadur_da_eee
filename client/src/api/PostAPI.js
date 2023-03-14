import {useState, useEffect} from 'react'
import axios from 'axios'

function PostAPI() {
    const [post, setPost] = useState([])
    const [callback, setCallback] = useState(false)
    const [result, setResult] = useState(0)
    const [colors, setColors] = useState(false)
    const [language, setLanguage] = useState(false)

    const getPost = async () =>{
       const res = await axios.get(`/api/post`);
       setPost(res.data.posts)
    }

    useEffect(()=>{
        getPost()
    }, [callback])
    return {
            post: [post, setPost],
            callback: [callback, setCallback],
            result: [result, setResult],
            colors: [colors, setColors],
            language: [language, setLanguage]
    }
      
}

export default PostAPI
