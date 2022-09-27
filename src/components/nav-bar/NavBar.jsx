
import { useState } from 'react';
import './NavBar.css';
import Logo from '../../assets/logo.svg';
import PrimaryButton from '../../features/primary-button/PrimaryButton';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import LinkCv from '../../features/link-cv/LinkCv';
import { NavBarData } from './NavBarData';



const NavBar = () => {

  const [click, setClick] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const openMobileMenu = () => setClick(true);
  const closeMobileMenu = () => setClick(false);

  const changeNavBar = () => {
    if(window.scrollY >= 10) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  };

  window.addEventListener('scroll', changeNavBar)

  return (

      <div className={navBar ? 'navbar active' : 'navbar'}>
        <a href="/" className='logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <nav>
          <div className='menu__open-section'>
            <i onClick={openMobileMenu}><FaBars></FaBars></i>
          </div>
          <ul className={click ? 'nav-menu nav-active' : 'nav-menu'}>
            <li className='menu_mobile-section'>
                <span className='menu-name'>MENU</span>
                <div>
                  <i className='menu__close-icon' onClick={closeMobileMenu}><IoMdClose></IoMdClose></i>
                </div>
            </li>

            {NavBarData.map((data) => {
              return (
                <li className={data.cName}>
                  <a href={data.path} onClick={closeMobileMenu}>
                    {data.name}
                  </a>
                </li>
              ) 
            })}

          </ul>
        </nav>
        <LinkCv className='nav-bar__CV'>
            <PrimaryButton>Download CV</PrimaryButton>
        </LinkCv>
      </div>

  )
};

export default NavBar;