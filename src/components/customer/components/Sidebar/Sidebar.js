import "./sidebar.css"
import { Link } from 'react-router-dom'
import React, {useContext} from "react";


function Sidebar(props) {
    return(
        <div className="sidebar">
            <h6>welcome user</h6>
            <ul class="list-group">
                <li class="list-group-item">Profile</li>
                <li class="list-group-item">Settings</li>
                <li class="list-group-item"><Link to={props.urlRegister}>Register</Link></li>
                <li class="list-group-item"><Link to={props.urlSignin}>sign in</Link></li>
                <li class="list-group-item">signout</li>
            </ul>
        </div>
    )
}

export default Sidebar;