import React, { Component } from 'react';
import {
  NavLink,
  Banner,
  Heading,
  Subhead,
  ButtonOutline,
  Flex,
  Text,
  Input,
  Divider,
} from 'rebass';
import Header from './Header';
import InfoCard from './InfoCard';

const services = [{
  title: 'Marketing and Influence',
  subTitle: `We'll take care of that`,
  description: `
    Our Marketing services are built around the character of your business. 
    The Marketing work we offer enables your business to grow and opens the 
    door to a new customer base. We begin by working with you to define the 
    personality of your company or craft pushing reach, engagement, and conversation. 
    Building a plan with you one on one. This is what we live for: merging 
    creativity and technology in a way that brings your business more success than 
    you ever thought was possible. This is Fos Media!  
  `
}, {
  title: 'Design/Photography',
  subTitle: `Results You’ll Love`,
  description: `
    We specialize in expert Design services. Our Design services will give your businesses 
    that extra adrenaline shot it needs to get the ball rolling and take action with all 
    creative aspects of any project, large or small scale. Count on our team to handle your 
    Design project like pros. We are here to help you succeed.
  `
}, {
  title: 'Busniess Development/Artist Managment',
  subTitle: 'We Do It Right',
  description: `
    Artist management is a large part of Fos Media. Working one on one with artists, musicians, 
    producers, and small business owners. Business development is the core of Fos Media with the 
    combined efforts of marketing, management, promotions, and social media anything is possible.
  `
}];

const isMobile = () => navigator.userAgent.match(
  /(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);

const responsiveAlign = () => (isMobile() ? "left" : "left");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner
          color='white'
          bg='darken'
          backgroundImage='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
        >
          <Heading textAlign="center" fontWeight="normal" fontSize={[7, 8]}>
            Move Forward with Fos Media
          </Heading>
          <Subhead fontWeight="normal" fontSize={[2, 3]}>
            An expert in every market and industry.
          </Subhead>
          <div style={{ paddingTop: 48 }}>
            <ButtonOutline
              style={{ padding: 8 }}
              hover={{
                color: 'white',
                backgroundColor: 'orange',
              }}
              color="orange"
            >
              <NavLink href='mailto:fos.media2020@gmail.com'>Get In Touch</NavLink>
            </ButtonOutline>
          </div>
        </Banner>
        <Banner minHeight={320} bg="white">
          <Heading color="black" textAlign="center" fontWeight="normal" fontSize={[7, 8]}>
            What We Do
          </Heading>
          <Subhead pt={12} color="black" fontWeight="small" fontSize={[2, 3]}>
            Inspire and engage.
          </Subhead>
        </Banner>
        <Flex wrap>
          {(services && services.length) && services.map((service) => (
            <InfoCard
              {...service}
            />
          ))}
        </Flex>
        <Banner bg="white" minHeight={320} px={[12, 3]}>
          <Heading color="black" textAlign="center" fontWeight="normal" fontSize={[7, 8]}>
            Who We Are
          </Heading>
          <Text py={24} textAlign="center" color="black" fontWeight="small">
            We’re passionate about helping you find your creative voice. Founded in 2018, 
            we champion brands and etch them into the foundation of the community/target group. 
            We leverage your unique character to build strategic plans and deliver the right 
            customers to you. Our team offers unparalleled creative solutions to all of our clients, 
            and is determined to see every job through to its success.            
          </Text>
        </Banner>
        <Flex wrap alignItems="center" justifyContent="center" bg="white" p={12}>
          <Heading py={12} color="black" textAlign="center" fontWeight="normal" fontSize={[2, 3]}>
            Let's Connect
          </Heading>
          <Input placeholder="Email" />
          <div style={{ paddingTop: 12 }}>
            <ButtonOutline
              style={{ padding: 8 }}
              hover={{
                color: 'white',
                backgroundColor: 'orange',
              }}
              color="orange"
            >
              Send
            </ButtonOutline>
          </div>
        </Flex>
      </div>
    );
  }
}

export default App;
