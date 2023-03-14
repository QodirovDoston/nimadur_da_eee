import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import { GlobalState } from '../../GlobalState'

import HomePage from './mainPage/MainPage'
import Admin from './AdminRouter/Panels'
import UpdatePost from './AdminRouter/update_post'
import UpdateCategory from './AdminRouter/Update_category'
import Login from './auth/Login'
import Register from './auth/Register'
import CreatePost from './createPost/CreatePost'
import CreateCategory from './createCtegory/CreateCategory'
import NotFound from './utils/notFound/NotFound'
import UserInfo from './userPanel/panel'
import UserEdit from './HeaderAdmin/UsersGet'
import CreateClient from './createClients/createClients'
import Teams from './createTeam/createTeamPost'
import CreateServices from './createServices/createServices'
import Ordered from './order/Order'
import Services from './services/Services'
import OurTeams from './createTeam/TeamPage'
import GetBlogs from './blogs/getBlogs'
import PortfolioPage from './portfolio/Portfolio'
import UpdateTeams from './createTeam/getTeam'
import CreateBlogs from './blogs/create_blogs'
import AboutPage from './about/aboutPage'
import CreateMessage from './createClientMessage/clientMessage'
import UpdateMessage from './mainPage/contactClients'
import UpdateClients from './mainPage/sovmestmiy'

function Pages() {

    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [isBoss] = state.userAPI.isBoss

    return (
        <Switch>
            <Route path='/' exact component = {isAdmin || isBoss ? Admin : HomePage} />
            
            <Route path='/create_category' exact component = {isAdmin || isBoss ? CreateCategory :  NotFound} />
            <Route path='/create_post' exact component = {isAdmin || isBoss ? CreatePost :  NotFound} />
            <Route path='/create_services' exact component = {isAdmin || isBoss ? CreateServices :  NotFound} />
            <Route path='/client_create' exact component = {isAdmin || isBoss ? CreateClient : NotFound} />
            <Route path='/client_create/:id' exact component = {isAdmin || isBoss ? CreateClient : NotFound} />
            <Route path='/create_message_img' exact component = {isAdmin || isBoss ? CreateMessage : NotFound} />
            <Route path='/create_team' exact component = {isAdmin || isBoss ? Teams : NotFound} />

            <Route path='/update_post' exact component = {isAdmin || isBoss ? UpdatePost :  NotFound} />
            <Route path='/update_category' exact component = {isAdmin || isBoss ? UpdateCategory :  NotFound} />
            <Route path='/edit_post/:id' exact component = {isAdmin || isBoss ? CreatePost : NotFound} />
            <Route path='/create_blogs/:id' exact component = {isAdmin || isBoss ? CreateBlogs : NotFound} />
            <Route path='/our_team_update/:id' exact component = {isAdmin || isBoss ? Teams : NotFound} />
            <Route path='/update_message/:id' exact component = {isBoss || isAdmin ? CreateMessage : NotFound} />
            <Route path='/create_services/:id' exact component = {isAdmin || isBoss ? CreateServices :  NotFound} />
            <Route path='/create_category/:id' exact component = {isAdmin || isBoss ? CreateCategory :  NotFound} />

            <Route path='/all_users' exact component = {isAdmin ? UserEdit : NotFound} />
            <Route path='/our_team_update' exact component = {isAdmin || isBoss ? UpdateTeams : NotFound} />
            <Route path='/create_blogs' exact component = {isAdmin || isBoss ? CreateBlogs : NotFound} />
            <Route path='/update_message' exact component = {isBoss || isAdmin ? UpdateMessage : NotFound} />
            <Route path='/update_clients' exact component = {isBoss || isAdmin ? UpdateClients : NotFound} />
            
            <Route path='/ordered' exact component = {Ordered} />
            <Route path='/services' exact component = {Services} />
            <Route path='/our_team' exact component = {OurTeams} />
            <Route path='/blogs' exact component = {GetBlogs} />
            <Route path='/about' exact component = {AboutPage} />
            <Route path='/portfolio' exact component = {PortfolioPage} />
            
            <Route path='/infor/:id' exact component = {isLogged ? UserInfo : NotFound} />
            <Route path='/create_admin' exact component = {isAdmin ? Register : NotFound} />
            <Route path='/register' exact component = {!isAdmin ? NotFound : Register} />
            <Route path='/login' exact component = {isLogged ? NotFound : Login} />

            <Route path='*' exact component = {NotFound} />
        </Switch>
    )
}

export default Pages
