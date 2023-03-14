import React from 'react'
import { Link } from 'react-router-dom'
import BtnReander from './BtnReander'

function UpdatePostItem({product, deleteProduct}) {

    return (
        <div className="update_post">
            <Link to={`/detail/${product._id}`}>
                <img src={product.media.url} alt="" />

                <div className="post_box">
                    <h2 title={product.title}>{product.title}</h2>
                    <p>{product.content}</p>  
                </div>
                <BtnReander product={product} deleteProduct={deleteProduct} />
            </Link>
        </div>
    )
}

export default UpdatePostItem
