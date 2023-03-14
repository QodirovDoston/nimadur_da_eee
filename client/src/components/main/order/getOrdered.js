import React, {useContext} from 'react'

import {GlobalState} from '../../../GlobalState'
import PostItem from '../utils/orderedItems/orderedItems'

function GetOrdered() {
    const state = useContext(GlobalState)
    const [orderInfo] = state.orderAPI.orderInfo
    const [isAdmin] = state.userAPI.isAdmin

    return (
        <div className="teams_contaner">
            {
                orderInfo.map(product =>{
                    return <PostItem key={product._id} product={product}
                    isAdmin={isAdmin} />
                })
            }
        </div>
    )
}

export default GetOrdered
