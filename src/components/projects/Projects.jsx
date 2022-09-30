import React from 'react';
import Paragraph from '../../features/paragraph/Paragraph';
import PrimaryButton from '../../features/primary-button/PrimaryButton';
import './Projects.css';
import FurnitureSite from '../../assets/furniture-site-photo.jpg';
import SegreApp from '../../assets/segre-app-photo.jpg';
import { Icon } from '@iconify/react';

const Projects = () => {
  return (
    <section id='projects'>
      <div className='projects__container container'>
        <h2>Projects</h2>
        <Paragraph>
          Below I would like to present my latest projects. I warmly invite you to take a 
          closer look at them. Especially for this, the possibility of checking out their
          full published versions has been added. For the more inquisitive, there is an
          option to check the source code. In some cases, you can also check out the mockups. 
        </Paragraph>
        <div className='projects-items'>
          <div className='projects-items__item'>
            <img src={FurnitureSite} alt="Furniture site" />
            <div className='projects-items__info'>
              <Paragraph>
                "Furniture-zone" - The project aimed to create a fully functional website designed for business
                people. In this case it was based on a carpentry business. The site was
                divided into several thematic tabs presenting the company's offer, including
                job offers or contact forms.
              </Paragraph>
              <span>Technology:</span>
              <div className='projects-items__info-icons'>
                <Icon icon="logos:javascript" className='projects-items__icon'/>
                <Icon icon="logos:react" className='projects-items__icon' />
                <Icon icon="vscode-icons:file-type-html" className='projects-items__icon' />
                <Icon icon="vscode-icons:file-type-css" className='projects-items__icon' />
                <Icon icon="simple-icons:mui" color="#007fff" className='projects-items__icon' />
              </div>
              <div className='projects-items__info-buttons'>
                <a href="https://furniture-zone.netlify.app/" target='_blank' rel='noreferrer'>
                  <PrimaryButton>Live</PrimaryButton>
                </a>
                <a href="https://github.com/MattyKarpinski/furniture-site" target='_blank' rel='noreferrer'>
                  <PrimaryButton>GitHub</PrimaryButton>
                </a>
              </div>
            </div>
          </div>
          <div className='projects-items__item'>
            <img src={SegreApp} alt="Furniture site" />
            <div className='projects-items__info'>
              <Paragraph>
                "Segre-App" - The project was created by a team as part of completing UX postgraduate studies.
                 Its aim was to design a digital product based on the problem of waste segregation.
                 The link also includes the design tools used.
              </Paragraph>
              <span>Technology:</span>
              <div className='projects-items__info-icons'>
                <Icon icon="logos:figma" className='projects-items__icon' />
              </div>
              <div className='projects-items__info-buttons'>
                <a href="https://www.figma.com/file/jYPWNpINaKEj7pbfhpoIqx/Untitled?node-id=0%3A1" target='_blank' rel='noreferrer'>
                  <PrimaryButton>Mock-up</PrimaryButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects