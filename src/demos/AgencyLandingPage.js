import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import GetStartedLight from "components/cta/GetStartedLight";

export default () => (
  <AnimationRevealPage disabled>
    <Hero />
    <MainFeature />
    <Features />
    {/* <MainFeature2 /> */}
    {/* <Portfolio /> */}
    <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Our Clients <span tw="text-primary-500">Love Us.</span>
        </>
      }
      description="At CGI Pro Painters, our testimonials section highlights genuine feedback from satisfied customers, showcasing our exceptional service and quality craftsmanship. Discover why we are the trusted choice for all your painting needs."
      testimonials={[
        {
          "stars": 5,
          "profileImageSrc": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          "heading": "Exceptional Craftsmanship",
          "quote": "CGI Pro Painters transformed our home with their expert craftsmanship and attention to detail. Highly recommend!",
          "customerName": "Sarah M."
        },
        {
          "stars": 5,
          "profileImageSrc": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          "heading": "Professional and Punctual",
          "quote": "The team at CGI Pro Painters was professional, punctual, and their work exceeded our expectations. Our house looks fantastic!",
          "customerName": "John L."
        },
        {
          "stars": 5,
          "profileImageSrc": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          "heading": "Thrilled with the Results",
          "quote": "We were thrilled with the quality and efficiency of CGI Pro Painters. Our rooms have never looked better!",
          "customerName": "Emily R."
        },
        {
          "stars": 5,
          "profileImageSrc": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "heading": "Stunning Exterior Work",
          "quote": "CGI Pro Painters did an amazing job on our exterior painting project. The results are stunning!",
          "customerName": "Michael T."
        },
        {
          "stars": 5,
          "profileImageSrc": "https://images.unsplash.com/photo-1680519599851-f212d4e26193?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "heading": "Courteous and Skilled Crew",
          "quote": "The crew was courteous, clean, and incredibly skilled. CGI Pro Painters made our vision a reality!",
          "customerName": "Lisa K."
        },
        {
          "stars": 5,
          "profileImageSrc": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "heading": "Top-Notch Service",
          "quote": "From start to finish, CGI Pro Painters provided top-notch service and impeccable results. We couldn’t be happier!",
          "customerName": "Mark D."
        }
      ]}
      textOnLeft={true}
    />
    <GetStartedLight  />
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Do you have <span tw="text-primary-500">Questions ?</span>
        </>
      }
    />
    {/* <Blog /> */}
    <ContactUsForm />
    <button
  type="button"
  id="hs_show_banner_button"
  style={{
    backgroundColor: '#5a13e6',
    border: '1px solid #5a13e6',
    borderRadius: '3px',
    padding: '10px 16px',
    textDecoration: 'none',
    color: '#fff',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    textAlign: 'left',
    textShadow: 'none',
    zIndex: 9999 // High value to ensure it's on top

  }}
  onClick={function() {
    var _hsp = window._hsp = window._hsp || [];
    _hsp.push(['showBanner']);
  }}
>
  Cookie Settings
</button>
    <Footer />
  




  </AnimationRevealPage>
);
