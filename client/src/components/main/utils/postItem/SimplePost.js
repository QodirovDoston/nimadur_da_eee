import React from 'react'
import { Link } from 'react-router-dom'
import BtnReander from './BtnReander'

function SimplePost({product, deleteProduct}) {
    return (
        <div className="simple_box">
            <Link to={`/detail/${product._id}`}>
                <img src={product.media.url} alt="" />

                <div className="userData">
                    <div className="avatar">
                        <img src={product.userID.media.url} alt="" />
                    </div>
                    <div className="userData-info">
                        <h4> Name: 
                            {
                                product.userID.name
                            }
                        </h4>
                    </div>
                </div>
            
                <div className="post_box">
                    <h2 title={product.title}>{product.title}</h2>
                    <p>{product.content}</p>  
                </div>
                <BtnReander product={product} deleteProduct={deleteProduct} />
            </Link>
        </div>
    )
}

export default SimplePost
