import React from 'react';
import './style.css';

function Footer(props) {
  return (
    <div className='footer'>
      <div className='column'><button onClick={() => props.FooterHandler('about')}>ABOUT</button></div>
      <div className='column'><button onClick={() => props.FooterHandler('education')}>EDUCATION</button></div>
      <div className='column'><button onClick={() => props.FooterHandler('contact')}>CONTACT</button></div>     
    </div>
  )
}

export default Footer
