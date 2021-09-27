import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection: React.FC = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer id="home"> 
      <HeroBg>
        <VideoBg autoPlay loop muted typeof="video/mp4" src={Video}/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 dollars 
          in credit towards your 
          next payment.  
        </HeroP>
        <HeroBtnWrapper>
          <Button 
            to="signup" 
            primary={true} 
            dark={true} 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            >
            Get Started {hover? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;