import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({category, deleteProduct}) {

    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const [isBoss] = state.userAPI.isBoss

    return (
        <div className="row_btn">
            {
                isAdmin || isBoss ?
                <>
                    <Link id="delet_btn" to="#!" onClick={() => deleteProduct(category._id, category.media.public_id)} > 
                        Delete
                    </Link>
                    <Link id="edit_btn" to={`/create_category/${category._id}`}> 
                        Edite
                    </Link>
                </>
                : <>
                  </>
            }
        </div>
    )
}

export default BtnRender
