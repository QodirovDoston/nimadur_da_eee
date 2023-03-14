import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import {useHistory, useParams} from 'react-router-dom'

const initalState = {
    name: '', 
    email: '',
    role: ''
}
function UserPanel() {
    const state = useContext(GlobalState)
    const [user, setUser] = useState(initalState)
    const [allUsers] = state.userAPI.allUsers
    const [callback, setCallback] = state.userAPI.callback
    const [isBoss] = state.userAPI.isBoss

    const [media, setMedia] = useState(false)
    const [loading, setLoading] = useState(false)
    const [onEdit, setOnEdit] = useState(false)

    const history = useHistory()
    const param = useParams()
    const [token] = state.token
    
    const styles = {
        display: isBoss ? "block" : "none"
    }

    useEffect(() =>{
        if(param.id){
            allUsers.forEach(user =>{
                if(user._id === param.id){
                    setUser(user)
                    setMedia(user.media)
                    setOnEdit(true)
                }
            })
        }else{
                setOnEdit(false)
                setUser(initalState)
                setMedia(false)
            }
    }, [param.id, allUsers])

    console.log(allUsers);

    const handleUpload = async e =>{
        e.preventDefault()
        try {
            const file = e.target.files[0]

            if(!file) return alert("File not exists")

            if(file.size > 1* 1024 * 1024)
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

    const handleDestroy = async () =>{
        try {
            setLoading(true)
            await axios.post('/user/destroy', {public_id: media.public_id},{
                headers: {Authorization: token}
            })

            setLoading(false)
            setMedia(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setUser({...user, [name]:value})
    }

    const style = {
        display: media ? "block" : "none"
        }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(onEdit){
                await axios.put(`/user/user_update/${user._id}`, {...user, media: media}, {
                    headers: {Authorization: token}
                })
            }
            setCallback(callback)
            history.push("/")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="user_blok">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload} />
                {
                    loading ? <div id="file_img"><Loading /></div>

                    : <div id="file_img" style={style}>
                        <img src={media ? media.url : ''} alt="" />
                        <span onClick={handleDestroy}>X</span>
                      </div>
                }
                
            </div>

            <form onSubmit={handleSubmit}>
                <div className="login_params">
                    <div className="row">
                        <label htmlFor="name">Username</label>
                        <input type="text" name="name" id="name" required 
                        value={user.name} onChange={handleChangeInput} />
                    </div>

                    <div className="row">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required 
                        value={user.email} onChange={handleChangeInput} />
                    </div>

                    <div className="row" style={styles}>
                        <label htmlFor="role">Role</label>
                        <input type="number" name="role" id="role" required max="2" min="0"
                        value={user.role} onChange={handleChangeInput} />
                    </div>

                </div>
                <button type="submit">{onEdit ? "Update" : "Create"}</button>
            </form>
        </div>
    )
}

export default UserPanel
