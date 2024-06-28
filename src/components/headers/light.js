import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import ReactGA from 'react-ga4';


import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/logo1.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-32 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];
  const handleButtonClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Header',
      label: 'Free Estimate Button'
    });
  };

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
      {/* Treact */}
    </LogoLink>
  );

  const handleNavLinkClick = (event) => {
    // Prevent default scrolling behavior
    event.preventDefault();
    // Get the target element's ID from the href attribute
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    // Scroll to the target element
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    // Close the navbar
    toggleNavbar();
  };

  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="#about" onClick={handleNavLinkClick}>
        About
      </NavLink>
      {/* <NavLink href="#" onClick={handleNavLinkClick}>
        Blog
      </NavLink> */}
      <NavLink href="#services" onClick={handleNavLinkClick}>
        Services
      </NavLink>
      <NavLink href="#contactus" onClick={handleNavLinkClick}>
        Contact Us
      </NavLink>
      <NavLink href="#testimonials" onClick={handleNavLinkClick}>
        Testimonials
      </NavLink>
      <NavLink href="#FAQ" onClick={handleNavLinkClick}>
        FAQ
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      {/* <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} href="/meeting" onClick={toggleNavbar}>
        Hire Us
      </PrimaryLink> */}
      <div className="hs-cta-embed hs-cta-simple-placeholder hs-cta-embed-170481626005"
          style={{ maxWidth: '100%', maxHeight: '100%', width: '116px', height: '41px' }} data-hubspot-wrapper-cta-id="170481626005">
          <a href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLLOa8Q2BObIuKK%2FG%2FRgYJjrMqKF6rv5Jzw55%2Fp91TtimU98kn3veVJ0VxPFLO2StL9Dedst%2FaCmUga5LR6t79pQVH3Wk2FOmApZyH6g6lUp7KAmDtlhBwovRZIRQDzhUNfnpk1d5hRo%2F%2BCgwx5hnQ5BE%2Bb71QDOYP1MkW5hTm5Ro%2F2dEw%3D%3D&webInteractiveContentId=170481626005&portalId=46454690"rel="noopener" crossOrigin="anonymous" onClick={handleButtonClick}>
            <img alt="Hire Us" loading="lazy" src="https://no-cache.hubspot.com/cta/default/46454690/interactive-170481626005.png" style={{ height: '100%', width: '100%', objectFit: 'fill' }}
               />
          </a>
      </div>


    </NavLinks>
  ];

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
