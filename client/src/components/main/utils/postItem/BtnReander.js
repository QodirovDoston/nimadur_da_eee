import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnReander({product, deleteProduct}) {
    const state = useContext(GlobalState)
    const [isBoss] = state.userAPI.isBoss
    const [isAdmin] = state.userAPI.isAdmin

    return (
        <div className="row_btn">
            {
                isAdmin || isBoss ?
                <>
                    <Link id="delet_btn" to="#!" onClick={() => deleteProduct(product._id, product.media.public_id)} > 
                        Delete
                    </Link>
                    <Link id="edit_btn" to={`/edit_post/${product._id}`}> 
                        Edit
                    </Link>
                </>
                : <>
                    <div></div>
                </>
            }
        </div>
    )
}

export default BtnReander
