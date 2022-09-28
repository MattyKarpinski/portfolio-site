import React from 'react'
import './PrimaryButton.css';

const PrimaryButton = ({className, children}) => {

    return (
    <button className = {`button--primary ${className}`}>{children}</button>
    )
}

export default PrimaryButton