import React from 'react'
import BtnReander from './BtnRender'

function categoryItem({category,deleteProduct}) {
    return (
        <div className="update_category">
                <div className="update_img_category">
                    <img src={category.media.url} alt="" />
                </div>
                <div className="category_box">
                    <h2>{category.title}</h2>
                </div>

            <BtnReander category={category} deleteProduct={deleteProduct} />
        </div>
    )
}

export default categoryItem
