import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,SimpleGrid,
    Heading,Text,Button
   } from '@chakra-ui/react'
import './Digital.css';
const Digital = () => {
  return (
    <div className='firstdiv1'>
    <div className='perfectdiv1'>
    <p className='para01' ><strong className='st1'>Digital Marketing,</strong> also called online marketing, is the promotion of brands to connect with 
potential customers using the internet and other forms of digital communication. 
</p>
</div>
<h1 className='digihead1'>digital channels to promote brands</h1>
<p className='digipara1'>The term digital marketing refers to the use of digital channels to market products and services in 
order to reach consumers.</p>
<div className='mini28'>
      <SimpleGrid className='mini82' spacing={6} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
  <Card className='sam1'>
    <CardHeader >
      <Heading className='headbox' size='md'> Website Marketing </Heading>
    </CardHeader>
    <CardBody>
      <Text className='textbox'>A website is the centrepiece of all digital marketing activities. It is a very powerful channel 
on its own, but it’s also the medium needed to execute a variety of online marketing 
campaigns
</Text>
    </CardBody>
  </Card>
  <Card className='sam1'>
    <CardHeader>
      <Heading className='headbox' size='md'> Content Marketing  </Heading>
    </CardHeader>
    <CardBody>
      <Text  className='textbox'>The goal of content marketing is to reach potential customers through the use of content. 
Content is usually published on a website and then promoted through social media, email 
marketing. 
technologies. </Text>
    </CardBody>
  </Card>
  <Card className='sam1'>
    <CardHeader>
      <Heading className='headbox' size='md'> Email Marketing 
 </Heading>
    </CardHeader>
    <CardBody>
      <Text  className='textbox'>Email marketing is still one of the most effective digital marketing channels. Many people 
confuse email marketing with spam email messages, but that’s not what email marketing is 
all about. </Text>
    </CardBody>
  </Card>
  <Card className='sam1'>
    <CardHeader>
      <Heading className='headbox' size='md'>Pay-Per-Click (PPC) </Heading>
    </CardHeader>
    <CardBody>
      <Text className='textbox'>Pay-per-click (PPC) advertising enables marketers to reach Internet users on a number of 
digital platforms through paid ads. Marketers can set up PPC campaigns on Google, Bing, 
LinkedIn, Twitter, Pinterest.</Text>
    </CardBody>
  </Card>
  <Card className='sam1'>
    <CardHeader>
      <Heading className='headbox' size='md'>Affiliate Marketing </Heading>
    </CardHeader>
    <CardBody>
      <Text  className='textbox'>The internet has brought new life to this old standby. With affiliate marketing, influencers 
promote other people’s products and get a commission every time a sale is made or a lead is 
introduced. </Text>
    </CardBody>
  </Card>
  <Card className='sam1'>
    <CardHeader>
      <Heading  className='headbox' size='md'>Social Media </Heading>
    </CardHeader>
    <CardBody>
      <Text  className='textbox'>The primary goal of a social media marketing campaign is brand awareness and establishing 
social trust. As you go deeper into social media marketing, you can use it to get leads or even 
as a direct sales channel </Text>
    </CardBody>
  </Card>
</SimpleGrid>
    </div>
</div>
  )
}

export default Digital