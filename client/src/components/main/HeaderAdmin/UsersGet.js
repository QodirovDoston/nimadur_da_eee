import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'

import Edit from './icon/edit.svg'
import Delete from './icon/delete.svg'
import User from './icon/user.svg'

function UsersGet() {
    const state = useContext(GlobalState)
    const [allUsers] = state.userAPI.allUsers
    const [token] = state.token
    const [callback, setCallback] = state.postAPI.callback

    const deleteUser = async (id, public_id)=>{
        try {
            const destoryImages = axios.post('/api/destroy', {public_id}, {
                headers: {Authorization: token}
            })
            const deleteUser = axios.delete(`/user/deleted_user/${id}`, {
                headers: {Authorization: token}
            })

            await destoryImages
            await deleteUser
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    
    return (
        <div className="adminEdit">
                {
                    allUsers.map(user =>{
                        return (
                            <div key={user._id} className="user_info">
                                <div className="user_img">
                                    <img src={user.media ? user.media.url : User} alt="" />
                                </div>
                                <div className="description">
                                    <h2>
                                        {user.name}
                                    </h2>
                                    <p>
                                        Role {user.role}
                                    </p>
                                </div>
                                <div className="icon_blog">
                                    <img src={Delete} alt="" onClick={() => deleteUser(user._id, user.media.public_id)} />
                                    <Link to={`/infor/${user._id}`}>
                                        <img src={Edit} alt="" />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default UsersGet
