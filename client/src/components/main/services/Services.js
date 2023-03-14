import React, {useContext} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import {GlobalState} from '../../../GlobalState'
import Icons from '../mainPage/icons'

function Services() {

    const state = useContext(GlobalState)
    const [services] = state.servicesAPI.services
    const [colors] = state.postAPI.colors
    const [language] = state.postAPI.language
    const [isBoss] = state.userAPI.isBoss
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.teamPostAPI.callback
    let data = false

    const deleteProduct = async (id, public_id)=>{
        try {
            const destoryImages = axios.post('/api/destroy', {public_id}, {
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/services/${id}`, {
                headers: {Authorization: token}
            })

            await destoryImages
            await deleteProduct
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }


    const bagckroungs ={
        background: colors ? "#FFF" : "#363535",
        color: colors ? "black" : "white"
    }
    const bagckroungBox ={
        background: colors ? "#FFF" : "#3B3B3B",
        color: colors ? "black" : "white"
    }
    
    const button ={
        background: colors ? "#DEF6F1" : "yellow",
        color: "black"
    }
    return (     
        <div className="services_style" style={bagckroungs}>
            <Icons />
            <div className="heading">
                <h2 style={bagckroungs}>
                {language ? 'Services' : 'УСЛУГИ'}
                </h2>
                <p>
                {language ? 'We provide IT services for your business' : 'Мы предоставляем IT услуги для вашего бизнеса'}
                </p>
            </div>
            <div className="services_box2">
                {
                    
                    services.map(category =>{
                        data = !data
                        return (
                            <>
                                {
                                    data ? <div className="cart_services" style={bagckroungBox} >
                                                <div className="services_img">
                                                    <img src={category.media.url} alt="" />
                                                </div>
                                                <div className="services_box">
                                                    <h2>{language ? `${category.titleEng}` : `${category.title}`}</h2>
                                                    <p>
                                                        {
                                                        language ? `${category.contentEn}` : `${category.contentRu}`
                                                        }
                                                    </p>
                                                    <div className="icon_info">
                                                        <div className="icon_cart" style={button}>
                                                            <img src={category.type1.url} alt="" />
                                                            <h2>
                                                                {
                                                                    category.services1
                                                                }
                                                            </h2>
                                                        </div>
                                                        <div className="icon_cart" style={button}>
                                                            <img src={category.type2.url} alt="" />
                                                            <h2>
                                                                {
                                                                    category.services2
                                                                }
                                                            </h2>
                                                        </div>
                                                        <div className="icon_cart" style={button}>
                                                            <img src={category.type3.url} alt="" />
                                                            <h2>
                                                                {
                                                                    category.services3
                                                                }
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                
                                           : <div className="cart_services" style={bagckroungBox}>
                                                <div className="services_box rigth_box">
                                                    <h2>{language ? `${category.titleEng}` : `${category.title}`}</h2>
                                                    <p>
                                                        {
                                                        language ? `${category.contentEn}` : `${category.contentRu}`
                                                        }
                                                    </p>
                                                    <div className="icon_info">
                                                        <div className="icon_cart" style={button}>
                                                            <img src={category.type1.url} alt="" />
                                                            <h2>
                                                                {
                                                                    category.services1
                                                                }
                                                            </h2>
                                                        </div>
                                                        <div className="icon_cart" style={button}>
                                                            <img src={category.type2.url} alt="" />
                                                            <h2>
                                                                {
                                                                    category.services2
                                                                }
                                                            </h2>
                                                        </div>
                                                        <div className="icon_cart" style={button}>
                                                            <img src={category.type3.url} alt="" />
                                                            <h2>
                                                                {
                                                                    category.services3
                                                                }
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rigth_img_box">
                                                    <div className="services_img">
                                                        <img src={category.media.url} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                }
                                <div className="row_btn">
                                    {
                                        isAdmin || isBoss ?
                                        <>
                                            <Link id="delet_btn" to="#!" onClick={() => deleteProduct(category._id, category.media.public_id, category.type1.public_id, category.type2.public_id, category.type3.public_id)} > 
                                                Delete
                                            </Link>
                                            <Link id="edit_btn" to={`/create_services/${category._id}`}> 
                                                Edit
                                            </Link>
                                            
                                        </>
                                        : <>
                                            <div></div>
                                        </>
                                    }
                                </div>
                            </>
                            
                        )
                })
                }
            </div>
            
        </div>
    )
}

export default Services
