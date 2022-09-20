import React from 'react';
import './Paragraph.css';

const Paragraph = ({children}) => {
  return (
    <p className='main-text'>{children}</p>
  )
}

export default Paragraph