import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import paint from "images/downloaded-image.png";

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
// import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none `}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300 `}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover align-top	 bg-gray-500`}

  	
`;

const DivX = styled.div`
    ${tw`h-screen	 bg-white`}
    `;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;






export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">
        Home
      </NavLink>
      <NavLink href="#">
        Blog
      </NavLink>
      <NavLink href="/index#services">
        Services
      </NavLink>
      <NavLink href="#contactus">
        Contact Us
      </NavLink>
      <NavLink href="#testimonials">
        Testimonials
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">
        Hire Us
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      {/* <OpacityOverlay /> */}
      <HeroContainer>
        <StyledHeader links={navLinks}  />
        <DivX >
    {/* <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/dhickox?embed=true"></div> */}
    <iframe
        title="Schedule a Meeting"
        style={{ border: 0, width: "100%", height: "100%" }}
        src="https://meetings.hubspot.com/dhickox?embed=true"
    ></iframe>
   


        </DivX>
        {/* <TwoColumn>

          <LeftColumn>
            <Notification>Book Today - Schedules are filling fast</Notification>
            <Heading>
              <span>Hire the best</span>
              <br />
              <SlantedBackground>Expert Painters</SlantedBackground>
            </Heading>
            <PrimaryAction>Read Customer Stories</PrimaryAction>
          </LeftColumn>
          <RightColumn> */}
            {/* <StyledResponsiveVideoEmbed
              url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
            /> */}
          {/* </RightColumn>
  
        </TwoColumn> */}
      </HeroContainer>
    </Container>
  );
};
