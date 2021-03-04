import React, {useState} from 'react'
import LoginPage from './login'
import Header from '../../components/header/header';
import SideNav from '../../components/header/sidenav';
import Backdrop from '../../components/backdrop';
const Account = () => {
    const [isShow, setIsShow] = useState(false);
    
    const toggleShow = () => {
      const sideNav = document.getElementById("mySidenav");
      const navBar = document.getElementById("myNavbar");
      const backdrop = document.getElementById('myBackdrop');
      setIsShow(prev => prev = !prev)
      if(isShow) {
        sideNav.style.width = "250px";
        navBar.style.marginLeft = "250px";
        backdrop.style.visibility = 'unset';
      } else {
        sideNav.style.width = "0";
        navBar.style.marginLeft = "0";
        backdrop.style.visibility = 'hidden';
      }
      
    }

    
    
    return (
        <div>
            <Header openNav={() => toggleShow() } />
            <SideNav closeNav={() => toggleShow()} />
            <LoginPage />
            <Backdrop />
        </div>
    )
}

export default Account
