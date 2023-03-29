import React from 'react'
import { Card, CardHeader, CardBody,SimpleGrid,
    Heading,Text
   } from '@chakra-ui/react'
import './Business.css';
const Business = () => {
  return (
    <div className='firstdiv3'>
  
<h1 className='digihead3'>Marketing Strategies to Fuel Your Business Growth</h1>
<p className='digipara3'>A marketing strategy refers to a business’s overall game plan for reaching prospective consumers 
and turning them into customers of their products or services</p>
<div className='mini'>
      <SimpleGrid className='mini1' spacing={6} templateColumns='repeat(auto-fill, minmax(330px, 1fr))'>
  <Card className='sam3'>
    <CardHeader >
      <Heading className='businesshead' size='md'> social media 
 </Heading>
    </CardHeader>
    <CardBody>
      <Text className='businesstext'> That's where all the so-called magic is happening. Some businesses have been built solely on 
the backs of social media. It can be intimidating at first. Sure. But as you build momentum, 
you'll find posting on social media to get easier and easier over time 
</Text>
    </CardBody>
  </Card>
  <Card className='sam3'>
    <CardHeader>
      <Heading className='businesshead'size='md'>blogging  </Heading>
    </CardHeader>
    <CardBody>
      <Text className='businesstext'>you could start a blog. If you don't have a blog for your business, then you need to start one 
immediately. But you don't just have to blog on your own blog. Most people find blogging 
mundane because they lack the visibility. 
 </Text>
    </CardBody>
  </Card>
  <Card className='sam3'>
    <CardHeader>
      <Heading className='businesshead'size='md'>  search engine optimization 
</Heading>
    </CardHeader>
    <CardBody>
      <Text className='businesstext'>This is an area of marketing that I'm incredibly passionate about. But it's also an area that 
many people are deathly frightened by. Yes, SEO can be frightening. But it can also be 
powerful. </Text>
    </CardBody>
  </Card>
  <Card className='sam3'>
    <CardHeader>
      <Heading className='businesshead'size='md'>Facebook ads 
</Heading>
    </CardHeader>
    <CardBody>
      <Text className='businesstext'>One of the most powerful methods you can use to market just about anything these days are 
Facebook ads. With Facebook, you can reach a very specific audience and you can do it very 
easily. You can target by interest, age, geographic location. 
</Text>
    </CardBody>
  </Card>
  <Card className='sam3'>
    <CardHeader>
      <Heading className='businesshead'size='md'>LinkedIn 
 </Heading>
    </CardHeader>
    <CardBody>
      <Text className='businesstext'>Why not take the time to introduce yourself and your business. Link that to your profile 
description. This is an easy way to passively market your business, and when it's done right, 
it can lead to shocking results</Text>
    </CardBody>
  </Card>
  <Card className='sam3'>
    <CardHeader>
      <Heading className='businesshead'size='md'>lead magnet  </Heading>
    </CardHeader>
    <CardBody>
      <Text className='businesstext'>So much effectiveness in marketing really does boil down to creating a great lead magnet. 
I've found that the right lead magnet presented to the right audience can have explosive 
results.</Text>
    </CardBody>
  </Card>
</SimpleGrid>
    </div>
</div>
  )
}

export default Business