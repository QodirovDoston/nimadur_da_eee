import React, { useContext } from 'react'
import {GlobalState} from '../../../GlobalState'

import BannerInfo from './banner'
import Services from './services'
import Sovmestmiy from './sovmestmiy'
import Portfolio from './portfolio'
import ImportImages from './contactClients'
import Icons from './icons'

function Banner() {
    const state = useContext(GlobalState)
    const [language] = state.postAPI.language

    return (
        <div className="main_page">
            <BannerInfo languag={language} />
            <Services languag={language} />
            <Sovmestmiy languag={language} />
            <Portfolio languag={language} />
            <ImportImages />
            <Icons />
        </div>
    )
}

export default Banner
