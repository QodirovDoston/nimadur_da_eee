import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/postItem/PostItem'
import Icons from '../mainPage/icons'


function CategoryPost() {
    const state = useContext(GlobalState)
    const [posts] = state.postAPI.post
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

    return (
        <div className="category_portfolio" style={bagckroungs}>
            <Icons />
            <div className="heading portfoilio_heading" style={bagckroungBox} >
                <h2 style={bagckroungBox} >
                {language ? 'Portfolio' : 'Портфолио'}
                </h2>
                <p>
                {language ? 'In the portfolio you will find developed websites, telegram bots, mobile applications and smm promotion. Better to see once than to speak 100 times. ' : 'В портфолио  найдёте разработанные сайты, телеграм-боты, мобильные приложения и смм продвижения. Лучше один раз увидеть, чем 100 раз услышать.'}
                </p>
            </div>
            <div className="category_port_cart">
                    {
                        posts.map(product =>{
                            return <ProductItem key={product._id} 
                                language={language} 
                                product={product}  
                                bagckroungBox={bagckroungBox} 
                                button={button} 
                                />
                        })
                    }
            </div>
        </div>
        
    )
}

export default CategoryPost
