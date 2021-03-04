import React from 'react'
import '../../style/Header/sidenav.scss'
import { NavLink } from "react-router-dom";
import brand from '../../assets/images/success_logo_green.png';
const sidenav = ({closeNav}) => {
    
    
    return (
        <div id="mySidenav" className="sidenav" onClick={closeNav}>
        <div className='brand-holder'>
             <img src={brand} className="img-fluid" alt="Responsive" />
        </div>
        
            <NavLink to='/b' >Manage Associate</NavLink>
            <NavLink to='/c' >Manage A</NavLink>
            <NavLink to='/d' >Manage B</NavLink>
            <NavLink to='/e' >Manage C</NavLink>
        </div>
    )
}

export default sidenav
