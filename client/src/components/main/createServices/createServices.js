import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import { useHistory, useParams} from 'react-router-dom'

const initalState = {
    title: '',
    titleEng: '',
    contentRu: '',
    contentEn: '',
    services1: '',
    services2: '',
    services3: '',
    _id: ''
}

function CreateServices() {
    const state = useContext(GlobalState)
    const [servis, setServices] = useState(initalState)
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

    const [services] = state.servicesAPI.services
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.postAPI.callback

    useEffect(() =>{
        if(param.id){        
            setOnEdit(true)
            services.forEach(element =>{
                if(element._id === param.id) {
                    setServices(element)
                    setMedia(element.media)
                    setType1(element.type1)
                    setType2(element.type2)
                    setType3(element.type3)
                }
            })
        }else{
                    setOnEdit(false)
                    setServices(initalState)
                    setMedia(false)
                    setType1(false)
                    setType2(false)
                    setType3(false)
                }
    }, [param.id, services])

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
        setServices({...servis, [name]:value})
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
                await axios.put(`/api/services/${servis._id}`, {...servis, media: media, type1: type1, type2: type2, type3: type3}, {
                    headers: {Authorization: token}
                })
            }else{
                await axios.post('/api/services', {...servis, media: media, type1: type1, type2: type2, type3: type3}, {
                    headers: {Authorization: token}
                })
            }
           

            setCallback(!callback)
            history.push("/")
        } catch (err) {
            alert(err.response.data.msg)
        }
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

    return (
    <>

        <div className="create_team services_creates">
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
            <div className="team_container">
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
                
                <form onSubmit={handleSubmit}>

                    <div className="posabs">
                        <input type="text" name="services1"  id="services1" required placeholder="Services"
                        value={servis.services1} onChange={handleChangeInput} />
                    </div>

                    <div className="posabs posabs1">
                        <input type="text" name="services2"  id="services2" required placeholder="Services"
                        value={servis.services2} onChange={handleChangeInput} />
                    </div>

                    <div className="posabs posabs2">
                        <input type="text" name="services3"  id="services3" required placeholder="Services"
                        value={servis.services3} onChange={handleChangeInput} />
                    </div>
                    
                    <div className="row">
                        <label htmlFor="title">Title Info</label>
                        <input type="text" name="title"  id="title" required placeholder="Tite"
                        value={servis.title} onChange={handleChangeInput} />
                    </div>

                    <div className="row">
                        <label htmlFor="titleEng">TitleEng Info</label>
                        <input type="text" name="titleEng"  id="titleEng" required placeholder="TitleEng"
                        value={servis.titleEng} onChange={handleChangeInput} />
                    </div>

                    <div className="row">
                        <label htmlFor="content">ContentEn</label>
                        <textarea type="text" name="contentEn"  id="contentEn" required  placeholder="ContentEn"
                        value={servis.contentEn}  rows="5" onChange={handleChangeInput} />
                    </div>
                    <div className="row">
                        <label htmlFor="content">ContentRu</label>
                        <textarea type="text" name="contentRu"  id="contentRu" required  placeholder="ContentRu"
                        value={servis.contentRu}  rows="5" onChange={handleChangeInput} />
                    </div>
                    <button type="submit">{onEdit ? "Update" : "Create"}</button>                    
                </form>
                
            </div>
        </div>
        
    </>
    )
}

export default CreateServices
