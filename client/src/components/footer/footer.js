import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../GlobalState'

import User from './icon/Logo.PNG'


const data = [
    {
        id: 3,
        city: "Cамарканд",
        city1: "Samarkand",
        email: "info@supersite.uz",
        location: 'https://www.google.com/maps/place/Fargo+Samarqand+Branch/@39.6530848,66.9418534,16.53z/data=!4m5!3m4!1s0x3f4d19f084898a91:0xfce908a91ba10545!8m2!3d39.6526914!4d66.9444096',
        locationArenter: 'https://www.google.com/maps/place/Fargo+Samarqand+Branch/@39.6530848,66.9418534,16.53z/data=!4m5!3m4!1s0x3f4d19f084898a91:0xfce908a91ba10545!8m2!3d39.6526914!4d66.9444096',
        linkTitle: 'Самарканд, Мирсаид барака улица , 20-уй',
        linkTitle1: 'Samarkand, Mirsaid baraka street, 20th',
        locationArenterTitle: 'Напротив Салона красоты Felicita'
    },
    {
        id: 2,
        city: "Санкт Петербург",
        city1: "Saint Petersburg",
        email: "info@supersite.uz",
        location: 'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D0%BA%D0%B0+%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B0,+5%D0%B0,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+197376/@59.9772428,30.3154023,17z/data=!3m1!4b1!4m5!3m4!1s0x469633fd9f6ea265:0xd66c07347afe0220!8m2!3d59.9772428!4d30.317591',
        locationArenter: 'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D0%BA%D0%B0+%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B0,+5%D0%B0,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+197376/@59.9772428,30.3154023,17z/data=!3m1!4b1!4m5!3m4!1s0x469633fd9f6ea265:0xd66c07347afe0220!8m2!3d59.9772428!4d30.317591',
        linkTitle: 'Академика павлова 5А , тц River House 2-этаж',
        linkTitle1: 'Akademika Pavlova 5A, mall River House 2-floor',
        locationArenterTitle: 'Напротив Салона красоты Felicita'
    },
    {
        id: 1,
        city: "Ташкент",
        city1: "Tashkent",
        email: "info@supersite.uz",
        location: 'https://www.google.com/maps/place/Stroy+Center+I+%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%A2%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D1%8B%D0%B9+%D0%A6%D0%B5%D0%BD%D1%82%D1%80+I+%D0%A1%D1%82%D1%80%D0%BE%D0%B9%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B+I+%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D1%8B+%D0%B4%D0%BB%D1%8F+%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B0+I+%D0%9E%D1%82%D0%B4%D0%B5%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B5+%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/@41.3670121,69.2851487,18.11z/data=!4m12!1m6!3m5!1s0x38ae8ccab955d669:0x6c80400f959a102e!2zU3Ryb3kgQ2VudGVyIEkg0KHRgtGA0L7QuNGC0LXQu9GM0L3Ri9C5INCi0L7RgNCz0L7QstGL0Lkg0KbQtdC90YLRgCBJINCh0YLRgNC-0LnQvNCw0YLQtdGA0LjQsNC70YsgSSDQotC-0LLQsNGA0Ysg0LTQu9GPINC00LXQutC-0YDQsCBJINCe0YLQtNC10LvQvtGH0L3Ri9C1INC80LDRgtC10YDQuNCw0LvRiw!8m2!3d41.3670206!4d69.2862093!3m4!1s0x38ae8ccab955d669:0x6c80400f959a102e!8m2!3d41.3670206!4d69.2862093',
        locationArenter: 'https://www.google.com/maps/place/Stroy+Center+I+%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%A2%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D1%8B%D0%B9+%D0%A6%D0%B5%D0%BD%D1%82%D1%80+I+%D0%A1%D1%82%D1%80%D0%BE%D0%B9%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B+I+%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D1%8B+%D0%B4%D0%BB%D1%8F+%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B0+I+%D0%9E%D1%82%D0%B4%D0%B5%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B5+%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/@41.3670121,69.2851487,18.11z/data=!4m12!1m6!3m5!1s0x38ae8ccab955d669:0x6c80400f959a102e!2zU3Ryb3kgQ2VudGVyIEkg0KHRgtGA0L7QuNGC0LXQu9GM0L3Ri9C5INCi0L7RgNCz0L7QstGL0Lkg0KbQtdC90YLRgCBJINCh0YLRgNC-0LnQvNCw0YLQtdGA0LjQsNC70YsgSSDQotC-0LLQsNGA0Ysg0LTQu9GPINC00LXQutC-0YDQsCBJINCe0YLQtNC10LvQvtGH0L3Ri9C1INC80LDRgtC10YDQuNCw0LvRiw!8m2!3d41.3670206!4d69.2862093!3m4!1s0x38ae8ccab955d669:0x6c80400f959a102e!8m2!3d41.3670206!4d69.2862093',
        linkTitle: 'Юнусабад, Улица Амир Темура , тц Stroycenter, 2-этаж',
        linkTitle1: 'Yunusabad, Amir Temur Street, Stroycenter mall, 2nd floor',
        locationArenterTitle: 'Напротив Салона красоты Felicita'
    },
]

function Footer() {

    const state = useContext(GlobalState)
    const [colors] = state.postAPI.colors
    const [language] = state.postAPI.language

    const button = {
        background: colors ? "#1ABC9C" : "gold",
        color: colors ? "white" : "black"
    }

    const bagckroungs = {
        background: "#2A2A2A",
        color: "white"
    }

    return (
        <div className="footer" style={bagckroungs}>

            <div className="blog">
                <div className="footer_title">
                    <h3>
                        {language ? 'For partners' : 'Партнерам'}
                    </h3>
                </div>
                <div className="footer_links">
                    <Link to="/">
                        {language ? 'Home' : 'Главная'}
                    </Link>
                    <Link to="/about">
                        {language ? 'About' : 'О нас'}
                    </Link>
                    <Link to="/services">
                        {language ? 'Services' : 'Услуги'}
                    </Link>
                    <Link to='/login'>
                        {language ? 'Add' : 'Добавлятъ'}
                    </Link>
                    <Link to="/our_team">
                        {language ? 'Team' : 'Команда'}
                    </Link>
                    <Link to="/portfolio">
                        {language ? 'Portfolio' : 'Портфолио'}
                    </Link>
                    <Link to="/blogs">
                        {language ? 'Blog' : 'Блог'}
                    </Link>
                </div>
            </div>

            {
                data.map((item) => {
                    return <div key={item.id} className="title_card">
                        <div className='header_city'>
                            <h2>{language ? item.city1 : item.city}</h2>
                        </div>

                        <div>
                            <div className='card_info'>
                                <div className="icon_left">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className='text_style'>
                                    <h5>
                                        {item.email}
                                    </h5>
                                </div>
                            </div>
                            <a href={`${item.locationArenter}`} className='text_style'>
                                <div className='card_info'>
                                    <div className="icon_left">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h5>
                                            {  language ? item.linkTitle1 : item.linkTitle}
                                        </h5>
                                    </div>

                                </div>
                            </a>
                        </div>


                        <div className='margin_date'>
                            < Link to="/ordered" className="btn" style={button} >
                                {language ? 'To contact us' : 'Связаться с нами'}
                            </Link >
                        </div>
                    </div>
                })
            }

            <div className="blog footer_info">

                <div className="box">
                    <div className="footer_info">
                        <div className="profile">
                            <div className="profile_img">
                                <img src={User} alt="" />
                            </div>
                            <div className="profile_info">
                                <h4>
                                    Supersite.uz
                                </h4>
                                <p>
                                    @supersite 901  участников
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer_info">
                        <a href="https://instagram.com/supersite.uz?utm_medium=copy_link" style={button}>
                            {language ? 'Go to channel' : 'Перейти на канал'}
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer