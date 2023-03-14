import React, { useContext, useState } from 'react'
import {GlobalState} from '../../GlobalState'
import axios from 'axios'
import {Link} from 'react-router-dom'

import Menu from './icon/menu.png'
import Menu1 from './icon/menu1.png'
import CloseD from './icon/closed.png'
import CloseL from './icon/closel.png'
import UserIcon from './icon/user.png'
import Moon from './icon/moon.png'
import Sun from './icon/sunny.png'
import Logo from './icon/Logo.PNG'
import Russian from './icon/russia.png'
import Use from './icon/united-states.png'



function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [menu, setMenu] = useState(false)
    const [isAdmin] = state.userAPI.isAdmin
    const [isBoss] = state.userAPI.isBoss
    const [users] = state.userAPI.users
    const [colors, setColors] = state.postAPI.colors
    const [language, setLanguage] = state.postAPI.language
    const [flag, setFlag] = useState(false)

    function handleChangeLang(lan2, lan3) {
        setLanguage(lan2)
        setFlag(lan3)
    }
    const Flags = () =>{
        setFlag(!flag)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%",
        background: colors ? "#FFF" : "#2A2A2A"
    }
    const styleHeader = {
        display: (isBoss || isAdmin) ? "none" : "flex"
    }

    const logoutUser = async () =>{
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')
        
        window.location.href = '/';
    }
    const loggedRouter = ()=>{
        return (
            <>
                <li  className="log" ><Link to="/" onClick={logoutUser} style={button} > LogOut </Link></li>
                <li><Link to={`/infor/${users._id}`} ><img src={UserIcon} width="24px" alt="" /></Link></li>
            </>
        )
    }

    const sunFunc = {
        display: colors ? "none" : "block"
    }
    const moonFunc = {
        display: colors ? "block" : "none"
    }
    const bagckroungs ={
        background: colors ? "#FFF" : "#2A2A2A"
    }
    const colorP ={
        color: colors ? "black" : "white"
    }
    const button ={
        background: colors ? "#1ABC9C" : "#FFD700",
        color: colors ? "white" : "black"
    }

    const lanInfo1 = {
        opacity: language ? '1' : '0.5'
    }
    const lanInfo2 = {
        opacity: language ? '0.5' : '1'
    }

    const onClickColor = () =>{
        setColors(!colors)
    }


    const OnEffect = () =>{
        setMenu(!menu)
    }

    return (
        <>
            <header style={bagckroungs}>
                <div className="logo">
                    <Link style={colorP} to='/'><img src={Logo} alt="" /></Link>
                </div>
                <div className="logo_name">
                    <Link to="/" href="#home" style={colorP}>
                        <h2>
                            Supersite
                        </h2>
                    </Link>
                </div>

                <ul className="menu-link" style={styleMenu}>
                    <ul className="header_link" style={styleHeader} onClick={OnEffect} >
                        <li>
                            <Link  style={colorP} to="/">
                                {language ? 'Home' : 'Главная'}
                            </Link>
                        </li>
                        <li>
                            <Link style={colorP} to="/about">
                                {language ? 'About' : 'О нас'}
                            </Link>
                        </li>
                        <li>
                            <Link  style={colorP} to="/services">
                                {language ? 'Services' : 'Услуги'}
                            </Link>
                        </li>
                        <li>
                            <Link style={colorP} to="/portfolio">
                                {language ? 'Portfolio' : 'Портфолио'}
                            </Link>
                        </li>
                        <li>
                            <Link style={colorP} to="/blogs">
                                {language ? 'Blog' : 'Блог'}
                            </Link>
                        </li>                    
                    </ul>
                    
                    <ul className="log_login">
                        {
                            isLogged ? loggedRouter() : 
                            <>
                                <li className="phone"><a style={button} href="tel:+998998107090">+99899 810-70-90</a></li> 
                                <li><img src={Sun} alt="" style={sunFunc} onClick={onClickColor} className="mons_days" /></li>
                                <li><img src={Moon} alt="" style={moonFunc} onClick={onClickColor} className="mons_days" /></li>
                            </>
                        }
                        
                    </ul>
                    
                    <img src={colors ? CloseL : CloseD} alt="" style={{width: '35px'}} className="menu" onClick={OnEffect} />
                </ul>
                
                
                <ul className="languages">
                    <img src={ language ? Use : Russian} alt="" onClick={Flags} />
                    <ul className={`${flag ? 'drops' : 'drop'}`}>
                        <li style={lanInfo2} onClick={() => {handleChangeLang(false, false)}}>Ru</li>
                        <li style={lanInfo1} onClick={() => {handleChangeLang(true, false)}}>Eng</li>
                    </ul>
                </ul>

                <img src={colors ? Menu1 : Menu} alt="" className="menu" onClick={OnEffect} />
                
            </header>
        </>
    )
}

export default Header