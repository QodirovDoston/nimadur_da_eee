import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import {useHistory, useParams} from 'react-router-dom'

const initalState = {
    _id: ''
}

function CreateProduct() {
    const state = useContext(GlobalState)
    const [post, setPost] = useState(initalState)
    const [media, setMedia] = useState(false)
    const [type1, setType1] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loading1, setLoading1] = useState(false)

    const [token] = state.token
    const [isAdmin] = state.userAPI.isAdmin
    const [isBoss] = state.userAPI.isBoss

    const history = useHistory()
    const param = useParams()

    const [posts] = state.postAPI.post
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.postAPI.callback

    useEffect(() =>{
        if(param.id){        
            setOnEdit(true)
            posts.forEach(product =>{
                if(product._id === param.id) {
                    setPost(product)
                    setMedia(product.media)
                }
            })
        }else{
                    setOnEdit(false)
                    setPost(initalState)
                    setMedia(false)
                }
    }, [param.id, posts])

    const handleDestroy = async () =>{
        try {
            if(!(isAdmin || isBoss)) return alert("You're not an Admin")
            setLoading(true)
            await axios.post('/api/destroy', {public_id: media.public_id},{
                headers: {Authorization: token}
            })

            setLoading(false)
            setMedia(false)
            setType1(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleUpload = async e =>{
        e.preventDefault()
        try {
            if(!(isAdmin || isBoss)) return alert("You're not an Admin")
            const file = e.target.files[0]

            if(!file) return alert("File not exists")

            if(file.size > 3* 1024 * 1024)
                return alert("Size too large! ")
            
            if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg')
                return alert("File format incorrent")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })
            setLoading(false)
            setMedia(res.data);

        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    
    const type1Upload = async e =>{
        e.preventDefault()
        try {
            if(!(isAdmin || isBoss)) return alert("You're not an Admin")
            const file = e.target.files[0]

            let formData = new FormData()
            formData.append('file', file)

            setLoading1(true)
            const res = await axios.post('/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })
            setLoading(false)
            setType1(res.data);

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const style = {
        display: media ? "block" : "none"
    }

    const style1 = {
        display: type1 ? "block" : "none"
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(onEdit){
                await axios.put(`/api/clients_create/${post._id}`, {media: media, type1: type1}, {
                    headers: {Authorization: token}
                })
            }else{
                await axios.post('/api/clients_create', {media: media, type1: type1}, {
                    headers: {Authorization: token}
                })
            }
            setCallback(!callback)
            history.push("/")
        } catch (err) {
            alert(err)
        }
    }


    return (
        <div className="create_team">
            <div className="upload_img">
                <input type="file" name="file" id="files_ups" onChange={handleUpload} />
                {
                    loading ? <div id=" "><Loading /></div>

                    : <div id="file_img" style={style}>
                        <img src={media ? media.url : ''}  alt=""/>
                        <span onClick={handleDestroy}>X</span>
                      </div>
                }
                
            </div>
            <div className="upload_img">
                <input type="file" name="file" id="files_ups" onChange={type1Upload} />
                {
                    loading1 ? <div id="file_img"><Loading /></div>

                    : <div id="file_img" style={style1}>
                        <img src={type1 ? type1.url : ''}  alt=""/>
                        <span onClick={handleDestroy}>X</span>
                    </div>
                }
            </div>

            <div className="team_container positions_box">
                <form onSubmit={handleSubmit}>

                    <button type="submit">{onEdit ? "Update" : "Create"}</button>                    
                </form>
            </div>
        </div>
    )
}

export default CreateProduct
