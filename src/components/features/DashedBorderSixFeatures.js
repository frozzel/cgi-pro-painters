import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
// import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/paint-roller-1-svgrepo-com.svg";
import ShieldIconImage from "../../images/paint-brush-svgrepo-com.svg";
import CustomizeIconImage from "../../images/hammer-fill-svgrepo-com.svg";
import FastIconImage from "../../images/ladder-tool-svgrepo-com.svg";
import ReliableIconImage from "../../images/saw-illustration-1-svgrepo-com.svg";
import SimpleIconImage from "../../images/paint-palette-art-svgrepo-com.svg";
import Profile from "../../images/profileCharacter.png";

const Container = tw.div`relative `;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24 `}
`;
// const Heading = tw(SectionHeading)`w-full`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Heading2 = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 4.25rem;

  @media (max-width: 1200px) {
    font-size: 3.5rem;
  }
  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: auto;
  margin-right: 16px;

  @media (max-width: 1200px) {
    width: 80px;
  }
  @media (max-width: 992px) {
    width: 70px;
  }
  @media (max-width: 768px) {
    width: 60px;
  }
  @media (max-width: 576px) {
    width: 50px;
  }
`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-white rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-white text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-white`}
  }

  .description {
    ${tw`mt-3 font-semibold text-gray-400 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Interior Painting",
      description: "CGI Pro Painters® provides a range of custom interior painting services, allowing for a smooth, seamless experience and exceptional results in every home."
    },
    { imageSrc: SupportIconImage, title: "Exterior Painting",
      description: "CGI Pro Painters® offers professional exterior house painting services. We can help with all types of exterior home surfaces including wood, siding, stucco and more."
     },
     { imageSrc: SimpleIconImage, title: "Color Consultation",
      description: "Not sure which shade to choose? Struggling to differentiate matte, satin and gloss? We’ll help you navigate the sea of options to find a color that matches your home’s interior aesthetic and stands up to your family’s daily routine."
    },
    { imageSrc: CustomizeIconImage, title: "Drywall Repair", 
      description: "Whether your home has water damage that requires drywall repair or your walls have medium-to-large holes that need patching, the CGI Pro Painters® crew will patch, sand and prime, to create a flawless surface to paint on."
    },
    { imageSrc: ReliableIconImage, title: "Crown Molding Installation",
      description: "Crown molding is a great way to add elegance in a home. It is timeless, ornate and exquisite looking. The CGI Pro Painters® team can work install decorative borders around your home including fireplace mantels, baseboards, door casings, and wainscoting."
    },
    { imageSrc: FastIconImage, title: "Deck Staining/Painting", 
      description: "Protect your home’s exterior from Mother Nature with our variety of exterior home painting and staining services, including your home’s deck and fencing. Our team works with you to determine the best plan of action for your home."
     },

  ];
  const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100`;

  return (
 <PrimaryBackgroundContainer>

    <Container>
    

      <ThreeColumnContainer id="services">
      <Container2>
      <Heading2>
        <ProfileImage src={Profile} alt="Profile" />
        Our Professional Services
      </Heading2>
    </Container2>
        {/* <Heading style={{ display: 'flex', alignItems: 'center', textAlign: "center" }} ><img src={Profile} style={{width: 80, height: 80, marginRight: 16}} className="w-16 h-16 mr-4" />Our Professional Services</Heading> */}
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
    </PrimaryBackgroundContainer>

  );
};
