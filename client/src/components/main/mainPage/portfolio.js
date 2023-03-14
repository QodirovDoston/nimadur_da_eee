import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import TeamImg from './img/posrtfolio.jpg'

function Portfolio() {
    
    const state = useContext(GlobalState)
    const [colors] = state.postAPI.colors
    const [language] = state.postAPI.language
    
    const button ={
        background: colors ? "#1ABC9C" : "gold",
        color: colors ? "white" : "black"
    }
    
    const bagckroungs ={
        background: colors ? "#FFF" : "#2A2A2A",
        color: colors ? "black" : "white"
    }

    return (
        <div className="info_blog" style={bagckroungs}>
            <div className="heading">
                <h2  style={bagckroungs}>
                {language ? 'PORTFOLIO' : 'ПОРТФОЛИО'}
                </h2>
            </div>
            <div className="info_box">
                <div className="w_50" style={button}>
                    <img src={TeamImg} alt="" style={{width: '100%', objectFit: 'cover', }} />
                </div>
                <div className="portfolio_info">
                    <h2 style={{marginTop: "10px"}}>
                    {language ? 'Our portfolio' : 'Наше портфолио'}
                    </h2>
                    <p>
                    {language ? 'In the portfolio you will find developed websites, telegram bots, mobile applications and smm promotion. Better to see once than to speak 100 times. ' : 'В портфолио  найдёте разработанные сайты, телеграм-боты, мобильные приложения и смм продвижения. Лучше один раз увидеть, чем 100 раз услышать.'}
                    </p>
                    <Link to="/portfolio" style={button}>
                    {language ? 'More details' : 'Подробнее'}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
