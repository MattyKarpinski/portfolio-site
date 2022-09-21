import React from 'react'
import CV from '../../assets/Eng-CV-Mateusz-Karpinski.pdf';

const LinkCv = ({children, className}) => {

  return (
    <a href={CV} className={`${className}`} download = 'CV Mateusz Karpiński'>{children}</a>
  )
}

export default LinkCv