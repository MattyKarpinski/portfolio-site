import React from 'react';

const Stack = ({item}) => {
  return (
    <li>
        <i>{item.icon}</i>
        <span>{item.name}</span>
    </li>
  )
}

export default Stack