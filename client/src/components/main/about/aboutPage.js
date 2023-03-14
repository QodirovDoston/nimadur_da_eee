import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import AboutBanner from './about'
import AboutServices from '../mainPage/services'
import Location from './Location'
import Icons from '../mainPage/icons'

function AboutPage() {

    const state = useContext(GlobalState)
    const [colors] = state.postAPI.colors
    const [language] = state.postAPI.language


    const bagckroungs ={
        background: colors ? "#FFF" : "#2A2A2A",
        color: colors ? "black" : "white"
    }
    const imgStyles ={
        background: `${colors ? "#1ABC9C" : "gold"}`
    }
    return (
        <div>
            <AboutBanner bagckroungs={bagckroungs} imgStyles={imgStyles} />
            <AboutServices language={language} />
            <Location bagckroungs={bagckroungs} language={language} />
            <Icons />
        </div>
    )
}

export default AboutPage
