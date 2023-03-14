import React from 'react'
import { Link } from 'react-router-dom'

function categoryItem({category}) {
    return (
        <div className="category_cart">
            
            <Link to={`/catigory/${category.title}`}>
                
                <div className="category_box">
                    <h2>{category.title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default categoryItem
