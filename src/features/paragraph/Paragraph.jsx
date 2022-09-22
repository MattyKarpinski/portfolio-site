import React from 'react';
import './Paragraph.css';

const Paragraph = ({children, className}) => {
  return (
    <p className={`main-text ${className}`}>{children}</p>
  )
}

export default Paragraph