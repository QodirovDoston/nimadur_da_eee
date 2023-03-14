import React from 'react'
import { Link } from 'react-router-dom'

function Panels() {
   
    return (
        <div className="admin_panel">
           <ul>
               <li>
                    <Link to="/create_category">Create Category</Link>
               </li>
               <li>
                    <Link to="/create_post">Create Elements</Link>
               </li>
               <li>
                    <Link to="/create_services">Create Services</Link>
               </li>
               <li>
                    <Link to="/create_team"> Create Team </Link>
               </li>
               <li>
                    <Link to="/create_blogs"> Create Blogs </Link>
               </li>
               <li>
                    <Link to="/create_message_img"> Create Message </Link>
               </li>
               <li>
                    <Link to="/client_create"> Create Clients </Link>
               </li>
               <li>
                    <Link to="/update_category">Update Category</Link>
               </li>
               <li>
                    <Link to="/update_post">Update Post</Link>
               </li>
               <li>
                    <Link to="/services"> Update Services </Link>
               </li>
               <li>
                    <Link to="/our_team_update"> Update Teams </Link>
               </li>
               <li>
                    <Link to="/blogs"> Update Blogs </Link>
               </li>
               <li>
                    <Link to="/update_message"> Update Message </Link>
               </li>
               <li>
                    <Link to="/update_clients"> Update Clients </Link>
               </li>
               <li>
                    <Link to="/create_admin">Create Admin</Link>
               </li>
               <li>
                    <Link to="/all_users">All Users</Link>
               </li>
           </ul>
        </div>
    )
}

export default Panels
