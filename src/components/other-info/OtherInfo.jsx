import React from 'react';
import './OtherInfo.css';

const OtherInfo = () => {
  return (
    <section id='other'>
      <div className='other__container container'>
        <h2>Other</h2>
        <div className='other-items'>
          <div className='other-item'>
            <h3>Languages</h3>
              <ul className='other-item__list'>
                <li className='other-item__line'>
                  <span className='other-item__line-item'>English</span>
                  <span>Communicative</span>
                </li>
                <li className='other-item__line'>
                  <span className='other-item__line-item'>French</span>
                  <span>Basic</span>
                </li>
                <li className='other-item__line'>
                  <span className='other-item__line-item'>Polish</span>
                  <span>Native</span>
                </li>
              </ul>
          </div>
          <div className='other-item'>
            <h3>Hobbies</h3>
              <ul className='other-item__list'>
                <li className='other-item__line'>
                  <span className='other-item__line-item'>Cycling</span>
                </li>
                <li className='other-item__line'>
                  <span className='other-item__line-item'>Technology</span>
                </li>
                <li className='other-item__line'>
                  <span className='other-item__line-item'>Gym</span>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherInfo