import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,SimpleGrid,
    Heading,Text,Button
   } from '@chakra-ui/react'
import './Web.css';

const Web = () => {
  return (
    <>
    <div className='firstdiv'>
    <div className='perfectdiv'>
      
    <p className='para0' ><strong className='st'>Web design and development </strong>is an umbrella term that describes the process of creating a 
website. As the name suggests, it involves two major skill sets: web design and web development.</p>
<br/>
<p className='para0'>Web application development includes many stages, from high level strategy, accurate planning, 
necessary research, business consulting, design, programming, testing, and training. Through this 
complete process we remain clear and transparent with our clients without any misleading 
promises. Our web applications are not only well-designed, but also fulfil the need of client. </p>
</div>  <div className='mini'>
      <SimpleGrid className='mini1' spacing={6} templateColumns='repeat(auto-fill, minmax(230px, 1fr))'>
  <Card className='sam'>
    <CardHeader >
      <Heading  className='webhead' size='md'> Graphic Designing Services </Heading>
    </CardHeader>
    <CardBody>
      <Text  className='webtext' >Keeping your design, branding and overall marketing up to speed with what your 
clients/customers expect to see this is phenomenally important, we can help you! 
</Text>
    </CardBody>
  </Card>
  <Card className='sam'>
    <CardHeader>
      <Heading  className='webhead'  size='md'> Responsive Web Designing  </Heading>
    </CardHeader>
    <CardBody>
      <Text className='webtext'>Award winning website development company in India. We build websites that drive 
business. Business Website, eCommerce & Custom Web Apps - we develop all using latest 
technologies. </Text>
    </CardBody>
  </Card>
  <Card className='sam'>
    <CardHeader>
      <Heading  className='webhead'  size='md'> Static Website Designing </Heading>
    </CardHeader>
    <CardBody>
      <Text className='webtext'>Static Web Design is the simplest way for businesses or individuals who just want to post 
simple information about themselves or their company to the web world. </Text>
    </CardBody>
  </Card>
  <Card className='sam'>
    <CardHeader>
      <Heading  className='webhead'  size='md'>Dynamic Website Designing </Heading>
    </CardHeader>
    <CardBody>
      <Text className='webtext'>Having a dynamic website means; having the freedom to make changes on it as and when 
required. Unlike static websites, they display different content on different pages.</Text>
    </CardBody>
  </Card>
  <Card className='sam'>
    <CardHeader>
      <Heading  className='webhead'  size='md'>Website Redesign Service </Heading>
    </CardHeader>
    <CardBody>
      <Text className='webtext'>Rebranding is a marketing strategy to change the perception of an organization for business 
reasons. It helps the company stand out among a pool of competitors.</Text>
    </CardBody>
  </Card>
</SimpleGrid>
    </div>
    </div>
    </>
  )
}

export default Web