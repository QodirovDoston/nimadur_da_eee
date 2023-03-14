import React, {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/postItem/PostItem'


function CategoryPost() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [posts] = state.postAPI.post
    const [categoryPost, setCatwegoryPost] = useState([])
    const {t} = useTranslation();
    const [language] = state.postAPI.language
    const [colors] = state.postAPI.colors

    const bagckroungs ={
        background: colors ? "#FFF" : "#2A2A2A",
        color: colors ? "black" : "white"
    }
    const bagckroungBox ={
        background: colors ? "#FFF" : "#323131",
        color: colors ? "black" : "white"
    }
    
    const button ={
        background: colors ? "rgba(26, 188, 156, 0.05)" : "#FFEB3B",
        color: "black"
    }

    useEffect(() =>{
        if(params.category){
            posts.forEach(product =>{
                if(product.category === params.category) setCatwegoryPost(product)
            })
        }
    }, [params.category, posts])

    if(categoryPost.length === 0) return null;

    return (
        <div className="category_portfolio" style={bagckroungs}>
            <div className="heading portfoilio_heading" style={bagckroungBox} >
                <h2 style={bagckroungBox} >
                    {t('header.5')}
                </h2>
                <p>
                {t('services.content')}
                </p>
            </div>
            <div className="category_port_cart">
                    {
                        posts.map(product =>{
                            return product.category === categoryPost.category
                            ? <ProductItem key={product._id} language={language} product={product}  bagckroungBox={bagckroungBox} button={button} t={t}  /> : null
                        })
                    }
            </div>
        </div>
        
    )
}

export default CategoryPost
