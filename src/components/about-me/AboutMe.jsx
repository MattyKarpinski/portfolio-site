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
            Most recently, I worked as a Junior SEO Specialist for two years. During 
            this time I dealt with around 200 websites. In most cases, I wrote up strategies
            with modifications to be implemented in order to improve search results and 
            conversions, especially for online shops. In specific cases, I manually 
            modified CMS such as WordPress, Joomla, etc., also using an FTP connection.
            I have also, on occasion, provided training for the team and, following the
            introduction of new people to the company, provided advice and long-term
            assistance when they had problems with a particular issue. 
          </Paragraph>
          <Paragraph>
            I try to be a multidisciplinary person because of the particularly wide range of
            fields that have a direct impact on the construction of digital products,
            especially their customisation for users. For this reason, I seek knowledge
            from various fields such as Frontend Development, SEO or User Experience.
            Maybe one day I will manage to become the proverbial "Unicorn".  
          </Paragraph>
          <Paragraph>
            On a day-to-day basis, I'm a very cheerful person, you can always just come to 
            me to talk, not only about your current duties, but also to have a tasty coffee 
            and a joke to make your time more pleasant. I really like to deal with technology 
            related to the construction of computers, new components. From time to time, at 
            the request of a friend, I select components and assemble PC or advise on the 
            purchase of a laptop. I have started collecting Funko Pop figures, at the moment 
            I have The Witcher, Spiderman Miles Morales and my latest acquisition Boba Fett 
            from the Star Wars series. In my spare time I enjoy travelling in terms of 
            sightseeing and exploring the soul of cities. My biggest trip was to China, the 
            longest was to Portugal for a year, and my last vacation was four Italian cities.
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