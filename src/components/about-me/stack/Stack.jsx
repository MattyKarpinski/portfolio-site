import React from 'react';
import './Stack.css';
import { Icon } from '@iconify/react';

const Stack = ({item}) => {
  return (
    <li className='stack-item'>
        <i className='stack-item__icons'>
          <Icon icon={item.icon} color={item.color} className='stack-item__icon'></Icon>
        </i>
        <span>{item.name}</span>
    </li>
  )
}

export default Stack