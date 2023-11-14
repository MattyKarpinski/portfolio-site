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
            With over three years of experience as a Junior SEO Specialist in an English-speaking environment, my professional journey has been dedicated to crafting tailored solutions for the dynamic markets of the USA and UK. Over this period, I have successfully implemented and managed optimization strategies for approximately 200 websites. My primary focus has been on elevating search results and enhancing conversion rates, particularly within the realm of online shops. I have played a pivotal role in training and supporting team members, ensuring a seamless onboarding process for newcomers to the company. As a professional committed to continuous growth, I actively explore various disciplines such as Frontend Development, SEO, and User Experience, with the ultimate goal of becoming a versatile expert in the ever-evolving digital landscape.
          </Paragraph>
          <Paragraph>
            In addition to my SEO proficiency, I possess a keen interest in User Experience and have developed the ability to create websites on WordPress. My commitment to being a well-rounded professional has driven me to explore diverse fields such as Frontend Development. My ultimate goal is to evolve into a versatile expert, often referred to as a "Unicorn" in the digital landscape.  
          </Paragraph>
          <Paragraph>
            Beyond professional endeavors, I foster a positive and approachable demeanor on a day-to-day basis. Colleagues can easily approach me not only for work-related discussions but also for a friendly chat, accompanied by a good cup of coffee. Outside of the digital realm, I indulge in the intricacies of technology, particularly the assembly of computers and advising on tech-related purchases.
          </Paragraph>
          <Paragraph>
            On a personal note, I find joy in collecting Funko Pop figures, including notable characters like The Witcher, Spiderman Miles Morales, and the iconic Boba Fett from Star Wars. Beyond these hobbies, I am also passionate about cycling, finding both serenity and adventure on two wheels. Whether exploring new trails or cycling through familiar routes, the freedom and exhilaration of cycling have become integral to my lifestyle. Additionally, my love for travel extends to discovering picturesque cycling routes in different parts of the world, adding a dynamic and health-conscious dimension to my explorations.
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
          In terms of professional development, my focus lies in advancing my skills in JavaScript and the React framework. However, I'm equally intrigued by the profound advancements in AI. As the AI landscape continues to evolve, my goal is to stay informed about the latest trends and breakthroughs in AI technologies, exploring their implications and potential applications. This curiosity serves as a driving force for my continuous learning journey, allowing me to stay attuned to the transformative possibilities.
        </Paragraph>
      </div>
    </section>
  )
}

export default AboutMe