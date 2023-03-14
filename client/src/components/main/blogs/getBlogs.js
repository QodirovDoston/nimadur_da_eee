import React, {useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import Icons from '../mainPage/icons'

function GetBlogs() {
    const state = useContext(GlobalState)
    const [blogs] = state.blogsAPI.blogs
    const [colors] = state.postAPI.colors
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [language] = state.postAPI.language
    const [callback, setCallback] = state.blogsAPI.callback
    let data = false

    const bagckroungs ={
        background: colors ? "#FFF" : "#2A2A2A",
        color: colors ? "black" : "white"
    }
    const bagckroungBox ={
        background: colors ? "#FFF" : "#323131",
        color: colors ? "black" : "white"
    }
    
    const button ={
        background: colors ? "rgba(26, 188, 156, 0.05)" : "#FFEB3B",
        color: "black"
    }

    const admin = {
        display: isAdmin ? "block" : "none"
    }
     
    const deleteProduct = async (id, public_id)=>{
        try {
            const destoryImages = axios.post('/api/destroy', {public_id}, {
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/blogs_create/${id}`, {
                headers: {Authorization: token}
            })

            await destoryImages
            await deleteProduct
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }


    return (
        <>
        <div className="heading portfoilio_heading" style={bagckroungs}>
            <h2 style={bagckroungs}>
            {language ? 'Blog' : 'Блог'}
            </h2>
            <p>
            {language ? 'Latest news about us' : 'Последние новости о нас'}
            </p>
        </div>
            <div className="portfolio_blogs blogs_box" style={bagckroungs}>
                {
                    blogs.map(product =>{
                        data =! data
                        return <>
                                   {
                                        data ? <div className="blog_cart shadow_box" key={product._id} style={bagckroungBox}>
                                                    <div className="blog_img" style={button}>
                                                        <img src={product.media.url} alt="" />
                                                    </div>
                                                    <div className="blog_info blog_data_info" style={bagckroungBox}>
                                                        <h2>
                                                            {
                                                                language ? product.titleEng : product.title
                                                            }
                                                        </h2>
                                                        <p>
                                                            {
                                                            language ? product.descriptionEn : product.descriptionRu
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            : <div className="blog_cart shadow_box" key={product._id} style={bagckroungBox}>
                                                <div className="blog_info rigth_box blog_data_info" style={bagckroungBox}>
                                                    <h2>
                                                        {
                                                            language ? product.titleEng : product.title
                                                        }
                                                    </h2>
                                                    <p>
                                                        {
                                                        language ? product.descriptionEn : product.descriptionRu
                                                        }
                                                    </p>
                                                </div>
                                                <div className="rigth_img_box">
                                                    <div className="blog_img" style={button}>
                                                        <img src={product.media.url} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                                
                                    }
                                    
                                    <div className="row_btn"  style={admin}>
                                        <Link to="#!" id="delet_btn" onClick={() => deleteProduct(product._id, product.media.public_id)}>
                                            Deleted
                                        </Link>
                                        <Link id="edit_btn" to={`/create_blogs/${product._id}`}> 
                                            Edit
                                        </Link>
                                    </div>
                        
                                </>
                    })
                } 
            </div>
            <Icons />
        </>
    )
}

export default GetBlogs
