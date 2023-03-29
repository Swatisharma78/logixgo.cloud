import { Container } from '@chakra-ui/react';
import React from 'react'
import Abouts from '../Abouts';
import Whatwedo from '../Whatwedo';
import Marketing from '../Marketing';

const About = () => {
  return (
  
    <div id='about'>
      <Abouts/>
      <Whatwedo/>
      <Marketing/>
    </div>
  )
}

export default About;
