import axios from 'axios'
import React, {createContext, useState, useEffect} from 'react'

import UserAPI from './api/UserAPI'
import CatigoriesAPI from './api/CatigoryAPI'
import PostAPI from './api/PostAPI'
import ServicesAPI from './api/ServicesAPI'
import OrderedAPI from './api/OrderAPI'
import Teams from './api/TeamPostAPI'
import Clients from './api/Clients'
import Blogs from './api/BlogsAPI'
import ClientsMessage from './api/ClientsAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)
    const [styles, setStyles] = useState(false)

    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')
        
                setToken(res.data.accesstoken)
    
                setTimeout(() =>{
                    refreshToken()
                },10 * 60 * 10000)
            }
            refreshToken()
        }
        
    },[])

    const state ={
        postAPI: PostAPI(),
        catigoriesAPI: CatigoriesAPI(),
        token: [token, setToken],
        userAPI: UserAPI(token),
        servicesAPI: ServicesAPI(),
        orderAPI: OrderedAPI(),
        teamPostAPI: Teams(),
        clientsAPI: Clients(),
        blogsAPI: Blogs(),
        clientsMessageAPI: ClientsMessage(),
        styles: [styles, setStyles]
    }


    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}