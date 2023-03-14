import React, {useContext} from 'react'

import {GlobalState} from '../../../GlobalState'
import EditPost from '../utils/postItem/updatePostItem'
import axios from 'axios'

function UpdatePost() {
    const state = useContext(GlobalState)
    const [posts] = state.postAPI.post
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.postAPI.callback

    const deleteProduct = async (id, public_id)=>{
        try {
            const destoryImages = axios.post('/api/destroy', {public_id}, {
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/post/${id}`, {
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
        <div className="category_update">
            {
                posts.map(product =>{
                    return <EditPost key={product._id} product={product}
                    deleteProduct={deleteProduct} isAdmin={isAdmin} />
                })
            }
        </div>
    )
}

export default UpdatePost
