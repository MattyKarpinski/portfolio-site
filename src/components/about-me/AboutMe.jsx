import React from 'react';
import Paragraph from '../../features/paragraph/Paragraph';
import './AboutMe.css';
import MySpeciality from './my-speciality/MySpeciality';
import { MySpecialityData } from './my-speciality/MySpecialityData';
import Stack from './stack/Stack';
import { StackItems } from './stack/StackItems';

const AboutMe = () => {
  return (
    <section id='about-me' >
      <div className='about-me__container container'>
        <h2>About me</h2>
        <div className='about-me__text-box'>
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
        </div>
        <h3>Speciality</h3>
        <ul className='about-me__speciality'>
          {MySpecialityData.map((item, index) => {
            return (
              <MySpeciality props={item} key={index}></MySpeciality>
            )
          })}
        </ul>
        <h3>Stack</h3>
        <ul className='about-me__stack'>
          {StackItems.map((item, index) => {
            return (
              <Stack item={item} key={index}></Stack>
            )
          })}

        </ul>
        <h3>My Goals</h3>
        <Paragraph className='about-me__text-box'>
          My main goal for the near future is to improve my skills based on JavaScript and
          the React framework. However, I'm open to learning different technologies
          depending on what challenges I will be presented with during projects. I'm
          very curious about the latest revolutions that blockchain technology and 
          web 3.0 will bring in the near future, so I plan to explore this issue more
          and learn libraries focused on this, such as web3.js and ether.js. 
        </Paragraph>
      </div>
    </section>
  )
}

export default AboutMe