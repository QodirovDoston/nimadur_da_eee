import React from 'react'
import BtnRender from './BtnReander'

function ProductItem({product, deleteProduct, language}) {

    return (
        <div className="team_cart">
                <img src={product.media.url} alt="" />
                <div className="post_box">
                    <h2>{language ? `${product.titleEng}` : `${product.title}`}</h2>
                </div>
                <div className="border_box">
                    <div className="img_teams">
                        <img src={product.type1.url} alt="" />
                    </div>
                    <div className="img_teams">
                        <img src={product.type2.url} alt="" />
                    </div>
                    <div className="img_teams">
                        <img src={product.type3.url} alt="" />
                    </div>
                </div>
                <BtnRender deleteProduct={deleteProduct} product={product} />
        </div>
    )
}

export default ProductItem
