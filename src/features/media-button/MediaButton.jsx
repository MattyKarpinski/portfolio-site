import React from 'react'
import './MediaButton.css';

const MediaButton = ({children}) => {
  return (
    <button className='media-button'>
        <i>{children}</i>
    </button>
  )
}

export default MediaButton