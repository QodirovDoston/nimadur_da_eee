import React, {useContext} from 'react'

import {GlobalState} from '../../../GlobalState'
import ServicesItem from '../utils/servicesItem/servicesItem'

function Services() {

    const state = useContext(GlobalState)
    const [services] = state.servicesAPI.services
    const [isAdmin] = state.userAPI.isAdmin

    const [language] = state.postAPI.language
    const [colors] = state.postAPI.colors

    
    const button ={
        background: colors ? "#1ABC9C" : "gold",
        color: colors ? "white" : "black"
    }
    
    const bagckroungs ={
        background: colors ? "#FFF" : "#2A2A2A",
        color: colors ? "black" : "white"
    }
    const borders ={
        border: `1px solid ${colors ? "#1ABC9C" : "gold"}`,
        color:  colors ? "black" : "white"
    }


    return (     
        <div className="services" style={bagckroungs}>
            <div className="heading">
                <h2 style={bagckroungs}>
                {language ? 'services' : 'УСЛУГИ'}
                </h2>
                <p>
                {language ? 'We provide IT services for your business' : 'Мы предоставляем IT услуги для вашего бизнеса'}
                </p>
            </div>
            <div className="services_container config">
                {
                    services.map(category =>{
                    return <ServicesItem key={category._id} category={category} language={language}
                    isAdmin={isAdmin} buttonStyle={button} bagckroungs={bagckroungs} borders={borders} />
                })
                }
            </div>
            
        </div>
    )
}

export default Services
