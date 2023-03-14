import React, {useContext} from 'react'

import {GlobalState} from '../../../GlobalState'
import WriteCategory from '../utils/categoryItem/updateCategoryItem'
import axios from 'axios'

function EditCategory() {

    const state = useContext(GlobalState)
    const [catigories] = state.catigoriesAPI.catigories
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.catigoriesAPI.callback

    const deleteProduct = async (id, public_id)=>{
        try {
            const destoryImages = axios.post('/api/destroy', {public_id}, {
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/category/${id}`, {
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
                catigories.map(category =>{
                return <WriteCategory key={category._id} category={category} 
                deleteProduct={deleteProduct} isAdmin={isAdmin} />
            })
            }
        </div>
    )
}

export default EditCategory
