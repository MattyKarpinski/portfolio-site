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
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dolor
           neque, gravida ut dapibus. Auctor amet, sem pellentesque dui, eu
           phasellus cursus dolor in. Velit, donec fermentum amet amet nunc nunc.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dolor
           neque, gravida ut dapibus. Auctor amet, sem pellentesque dui, eu
           phasellus cursus dolor in. Velit, donec fermentum amet amet nunc nunc.
        </Paragraph>
      </div>
    </section>
  )
}

export default AboutMe