import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'

function Alert({data, colors}) {

    const state = useContext(GlobalState)
    const [language] = state.postAPI.language

    const style ={
        zIndex: data ? '99' : '-1',
        background: colors ? "#1ABC9C" : "gold",
        color: colors ? "white" : "black"
    }
    return (
        <div className='alert_box' style={style}>
            <div className='container_alert'>
                <div>
                    <h2>{language ? 'Send you message' : 'Ваша сообщение успешно отправлено'}</h2>
                </div>
                <div>
                    <Link to='/'>
                        {language ? 'Home' : 'Главная'}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Alert
