import React from 'react';
import Paragraph from '../../features/paragraph/Paragraph';
import './Resume.css';

const Resume = () => {
  return (
    <section id='resume'>
      <div className='resume__container container'>
        <h2>Resume</h2>
        <div className='resume-items'>
          <div className='resume-item'>
            <h3>Job experience</h3>
              <ul className='resume-item__list'>
                <li className='resume-item__line'>
                  <span>10.2020 - 07.2022</span>
                  <Paragraph>Junior SEO Specialist WeNet Group S.A.</Paragraph>
                </li>
                <li className='resume-item__line'>
                  <span>10.2020 - 06.2021</span>
                  <Paragraph>Białystok University of Technology Managment and Production of Engineering, Master degree.</Paragraph>
                </li>
                <li className='resume-item__line'>
                  <span>09.2017</span>
                  <Paragraph>Białystok University of Technology Managment and Production of Engineering, Engineer degree.</Paragraph>
                </li>
              </ul>
          </div>
          <div className='resume-item'>
            <h3>Education Quality</h3>
            <ul className='resume-item__list'>
              <li className='resume-item__line'>
                <span>2020 - 2021</span>
                <Paragraph>Białystok University of Technology User experience design and internet analytics, Postgraduate studies.</Paragraph>
              </li>
              <li className='resume-item__line'>
                <span>2018 - 2020</span>
                <Paragraph>Białystok University of Technology Managment and Production of Engineering, Master degree.</Paragraph>
              </li>
              <li className='resume-item__line'>
                <span>2014 - 2018</span>
                <Paragraph>Białystok University of Technology Managment and Production of Engineering, Engineer degree.</Paragraph>
              </li>
            </ul>
          </div>
          <div className='resume-item'>
            <h3>Additional courses and certificates</h3>
            <ul className='resume-item__list'>
              <li className='resume-item__line'>
                <span>05.2022 - 06.2022</span>
                <Paragraph>Product Design Level UP DaftCode, El Passion.</Paragraph>
              </li>
              <li className='resume-item__line'>
                <span>11.2021 - 12.2021</span>
                <Paragraph>Product Design Beginners DaftCode, El Passion.</Paragraph>
              </li>
            </ul>
          </div>
          <div className='resume-item'>
            <h3>Education Abroad</h3>
            <ul className='resume-item__list'>
              <li className='resume-item__line'>
                <span>09.2018- 06.2019</span>
                <Paragraph>Student, Polytechnic Institute of Viana do Castelo, Portugal, Program Erasmus+</Paragraph>
              </li>
              <li className='resume-item__line'>
                <span>07.2017</span>
                <Paragraph>Student, Summer School, Zhejiang University Ningbo Institute  of Technology, China</Paragraph>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume