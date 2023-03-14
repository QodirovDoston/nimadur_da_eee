import React from 'react'
import { Link } from 'react-router-dom'

function categoryItem({category, bagckroungs, buttonStyle, borders, language}) {

    return (
        <div className="category_cart" style={borders} >
                <div className="category_boxs">
                    <h2 style={bagckroungs}>{language ? category.titleEng : category.title}</h2>
                    <p>
                        {
                           language ? category.contentEn : category.contentRu
                        }
                    </p>
                    <div className="abs_link">
                    <Link to="/ordered" style={buttonStyle}>
                    {language ? 'Order' : 'Заказать'}
                    </Link>
                    </div>
                </div>
        </div>
    )
}

export default categoryItem
