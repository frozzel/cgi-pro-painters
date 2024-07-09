import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/favicon2.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
// import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram-svgrepo-com.svg";
// import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-16`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
const CopyrightText2 = tw.p`text-center mt-1 font-medium tracking-wide text-sm text-gray-600`

export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>CGI Pro Painters</LogoText>
            
          </LogoContainer>
          <LinksContainer>
            <Link href="#">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#contactus">Contact Us</Link>
            <Link href="#services">Services</Link>
            <Link href="#testimonials">Testimonial</Link>
            <Link href="#FAQ">FAQs</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/profile.php?id=61560853426094" target="_blank">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://x.com/CgiProPainters" target="_blank">
              <TwitterIcon />
            </SocialLink>
            {/* <SocialLink href="https://youtube.com" target="_blank">
              <LinkedinIcon />
            </SocialLink> */}
            <SocialLink href="https://www.instagram.com/cgipropainter/" target="_blank">
              <InstagramIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2018, CGI Pro Painters LLC. All Rights Reserved.
          </CopyrightText>
          <SocialLink href="https://cyrusgroupinnovations.com" target="_blank">
          <CopyrightText2  >&copy; Subsidiary of Cyrus Group Innovations</CopyrightText2>
          </SocialLink>
        </Row>
      </Content>
    </Container>
  );
};
