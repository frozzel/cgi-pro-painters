import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";

const PrimaryBackgroundContainer = tw.div`py-16 lg:py-20 bg-purple-200 rounded-lg relative`
const Row = tw.div`px-4 sm:px-16 mx-auto flex justify-center items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`
const TextContainer = tw(ColumnContainer)`text-2xl sm:text-4xl font-bold`;
const Subheading = tw.h6`text-primary-500 opacity-75`;
const Heading = tw.h5`text-primary-500`;

const LinksContainer = tw(ColumnContainer)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

// const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
// const PrimaryLink = tw(Link)`shadow text-gray-100 hocus:text-gray-300 bg-primary-500 hocus:bg-primary-700`;

// const SecondaryLink = tw(Link)`text-primary-500 hover:text-primary-600 bg-gray-100 hover:bg-gray-200`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`
const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-500 opacity-5`
const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-500 opacity-5`
export default ({
  subheading = "Get in touch with us",
  heading = "today to get a free quote.",
  primaryLinkText = "Get Started",
  primaryLinkUrl = "https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLLmDkd7lE3krdCth%2BLjSIzk%2F0iqeD6L9jSNLIU1e4b3ufrbgvAoTTe4yUhVbwJGnMrIOJq73SKSaOQvMy6QockwngvMBjV7uzkUv5rGM4dZ1Z0%3D&webInteractiveContentId=170480579352&portalId=46454690",
  secondaryLinkText = "Contact Us",
  secondaryLinkUrl = "/#contactus",
  pushDownFooter = true
}) => {
  return (
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`}>
      <ContentWithPaddingXl>
      <PrimaryBackgroundContainer>
        <Row>
          <TextContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
          </TextContainer>
          <LinksContainer>
            {/* <PrimaryLink className="hs-cta-embed hs-cta-simple-placeholder hs-cta-embed-170480579352" data-hubspot-wrapper-cta-id="170480579352" rel="noopener" crossOrigin="anonymous" href={primaryLinkUrl}>{primaryLinkText} */}
            {/* <img alt="Get Started" loading="lazy" src="https://no-cache.hubspot.com/cta/default/46454690/interactive-170480579352.png" style={{ height: '100%', width: '100%', objectFit: 'fill', display: "none"}}
               /> */}
            {/* </PrimaryLink> */}

{/* 
            <SecondaryLink href={secondaryLinkUrl}>{secondaryLinkText}</SecondaryLink> */}

            <div className="hs-cta-embed hs-cta-simple-placeholder hs-cta-embed-170480579352"
              style={{ maxWidth: '100%', maxHeight: '100%', width: '177px', height: '66px'}} data-hubspot-wrapper-cta-id="170480579352">
              <a href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLK%2Bk6XyRa%2BqM9EbtgEhu9o2gNjU5RD%2Bd5oAZi9B51dLBOor7KhLmBjxkkfhqTo%2BUQy%2BmThFvM0vCzsjzEbMZ3%2BoG0zItMYsqRlEvqbrYCoszhYbvfMhwVK%2Fo0yajRGAUnpoCcXBz7KQm3XyFTF4V6aued2kQPtE%2FlmGKwhayprUqExCog%3D%3D&webInteractiveContentId=170480579352&portalId=46454690" rel="noopener" crossOrigin="anonymous">
                <img alt="Get Started" loading="lazy" src="https://no-cache.hubspot.com/cta/default/46454690/interactive-170480579352.png" style={{ height: '100%', width: '100%', objectFit: 'fill'}}
                   />
              </a>
            </div>

          </LinksContainer>
        </Row>
        <DecoratorBlobContainer>
          <DecoratorBlob1/>
          <DecoratorBlob2/>
        </DecoratorBlobContainer>
      </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
