import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,SimpleGrid,
    Heading,Text,Button
   } from '@chakra-ui/react'
import './Social.css';
const Social = () => {
  return (
    <div className='firstdiv2'>
<h1 className='digihead2'>Social Media Marketing for Businesses</h1>
<p className='digipara2'>Social media marketing is a form of digital marketing that leverages the power of popular social 
media networks to achieve your marketing and branding goals. </p>
<div className='mini'>
      <SimpleGrid className='mini1' spacing={6} templateColumns='repeat(auto-fill, minmax(330px, 1fr))'>
  <Card className='sam2'>
    <CardHeader >
      <Heading className='socialhead' size='md'> Strategy </Heading>
    </CardHeader>
    <CardBody>
      <Text className='socialtext'>Before you dive right in and publish something on social media, let’s take a step back and 
look at the bigger picture. The first step is to think about your social media strategy. 
</Text>
    </CardBody>
  </Card>
  <Card className='sam2'>
    <CardHeader>
      <Heading className='socialhead' size='md'> Planning and Publishing   </Heading>
    </CardHeader>
    <CardBody>
      <Text className='socialtext'>Social media marketing for small businesses usually starts with having a consistent presence 
on social media. Close to three billion people (3,000,000,000!) use social media </Text>
    </CardBody>
  </Card>
  <Card className='sam2'>
    <CardHeader>
      <Heading className='socialhead'size='md'>Listening and Engagement  </Heading>
    </CardHeader>
    <CardBody>
      <Text className='socialtext'>As your business and social media following grow, conversations about your brand will also 
increase. People will comment on your social media posts,  </Text>
    </CardBody>
  </Card>
  <Card className='sam2'>
    <CardHeader>
      <Heading className='socialhead'size='md'>Analytics and Reporting</Heading>
    </CardHeader>
    <CardBody>
      <Text className='socialtext'> The social media platforms themselves provide a basic level of such information. To get 
more in-depth analytics information or to easily compare across social media platforms, </Text>
    </CardBody>
  </Card>
  <Card className='sam2'>
    <CardHeader>
      <Heading className='socialhead'size='md'> Advertising </Heading>
    </CardHeader>
    <CardBody>
      <Text className='socialtext'>When you have more funds to grow your social media marketing, an area that you can 
consider is social media advertising. Social media ads allow you to reach a wider audience 
than those who are following you. </Text>
    </CardBody>
  </Card>
  <Card className='sam2'>
    <CardHeader>
      <Heading className='socialhead'size='md'>Engagement  </Heading>
    </CardHeader>
    <CardBody>
      <Text className='socialtext'>The total number of social interactions divided by the number of impressions. This sheds 
light on how well your audience perceives you and their willingness to interact.</Text>
    </CardBody>
  </Card>
</SimpleGrid>
    </div>
</div>
  )
}

export default Social