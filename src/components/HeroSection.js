import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-3.mp4' autoPlay loop muted />
        <h1>WELCOME TO CYBER GUARDIAN</h1>
        <p></p>
        <div className='hero-btns'>
          <Button 
            className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'> 
              LEARNING-PATHS
          </Button>
          <Button 
            className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'> 
              ARTICLES
          </Button>
          <Button 
            className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'> 
              GAMES
          </Button>

          {/* <Button 
            className='btns' 
            buttonStyle='btn--primary' 
            buttonSize='btn--large'
            onClick={console.log('HelloWorld')}
          > 
            TEST2 <i className='far fa-play-circle' />
          </Button> */}
        </div>
    </div>
  );
}

export default HeroSection;
