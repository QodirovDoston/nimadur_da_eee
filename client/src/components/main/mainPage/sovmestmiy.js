import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Client from './img/client.png'
import Client2 from './img/ckientmoon.png'

function Sovmestmiy() {

    const state = useContext(GlobalState)
    const [colors] = state.postAPI.colors
    const [clients] = state.clientsAPI.clients
    const [language] = state.postAPI.language
    const [isAdmin] = state.userAPI.isAdmin
    const [isBoss] = state.userAPI.isBoss
    const [token] = state.token
    const [callback, setCallback] = state.blogsAPI.callback

    const deleteProduct = async (id, public_id)=>{
        try {
            const destoryImages = axios.post('/api/destroy', {public_id}, {
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/clients_create/${id}`, {
                headers: {Authorization: token}
            })

            await destoryImages
            await deleteProduct
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const banner ={
        background: colors ? "white" : "#2A2A2A",
        color: colors ? "black" : "white"
    }
    const admins = {
        display: isAdmin || isBoss ? 'inline-block' : 'none'
    }
    
    const borders ={
        border: `1px solid ${colors ? "#1ABC9C" : "gold"}`,
	background: colors ? "#1ABC9C" : "gold",
        color: colors ? "black" : "white"
    }
    return (
        <div className="info_blog" style={banner}>
            <div className="heading">
                <h2 style={banner} >
                    {language ? 'OUR CLIENTS' : 'НАШИ КЛИЕНТЫ'}
                </h2>
            </div>

            <div className="services_container srvs">
                <div className="sovmes_img">
                    <img src={colors ? Client : Client2} alt="" />
                </div>
                <div className="services_box clients_post">
                {
                    clients.map(element =>{
                        return <div key={element._id}>
                                    <div  className="services_cart" >
                                        <div className="company_logo" style={borders}>
                                            <img src={element.media.url} alt="" />
                                        </div>
                                        <div className="mini_logo" style={borders}>
                                            <img src={element.type1.url} alt="" />
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}} className="link_styles">
                                        <Link to="#!" id="deleted_btn"  onClick={() => deleteProduct( element._id,element.type1.public_id, element.media.public_id)} style={admins} >
                                            Deleted
                                        </Link>
                                        <Link id="edit_btn" to={`/client_create/${element._id}`} style={admins} > 
                                                Edit
                                        </Link>

                                    </div>
                                </div>
                    })
                    
                }
                </div>
            </div>
        </div>
    )
}

export default Sovmestmiy
