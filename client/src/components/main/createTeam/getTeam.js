import React, {useContext} from 'react'
import axios from 'axios'

import {GlobalState} from '../../../GlobalState'
import PostItem from '../utils/teamsItem/teamItem'

function GetTeam() {
    const state = useContext(GlobalState)
    const [teamPost] = state.teamPostAPI.teamPost
    const [callback, setCallback] = state.teamPostAPI.callback
    const [token] = state.token
    const [language] = state.postAPI.language
    const [isAdmin] = state.userAPI.isAdmin
    const [colors] = state.postAPI.colors

    const bagckroungs ={
        background: colors ? "#FFF" : "#2A2A2A",
        color: colors ? "black" : "white"
    }
    const bagckroungBox ={
        background: colors ? "#FFF" : "#363535",
        color: colors ? "black" : "white"
    }

    
    const deleteProduct = async (id, public_id)=>{
        try {
            const destoryImages = axios.post('/api/destroy', {public_id}, {
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/teams/${id}`, {
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
        <div className="teams_contaner" style={bagckroungs}>
            <div className="teams_boxs" style={bagckroungBox}>
            {
                teamPost.map(product =>{
                    return <PostItem key={product._id} product={product} deleteProduct={deleteProduct}
                    isAdmin={isAdmin} language={language} />
                })
            }
            </div>
            
        </div>
    )
}

export default GetTeam
