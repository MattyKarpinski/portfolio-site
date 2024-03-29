import React from 'react';
import './Hero.css';
import PrimaryButton from '../../features/primary-button/PrimaryButton';
import MediaButton from '../../features/media-button/MediaButton';
import { AiFillGithub } from 'react-icons/ai';
import { RiLinkedinLine } from 'react-icons/ri';
import Paragraph from '../../features/paragraph/Paragraph';
import LinkCv from '../../features/link-cv/LinkCv';
import Recommendation from '../../assets/recommendations-from-suso-digital.pdf';


const Hero = () => {
  
  return (
    <section className='container hero'>
      <div className='hero__info'>
        <div className='hero_info-description'>
          <h2>Hey there,</h2>
          <h1>I'm Mateusz</h1>
          <Paragraph>I'm Frontened Developer, SEO Specialist and UX Designer</Paragraph>
          <LinkCv className='hero__CV'>
            <PrimaryButton>Download CV</PrimaryButton>
          </LinkCv>
        </div>
        <div className='hero_info-my-photo'>
          <div className='hero_info-left-dots'></div>
          <div className='hero_info-right-dots'></div>
        </div>
      </div>
      <div className='hero_info-buttons'>
        <a className = 'send-mail' href="mailto:mateusz1836@gmail.com">
          <PrimaryButton>Let's talk</PrimaryButton>
        </a>
        <a className = 'check-recommendations' href={Recommendation} download='Recommendations Mateusz Karpiński'>
          <PrimaryButton>References</PrimaryButton>
        </a>
      </div>
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