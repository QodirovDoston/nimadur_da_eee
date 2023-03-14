import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import {GlobalState} from '../../../GlobalState'

import Chats from './img/chats.png'
import Chats2 from './img/chats2.png'

function ContactClients() {

    const state = useContext(GlobalState)
    const [colors] = state.postAPI.colors
    const [posts] = state.clientsMessageAPI.posts
    const [isAdmin] = state.userAPI.isAdmin
    const [isBoss] = state.userAPI.isBoss
    const [token] = state.token
    const [callback, setCallback] = state.blogsAPI.callback
    const {t} = useTranslation();

    const deleteProduct = async (id, public_id)=>{
        try {
            const destoryImages = axios.post('/api/destroy', {public_id}, {
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/clients_message/${id}`, {
                headers: {Authorization: token}
            })

            await destoryImages
            await deleteProduct
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    
    const button ={
        background: colors ? "#C8EEE6" : "#FFD700",
        color: colors ? "white" : "black"
    }
    
    const bagckroungs ={
        background: colors ? "#fff" : "#2B2B2B",
        color: colors ? "black" : "white"
    }

    const admins = {
        display: isAdmin || isBoss ? 'inline-block' : 'none'
    }

    return (
        <div className="contacts_box" style={bagckroungs}>
            <div className="heading">
                <h2 style={bagckroungs}>
                    {t('message.title')}
                </h2>
            </div>
            <div className="contacts_cart">
                <div className="contacts_images">
                    <img src={colors ? Chats : Chats2} alt="" />
                </div>
                <div className="imports_images" style={button}>
                    {
                        posts.map(elements =>{
                            return <div className="images_style_contact" key={elements._id}>
                                        <img src={elements.type1.url} alt="" />
                                        <Link to="#!" id="deleted_btn" onClick={() => deleteProduct( elements._id,elements.type1.public_id)} style={admins} >
                                            Deleted
                                        </Link>
                                        <Link id="edit_btn" to={`/update_message/${elements._id}`} style={admins} > 
                                            Edit
                                        </Link>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactClients
