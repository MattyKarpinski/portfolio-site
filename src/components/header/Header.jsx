
import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg';
import CV from '../../assets/Eng-CV-Mateusz-Karpinski.pdf';
import PrimaryButton from '../../features/primary-button/PrimaryButton';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Header = () => {

  const [click, setClick] = useState(false);


  return (
    <section className='container'>
      <div className='header'>
        <img src={Logo} alt="Logo" />
        <nav>
          <div className='menu__open-icon' onClick={() => setClick(true)}>
            <i ><FaBars></FaBars></i>
          </div>
          <ul className={click ? 'nav-active' : 'nav-menu'}>
            <li className='menu-name'>
              <span>MENU</span>
              <div onClick={() => setClick(false)}>
                <i ><IoMdClose></IoMdClose></i>
              </div>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#projects">Resume</a>
            </li>
            <li>
              <a href="#stack">Other</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a href={CV} download = 'CV Mateusz Karpiński'>
          <PrimaryButton>Download CV</PrimaryButton>
        </a>
      </div>
    </section>
  )
}

export default Header