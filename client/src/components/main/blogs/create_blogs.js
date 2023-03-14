import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import { useHistory, useParams} from 'react-router-dom'

const initalState = {
    titleEng: '', 
    title: '',
    descriptionRu: '',
    descriptionEn: '',
    _id: ''
}

function CreateCategory() {
    const state = useContext(GlobalState)
    const [category, setCategory] = useState(initalState)
    const [media, setMedia] = useState(false)
    const [loading, setLoading] = useState(false)

    const [token] = state.token
    const [isAdmin] = state.userAPI.isAdmin
    const [isBoss] = state.userAPI.isBoss

    const history = useHistory()
    const param = useParams()

    const [blogs] = state.blogsAPI.blogs
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.postAPI.callback

    useEffect(() =>{
        if(param.id){        
            setOnEdit(true)
            blogs.forEach(category =>{
                if(category._id === param.id) {
                    setCategory(category)
                    setMedia(category.media)
                }
            })
        }else{
                    setOnEdit(false)
                    setCategory(initalState)
                    setMedia(false)
                }
    }, [param.id, blogs])

    const handleUpload = async e =>{
        e.preventDefault()
        try {
            if(!(isAdmin || isBoss)) return alert("You're not an Admin")
            const file = e.target.files[0]

            if(!file) return alert("File not exists")

            if(file.size > 10* 1024 * 1024)
                return alert("Size too large! ")
            
            if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg' !== 'video/mp4')
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
            if(!(isAdmin || isBoss)) return alert("You're not an Admin")
            setLoading(true)
            await axios.post('/api/destroy', {public_id: media.public_id},{
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
        setCategory({...category, [name]:value})
    }

    const style = {
    display: media ? "block" : "none"
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(!(isAdmin || isBoss)) return alert("You're not an Admin")
            if(!media) return alert("No Image Upload")

            if(onEdit){
                await axios.put(`/api/blogs_create/${category._id}`, {...category, media: media}, {
                    headers: {Authorization: token}
                })
            }else{
                await axios.post('/api/blogs_create', {...category, media: media}, {
                    headers: {Authorization: token}
                })
            }
           

            setCallback(!callback)
            history.push("/")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
    <>
        <div className="create_categor">
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
            <div className="form_input">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <input type="text" name="titleEng"  id="titleEng" required placeholder="TitleEng"
                        value={category.titleEng} onChange={handleChangeInput} />
                    </div>
                    <div className="row">
                        <input type="text" name="title"  id="title" required placeholder="Title"
                        value={category.title} onChange={handleChangeInput} />
                    </div>
                    <div className="row">
                        <textarea type="text" name="descriptionRu"  id="descriptionRu" required  placeholder="ContentRu"
                        value={category.descriptionRu}  rows="5" onChange={handleChangeInput} />
                    </div>
                    <div className="row">
                        <textarea type="text" name="descriptionEn"  id="descriptionEn" required  placeholder="ContentEn"
                        value={category.descriptionEn}  rows="5" onChange={handleChangeInput} />
                    </div>

                    <button type="submit">{onEdit ? "Update" : "Create"}</button>
                </form>
            </div>
        </div>
    </>
    )
}

export default CreateCategory
