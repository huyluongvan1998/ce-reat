import React from 'react'

import '../../style/Header/header.scss';

const Header = ({openNav}) => {



    return (
        <div id='myNavbar' className='myNavbar'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-light" >
                <ul className="navbar-nav ">
                    <li className="nav-item icon">
                        <i className="fa fa-bars" aria-hidden="true" onClick={openNav}></i>
                    </li> 
                    <li className="nav-item">
                        <h2>Evaluate Dependency</h2>
                    </li> 
                </ul>
                        

                </nav>
        </div>
    )
}

export default Header
