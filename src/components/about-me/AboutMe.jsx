import React from 'react';
import Paragraph from '../../features/paragraph/Paragraph';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <div className='container'>
        <h2>About me</h2>
        <Paragraph>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dolor
           neque, gravida ut dapibus. Auctor amet, sem pellentesque dui, eu
           phasellus cursus dolor in. Velit, donec fermentum amet amet nunc nunc.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dolor
           neque, gravida ut dapibus. Auctor amet, sem pellentesque dui, eu
           phasellus cursus dolor in. Velit, donec fermentum amet amet nunc nunc.
        </Paragraph>
        <Paragraph>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dolor
           neque, gravida ut dapibus. Auctor amet, sem pellentesque dui, eu
           phasellus cursus dolor in. Velit, donec fermentum amet amet nunc nunc.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dolor
           neque, gravida ut dapibus. Auctor amet, sem pellentesque dui, eu
           phasellus cursus dolor in. Velit, donec fermentum amet amet nunc nunc.
        </Paragraph>
        <h3>Speciality</h3>
        <ul className='about-me__speciality'>
          <li>
            <div>
              <h4>Lorem ipsum</h4>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                dolor neque, gravida ut dapibus. Auctor amet, sem pellentesque dui,
                eu phasellus cursus dolor in. 
              </Paragraph>
            </div>
          </li>
          <li>
          <div>
              <h4>Lorem ipsum</h4>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                dolor neque, gravida ut dapibus. Auctor amet, sem pellentesque dui,
                eu phasellus cursus dolor in. 
              </Paragraph>
            </div>
          </li>
          <li>
          <div>
              <h4>Lorem ipsum</h4>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                dolor neque, gravida ut dapibus. Auctor amet, sem pellentesque dui,
                eu phasellus cursus dolor in. 
              </Paragraph>
            </div>
          </li>
        </ul>
        <h3>Stack</h3>
        <ul className='about-me__stack'>
          <li className='l1'>
            <i>dfs</i>
            <span>HTML</span>
          </li>
          <li className='l2'>
            <i>dfs</i>
            <span>CSS</span>
          </li>
          <li>
            <span>React</span>
          </li>
          <li>
            <span>JavaScript</span>
          </li>
          <li>
            <span>TypeScript</span>
          </li>
          <li>
            <span>Meterial UI library</span>
          </li>
          <li>
            <span>VS Code</span>
          </li>
          <li>
            <span>Figma</span>
          </li>
          <li>
            <span>Adobe XD</span>
          </li>
          <li>
            <span>Adobe Illustrator</span>
          </li>
          <li>
            <span>Microsoft Office</span>
          </li>
        </ul>
        <h3>My Goals</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dolor
          neque, gravida ut dapibus. Auctor amet, sem pellentesque dui, eu
          phasellus cursus dolor in. Velit, donec fermentum amet amet nunc nunc.
          Nisi placerat mi dolor, etiam posuere sodales.
        </p>
      </div>
    </section>
  )
}

export default AboutMe