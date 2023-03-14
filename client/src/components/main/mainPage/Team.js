import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'

import TeamImg from './img/Screenshot_1.png'
import TeamImg2 from './img/Screenshot_2.png'
import TeamGlass from './img/glassComp1.png'
import TeamGlass2 from './img/glassComp2.png'
import Glass from './img/glass.png'
import Glass2 from './img/glass1.png'

function Team(){
    const state = useContext(GlobalState)
    const [colors] = state.postAPI.colors
    const [language] = state.postAPI.language

    const button ={
        background: colors ? "#1ABC9C" : "gold",
        color: colors ? "white" : "black"
    }
    
    const bagckroungs ={
        background: colors ? "#fff" : "#2B2B2B",
        color: colors ? "black" : "white"
    }
    return (
        <div className="team_infs" style={bagckroungs}>
            <div className="portfolio_info">
                <h2 style={bagckroungs}>
                {language ? 'OUR TEAM' : 'НАША КОМАНДА'}
                </h2>
                <div>
                    <p>
                    {language ? 'Our super team consists of  ' : 'В нашей супер команде работают: '}
                    <p>
                    {language ? 'programmers, developers, ceo specialists, designers, motion designers, smm specialists, project managers and an accountant.' : 'программисты, разработчики, СЕО специалисты, дизайнеры, моушен дизайнеры, СММ специалисты, проект менеджеры и бухгалтер.'}
                    </p>
                    </p>
                </div>
                <Link to="/our_team" style={button}>
                {language ? 'Familiarize' : 'Ознакомиться'}
                </Link>
            </div>
            
            <div className="w-50">
                <img src={colors ? TeamImg : TeamImg2} alt="" />
                <img className="teamglass" src={colors ? TeamGlass : TeamGlass2} alt="" />
                <img className="glassblog"  src={colors ? Glass2 : Glass} alt="" />
            </div>
        </div>
    )
}

export default Team
