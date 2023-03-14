import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import {useHistory, useParams} from 'react-router-dom'

const initalState = {
    title: '',
    titleEng: '',
    _id: ''
}

function CreateProduct() {
    const state = useContext(GlobalState)
    const [post, setPost] = useState(initalState)
    const [catigories] = state.catigoriesAPI.catigories
    const [media, setMedia] = useState(false)
    const [type1, setType1] = useState(false)
    const [type2, setType2] = useState(false)
    const [type3, setType3] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [loading3, setLoading3] = useState(false)

    const [token] = state.token
    const [isAdmin] = state.userAPI.isAdmin
    const [isBoss] = state.userAPI.isBoss

    const history = useHistory()
    const param = useParams()

    const [teamPost] = state.teamPostAPI.teamPost
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.postAPI.callback

    useEffect(() =>{
        if(param.id){        
            setOnEdit(true)
            teamPost.forEach(product =>{
                if(product._id === param.id) {
                    setPost(product)
                    setMedia(product.media)
                    setType1(product.type1)
                    setType2(product.type2)
                    setType3(product.type3)
                }
            })
        }else{
                    setOnEdit(false)
                    setPost(initalState)
                    setMedia(false)
                }
    }, [param.id, teamPost])

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(onEdit){
                await axios.put(`/api/teams/${post._id}`, {...post, media: media, type1: type1, type2: type2, type3: type3}, {
                    headers: {Authorization: token}
                })
            }else{
                await axios.post('/api/teams', {...post, media: media, type1: type1, type2: type2, type3: type3}, {
                    headers: {Authorization: token}
                })
            }
            setCallback(!callback)
            history.push("/")
        } catch (err) {
            alert(err)
        }
    }
    
    const handleDestroy1 = async () =>{
        try {
            if(!(isAdmin || isBoss)) return alert("You're not an Admin")
            setLoading1(true)
            await axios.post('/api/destroy', {public_id: type1.public_id},{
                headers: {Authorization: token}
            })

            setLoading1(false)
            setType1(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy2 = async () =>{
        try {
            if(!(isAdmin || isBoss)) return alert("You're not an Admin")
            setLoading2(true)
            await axios.post('/api/destroy', {public_id: type2.public_id},{
                headers: {Authorization: token}
            })

            setLoading2(false)
            setType2(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy3 = async () =>{
        try {
            if(!(isAdmin || isBoss)) return alert("You're not an Admin")
            setLoading3(true)
            await axios.post('/api/destroy', {public_id: type3.public_id},{
                headers: {Authorization: token}
            })

            setLoading3(false)
            setType3(false)
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
            setLoading1(false)
            setType1(res.data);

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const type2Upload = async e =>{
        e.preventDefault()
        try {
            if(!(isAdmin || isBoss)) return alert("You're not an Admin")
            const file = e.target.files[0]

            let formData = new FormData()
            formData.append('file', file)

            setLoading2(true)
            const res = await axios.post('/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })
            setLoading2(false)
            setType2(res.data);

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const type3Upload = async e =>{
        e.preventDefault()
        try {
            if(!(isAdmin || isBoss)) return alert("You're not an Admin")
            const file = e.target.files[0]

            let formData = new FormData()
            formData.append('file', file)

            setLoading3(true)
            const res = await axios.post('/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })
            setLoading3(false)
            setType3(res.data);

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setPost({...post, [name]:value})
    }

    const style = {
        display: media ? "block" : "none"
    }

    const style1 = {
        display: type1 ? "block" : "none"
    }

    const style2 = {
        display: type2 ? "block" : "none"
    }

    const style3 = {
        display: type3 ? "block" : "none"
    }

    return (
        <div className="create_team">
            <div className="upload_img">
                <input type="file" name="file" id="files_ups" onChange={handleUpload} />
                {
                    loading ? <div id="file_img"><Loading /></div>

                    : <div id="file_img" style={style}>
                        <img src={media ? media.url : ''}  alt=""/>
                        <span onClick={handleDestroy}>X</span>
                      </div>
                }
                
            </div>
            
            <div className="team_container">
                <form onSubmit={handleSubmit}>

                    <div className="row">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" required 
                            value={post.title} onChange={handleChangeInput} placeholder="Name" />
                    </div>

                    <div className="row">
                            <label htmlFor="titleEng">TitleEng</label>
                            <input type="text" name="titleEng" id="title" required 
                            value={post.titleEng} onChange={handleChangeInput} placeholder="TitleEng" />
                    </div>

                    <div className="row abs_box">
                        <select name="category" value={post.category}  onChange={handleChangeInput} >
                            <option value="">Please slect a category</option>
                            {
                                catigories.map(category =>(
                                    <option value={category.title} key={category._id}>
                                        {category.title}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <button type="submit">{onEdit ? "Update" : "Create"}</button>                    
                </form>
                
                <div className="upload_imgs">

                    <div className="upload_cart">
                        <input type="file" name="file" id="files_up" onChange={type1Upload} />
                        {
                            loading1 ? <div id="file_img"><Loading /></div>

                            : <div id="file_img" style={style1}>
                                <img src={type1 ? type1.url : ''}  alt=""/>
                                <span onClick={handleDestroy1}>X</span>
                            </div>
                        }
                    </div>

                    <div className="upload_cart">
                        <input type="file" name="file" id="files_up" onChange={type2Upload} />
                        {
                            loading2 ? <div id="file_img"><Loading /></div>

                            : <div id="file_img" style={style2}>
                                <img src={type2 ? type2.url : ''}  alt=""/>
                                <span onClick={handleDestroy2}>X</span>
                            </div>
                        }
                    </div>

                    <div className="upload_cart">
                        <input type="file" name="file" id="files_up" onChange={type3Upload} />
                        {
                            loading3 ? <div id="file_img"><Loading /></div>

                            : <div id="file_img" style={style3}>
                                <img src={type3 ? type3.url : ''}  alt=""/>
                                <span onClick={handleDestroy3}>X</span>
                            </div>
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CreateProduct
