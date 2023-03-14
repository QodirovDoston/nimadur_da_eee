import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

import Banner from './icon/Screenshot_1.jpg'
import Banner2 from './icon/banner2.jpg'

import Banner3 from './icon/Screenshot_2.jpg'
import Banner4 from './icon/bannermoon.jpg'

function BannerTeam() {

    const state = useContext(GlobalState)
    const [colors] = state.postAPI.colors
    const [language] = state.postAPI.language

    const bagckroungs ={
        background: colors ? "#FFF" : "#363535",
        color: colors ? "black" : "white"
    }

    return (
        <div className="banner_team_container" style={bagckroungs}>
            <div className="banner_team_info">
                <h2>
                {language ? 'OUR SUPER TEAM' : 'НАША SUPER-КОМАНДА'}
                </h2>
                <div>
                    <p>
                    {language ? 'Our super team consists of  ' : 'В нашей супер команде работают: '}
                    <p>
                    {language ? 'programmers, developers, ceo specialists, designers, motion designers, smm specialists, project managers and an accountant.' : 'программисты, разработчики, СЕО специалисты, дизайнеры, моушен дизайнеры, СММ специалисты, проект менеджеры и бухгалтер.'}
                    </p>
                    </p>
                </div>
            </div>
            <div className="banner_img_team">
                <img src={colors ? Banner : Banner3} alt="" className="teamBanner" />
                <img src={colors ? Banner2 : Banner4} alt="" className="teamBanner1"  />
            </div>

        </div>
    )
}

export default BannerTeam
