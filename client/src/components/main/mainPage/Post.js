import React, {useContext} from 'react'

import {GlobalState} from '../../../GlobalState'
import PostItem from '../utils/postItem/PostItem'

function Post() {
    const state = useContext(GlobalState)
    const [posts] = state.postAPI.post
    const [isAdmin] = state.userAPI.isAdmin

    return (
        <div className="postItem">
            {
                posts.map(product =>{
                    return <PostItem key={product._id} product={product}
                    isAdmin={isAdmin} />
                })
            }
        </div>
    )
}

export default Post
