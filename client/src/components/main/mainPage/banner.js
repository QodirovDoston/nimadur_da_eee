import React, { useContext } from 'react'
import {GlobalState} from '../../../GlobalState'

import {Link} from 'react-router-dom'

import BannerImg from './img/banner.png'
import BannerImg2 from './img/banner2.png'
import BannerImg3 from './img/bannermoon1.png'
import BannerImg4 from './img/bannermoon.png'
import Glass2 from './img/glassBanner.png'
import Glass1 from './img/glassBanner2.png'



function Banner() {
    const state = useContext(GlobalState)
    const [colors] = state.postAPI.colors
    const [language] = state.postAPI.language

    
    const button ={
        background: colors ? "#1ABC9C" : "gold",
        color: colors ? "white" : "black"
    }
    
    const banner ={
        background: colors ? "#faf8f9" : "#2B2B2B",
        color: colors ? "black" : "white"
    }


    return (
        <div className="header_baner" style={banner} id='home'>
            <div className="banner_info">
                <h2>
                {language ? 'Turnkey website development.' : 'Разработка сайтов под ключ'}
                </h2>
                <p>{language ? 'Become a successful businessman.' : 'Станьте успешным бизнесменом.'}</p>
                <Link to="/ordered" style={button}>
                {language ? 'Order' : 'Заказать'}
                </Link>
            </div>
            <div className="banner_img">
                <img src={colors ?  Glass1 : Glass2} alt="" className="glass" />
                <img src={colors ?  BannerImg : BannerImg3} alt="" className="banner1" />
                <img src={colors ? BannerImg2 : BannerImg4} alt="" className="banner2"  />
            </div>
        </div>
    )
}

export default Banner
