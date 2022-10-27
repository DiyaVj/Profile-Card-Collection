import React from 'react';
import './style.css';
import image from './images/profile.png'

function Header(props) {
    const myDetails = 
        {
            name: 'Pradnya Haval',
            age: 23,
            role: 'Software Engineer'
        }
    

    return (       
        <div className='header'>
            
            <div className='left-header'>
                <img className='profile-img' src={image} alt='profile-img'/>
            </div>
            <div className='right-header'>
                <h2>{myDetails.name}</h2>
                <h3>{myDetails.role}</h3>
            </div>
            
            
        </div>
    )
}

export default Header
