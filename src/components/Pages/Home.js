import { Container } from '@chakra-ui/react'
import React from 'react'
import Welcome from '../Welcome'
import Whychooseus from '../Whychooseus'
import Mission from '../Mission'

const Home = () => {
  return (
    <div id='home'>
        <Welcome/>
        <Whychooseus/>
        <Mission/>
    </div>
  )
}

export default Home
