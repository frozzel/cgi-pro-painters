import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import paint from "images/downloaded-image.png";

import Header, { NavLink, LogoLink, NavToggle, DesktopNavLinks } from "../components/headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none pb-4`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover align-top h-screen `}
  background-image: url(${paint});
  	
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;



export default () => {
  const navLinks = [];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader  links={navLinks} />
  
            <div >
                <div>
                <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/cgipropainters/quote?embed=true"></div>
                    {/* <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script> */}
                <iframe
                    title={'hubspot'}
                    style={{
                    width: '100%',
                    height: '100vh'
                    }}
                    src={'https://meetings.hubspot.com/cgipropainters/quote?embed=true'}
                />
                        {/* <!-- End of Meetings Embed Script --> */}
                    
                </div>
               
            </div>
  
      </HeroContainer>
    </Container>
  );
};
