import React from 'react';
import Paragraph from '../../features/paragraph/Paragraph';
import './Contact.css';
import { BsTelephone } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { RiLinkedinLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { FaRegHeart } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact'>
      <footer className='footer__container container'>
        <h2>Contact With Me</h2>
        <Paragraph>
          My congratulations you have reached the end. Then you are probably interested
          in a collaboration. Don't wait any longer just contact me. 
        </Paragraph>
        <span>Just do it!</span>
        <ul className='footer__media-contact'>
          <li className='footer__media-line'>
            <div className='footer__icon'>
              <i>
                <BsTelephone></BsTelephone>
              </i>
            </div>
            <a href="tel:+48-696-769-767">+48 696-769-767</a>
          </li>
          <li className='footer__media-line'>
            <div className='footer__icon'>
              <i>
                <AiOutlineMail></AiOutlineMail>
              </i>
            </div>
            <a href="mailto:mateusz1836@gmail.com">mateusz1836@gmail.com</a>
          </li>
          <li className='footer__media-line'>
            <div className='footer__icon'>
              <i>
                <AiFillGithub></AiFillGithub>
              </i>
            </div>
            <a href ="https://github.com/MattyKarpinski" target = "_blank" rel = 'noreferrer'>
              github.com/MattyKarpinski
            </a>
          </li>
          <li className='footer__media-line'>
            <div className='footer__icon'>
              <i>
                <RiLinkedinLine></RiLinkedinLine>
              </i>
            </div>
            <a href="https://www.linkedin.com/in/MattyKarpinski/" target = "_blank" rel='noreferrer'>
              linkedin.com/in/MattyKarpinski
            </a>
          </li>
        </ul>
      </footer>
      <div className='footer__signature'>
        <span>Made with <i><FaRegHeart></FaRegHeart></i> by <a href="#">MK</a> 2022</span>
      </div>
    </section>
  )
}

export default Contact