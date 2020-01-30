import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const Nav = ()=>{
    return(

                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to='/'>Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/favs'>Favorites</Link>
                    </li>
                </ul>

    )
}

export default Nav