import React from 'react';
import './Hero.css';
import PrimaryButton from '../../features/primary-button/PrimaryButton';
import MediaButton from '../../features/media-button/MediaButton';
import { AiFillGithub } from 'react-icons/ai';
import { RiLinkedinLine } from 'react-icons/ri';
import Paragraph from '../../features/paragraph/Paragraph';


const Hero = () => {
  
  return (
    <section className='container'>
      <div className='hero__info'>
        <div className='hero_info-description'>
          <h2>Hey there,</h2>
          <h1>I'm Mateusz</h1>
          <Paragraph>I'm Frontened Developer, SEO Specialist and UX Designer</Paragraph>
        </div>
        <div className='hero_info-my-photo'>
          <div className='hero_info-left-dots'></div>
          <div className='hero_info-right-dots'></div>
        </div>
      </div>
      <a className = 'send-mail' href="mailto:mateusz1836@gmail.com">
        <PrimaryButton>Let's talk</PrimaryButton>
      </a>
      <div className="hero__media">
        <span>Check Out My:</span>
        <div className="hero__media-buttons">
          <a href ="https://github.com/MattyKarpinski" target = "_blank" rel = 'noreferrer'>
            <MediaButton>
              <AiFillGithub></AiFillGithub>
            </MediaButton>
          </a>
          <a href="https://www.linkedin.com/in/MattyKarpinski/" target = "_blank" rel='noreferrer'>
            <MediaButton>
              <RiLinkedinLine></RiLinkedinLine>
            </MediaButton>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero