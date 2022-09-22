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
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dolor
           neque, gravida ut dapibus. Auctor amet, sem pellentesque dui, eu
           phasellus cursus dolor in. Velit, donec fermentum amet amet nunc nunc.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dolor
           neque, gravida ut dapibus. Auctor amet, sem pellentesque dui, eu
           phasellus cursus dolor in. Velit, donec fermentum amet amet nunc nunc.
        </Paragraph>
        <div className='projects-items'>
          <div className='projects-items__item'>
            <img src={FurnitureSite} alt="Furniture site" />
            <div className='projects-items__info'>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dolor
                neque, gravida ut dapibus. Auctor amet, sem pellentesque dui, eu phasellus
                cursus dolor in.
              </Paragraph>
              <span>Technology:</span>
              <div className='projects-items__info-icons'>
                <Icon icon="vscode-icons:file-type-typescript-official" className='projects-items__icon'/>
                <Icon icon="logos:react" className='projects-items__icon' />
                <Icon icon="vscode-icons:file-type-html" className='projects-items__icon' />
                <Icon icon="vscode-icons:file-type-css" className='projects-items__icon' />
                <Icon icon="simple-icons:mui" color="#007fff" className='projects-items__icon' />
              </div>
              <div className='projects-items__info-buttons'>
                <a href="https://furniture-zone.netlify.app/" target='_blank' rel='noreferrer'>
                  <PrimaryButton>Link</PrimaryButton>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dolor
                neque, gravida ut dapibus. Auctor amet, sem pellentesque dui, eu phasellus
                cursus dolor in.
              </Paragraph>
              <span>Technology:</span>
              <div className='projects-items__info-icons'>
                <Icon icon="logos:figma" className='projects-items__icon' />
              </div>
              <div className='projects-items__info-buttons'>
                <a href="https://www.figma.com/file/jYPWNpINaKEj7pbfhpoIqx/Untitled?node-id=0%3A1" target='_blank' rel='noreferrer'>
                  <PrimaryButton>Link</PrimaryButton>
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