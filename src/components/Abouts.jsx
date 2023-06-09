import React from 'react'
import {
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import './About.css';
const Abouts = () => {
  return (
    <Stack className='aboutcss' minH={'60vh'} direction={{ base: 'column', md: 'row' }}>
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={6} w={'full'} maxW={'lg'}>
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: useBreakpointValue({ base: '20%', md: '30%' }),
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'blue.400',
              zIndex: -1,
            }}>
            About us
          </Text>
          <br />{' '}
          <Text color={'blue.400'} as={'span'}>
            Who we are
          </Text>{' '}
        </Heading>
        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
        logixgo is a startup company founded in 2020 in Bangalore. Our team is build-up with Smart and 
Talented people that are passionate and 100% dedicated to their work. 
        </Text>
        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
        After years of experience in this market, our team has built a platform where clients can meet all 
kinds of services in one place.
        </Text>
        <div className='ulmain'>
        <ul className='ul'>
          <li className='li'>Success Project </li>
          <li className='li'>Leads Delivered </li>
          <li className='li'>Our Services</li>
        </ul>
        </div>
      </Stack>
    </Flex>
    <Flex flex={1}>
      <Image
        alt={'Login Image'}
        objectFit={'cover'}
        src={
          'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
      />
    </Flex>
  </Stack>

  );
}


export default Abouts;