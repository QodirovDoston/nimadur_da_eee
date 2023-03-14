import React, {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import SimpleProduct from '../utils/postItem/SimplePost'

function DetailsPost() {
    const params = useParams()
    const state = useContext(GlobalState)

    const [posts] = state.postAPI.post
    const [detailsPost, setDetailsPost] = useState([])

    useEffect(() =>{
        if(params.id){
            posts.forEach(product =>{
                if(product._id === params.id) setDetailsPost(product)
            })
        }
    }, [params.id, posts])

    if(detailsPost.length === 0) return null;

    return (
        <div className="body_details">
            <div className="details">
                <div className="detelisImg">
                    <img src={detailsPost.media.url} alt="" />
                </div>
                
                <div className="box-details-info">
                    <div className="row">
                        <h2>{detailsPost.title}</h2>
                    </div>    
                    <p>{detailsPost.description}</p>
                    <p>{detailsPost.content}</p>
                </div>
            </div>

            <div className="simple_content">
                <h2>Similar posts</h2>
                <div className="category_update">
                    {
                        posts.map(product =>{
                            return product.category === detailsPost.category
                            ? <SimpleProduct key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailsPost
