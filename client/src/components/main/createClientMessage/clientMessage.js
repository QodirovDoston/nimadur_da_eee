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
    const [type1, setType1] = useState(false)
    const [loading, setLoading] = useState(false)

    const [token] = state.token
    const [isAdmin] = state.userAPI.isAdmin
    const [isBoss] = state.userAPI.isBoss

    const history = useHistory()
    const param = useParams()

    const [posts] = state.clientsMessageAPI.posts
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.clientsMessageAPI.callback

    useEffect(() =>{
        if(param.id){        
            setOnEdit(true)
            posts.forEach(product =>{
                if(product._id === param.id) {
                    setPost(product)
                    setType1(product.type1)
                }
            })
        }else{
                    setOnEdit(false)
                    setPost(initalState)
                    setType1(false)
                }
    }, [param.id, posts])

    const handleDestroy = async () =>{
        try {
            if(!(isAdmin || isBoss)) return alert("You're not an Admin")
            setLoading(true)
            await axios.post('/api/destroy', {public_id: type1.public_id},{
                headers: {Authorization: token}
            })

            setLoading(false)
            setType1(false)
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

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })
            setLoading(false)
            setType1(res.data);

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const style1 = {
        display: type1 ? "block" : "none"
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(onEdit){
                await axios.put(`/api/clients_message/${post._id}`, {type1: type1}, {
                    headers: {Authorization: token}
                })
            }else{
                await axios.post('/api/clients_message', {type1: type1}, {
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
                <input type="file" name="file" id="files_ups" onChange={type1Upload} />
                {
                    loading ? <div id="file_img"><Loading /></div>

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
