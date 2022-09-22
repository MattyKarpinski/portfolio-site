
import { useState } from 'react';
import './NavBar.css';
import Logo from '../../assets/logo.svg';
import PrimaryButton from '../../features/primary-button/PrimaryButton';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { NavBarData } from './NavBarData';
import NavBarItem from './NavBarItem';
import LinkCv from '../../features/link-cv/LinkCv';

const NavBar = () => {

  const [click, setClick] = useState(false);

  const openMobileMenu = () => setClick(true);
  const closeMobileMenu = () => setClick(false);


  return (
    <section id='navigation'>
      <div className='nav-bar'>
        <img src={Logo} alt="Logo" />
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

            {NavBarData.map((item, index) => {
              return (
                <NavBarItem data={item} key={index}></NavBarItem>
              )
            })}

          </ul>
        </nav>
        <LinkCv className='nav-bar__CV'>
            <PrimaryButton>Download CV</PrimaryButton>
        </LinkCv>
      </div>
    </section>
  )
};

export default NavBar;