
import { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg';
import CV from '../../assets/Eng-CV-Mateusz-Karpinski.pdf';
import PrimaryButton from '../../features/primary-button/PrimaryButton';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Header = () => {

  const [click, setClick] = useState(false);

  const openMobileMenu = () => setClick(true);
  const closeMobileMenu = () => setClick(false);


  return (
    <section className='container'>
      <div className='header'>
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
            <li>
              <a href="#about-me" onClick={closeMobileMenu}>About Me</a>
            </li>
            <li>
              <a href="#projects" onClick={closeMobileMenu}>Projects</a>
            </li>
            <li>
              <a href="#projects" onClick={closeMobileMenu}>Resume</a>
            </li>
            <li>
              <a href="#stack" onClick={closeMobileMenu}>Other</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            </li>
          </ul>
        </nav>
        <a className='my-cv' href={CV} download = 'CV Mateusz Karpiński'>
          <PrimaryButton>Download CV</PrimaryButton>
        </a>
      </div>
    </section>
  )
};

export default Header;