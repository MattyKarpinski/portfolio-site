import React from 'react';
import NavBar from './components/nav-bar/NavBar';
import Hero from './components/hero/Hero';
import AboutMe from './components/about-me/AboutMe';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import OtherInfo from './components/other-info/OtherInfo';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Resume></Resume>
      <OtherInfo></OtherInfo>
      <Contact></Contact>
    </>
  )
}

export default App

