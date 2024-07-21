import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import StatsIllustrationSrc from "images/paintbucket-removebg.png";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import ReactGA from 'react-ga4';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center w-full h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-primary-700`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

export default ({
  subheading = "Our Track Record",
  heading = (
    <>
      Your Expert House Painters
      <wbr /> since <span tw="text-primary-500">2018.</span>
    </>
  ),
  description = "CGI Pro Painters® offers professional interior and exterior house painting services to locations in the greater metro Atlanta area. We take great pride in our quality painting services and high customer reviews. Click one of the links below to learn more about the painting services we offer.",
  primaryButtonText = "Free Estimate",
  primaryButtonUrl = "https://calendar.app.google/8XX2Big7oqWjPZBg8",
  imageSrc = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const defaultStatistics = [
    {
      key: "Clients",
      value: "2282+"
    },
    {
      key: "Projects",
      value: "3891+"
    },
    {
      key: "Reviews",
      value: "1000+"
    }
  ];

  if (!statistics) statistics = defaultStatistics;

  const handleButtonClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked About',
      label: 'Free Estimate Button'
    });
  };

  

  return (
    <Container>
      <TwoColumn id="about" css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          {imageInsideDiv ? <Image imageSrc={imageSrc} css={imageCss} /> : <img src={imageSrc} css={imageCss} alt="" />}
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
            <PrimaryButton as="a" href={primaryButtonUrl} onClick={handleButtonClick} target="_blank">
              {primaryButtonText}
            </PrimaryButton>
            {/* <div className="hs-cta-embed hs-cta-simple-placeholder hs-cta-embed-170452886386"
                style={{ maxWidth: '100%', maxHeight: '100%', width: '156px', height: '45px', marginTop: '40px' }} data-hubspot-wrapper-cta-id="170452886386">
                <a href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLLvw8B5bZJZfbYEYvo7x2yi6UO%2FxOnIa6O6oFcLu%2FU5uSisMF8e9MyLUB%2FCw3OA689jnOJideCVefZ7gnsh6Rh2I9EQzOBXVYMc45QU9yssGtYc9oI4GTMznqV77Vimsj1CwzDKt1%2FXJ%2FgxjK%2FCh%2FwScnyHTS%2FVCAkBgdI%3D&webInteractiveContentId=170452886386&portalId=46454690"  rel="noopener" crossOrigin="anonymous" onClick={handleButtonClick}>
                  <img alt="Free Estimate " loading="lazy" src="https://no-cache.hubspot.com/cta/default/46454690/interactive-170452886386.png" style={{ height: '100%', width: '100%', objectFit: 'fill' }}
                    />
                </a>
            </div> */}



          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
