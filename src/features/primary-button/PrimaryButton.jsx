import React from 'react'
import './PrimaryButton.css';

const PrimaryButton = ({children}) => {

    return (
    <button className = "button--primary">{children}</button>
    )
}

export default PrimaryButton