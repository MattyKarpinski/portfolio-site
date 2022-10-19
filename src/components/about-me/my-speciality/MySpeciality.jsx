import React from 'react'
import Paragraph from '../../../features/paragraph/Paragraph'

const styleItem = {
    maxWidth: '550px',
    width: '100%',
    height: 'auto',
    border: '3px solid var(--color-secondary)',
    borderRadius: '50px',
};

const styleItemBody = {
    padding: '16px 16px',
};

const MySpeciality = ({props}) => {
  return (
    <li className='my-speciality__item' style={styleItem}>
        <div style={styleItemBody}>
            <h4>{props.title}</h4>
            <Paragraph>{props.text}</Paragraph>
        </div>
    </li>
  )
}

export default MySpeciality