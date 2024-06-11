import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const FaqsContainer = tw.div`mt-10 sm:mt-16 w-full flex-1 lg:flex justify-between items-start max-w-screen-lg mx-auto`;
const FaqsColumn = tw.div`w-full lg:max-w-lg lg:mr-12 last:mr-0`;
const Faq = tw.div`select-none cursor-pointer border-b-2 border-primary-300 hover:border-primary-500 transition-colors duration-300 py-6`;
const Question = tw.div`flex justify-between items-center`;
const QuestionText = tw.div`text-sm sm:text-lg font-semibold tracking-wide`;
const QuestionToggleIcon = styled(motion.span)`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const Answer = tw(motion.div)`hidden text-sm font-normal mt-4 text-gray-300`;

export default ({
  subheading = "",
  heading = "Frequently Asked Questions",
  description = "Here are some frequently asked questions from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.",
  faqs = [
    {
      "question": "How much does it cost to paint a house interior?",
      "answer": "The cost of interior painting will vary depending on several factors including the square footage, the number of coats, the conditions of the surfaces, how much the color is changing, the height of the walls, and the labor rate in the region the home is located. To get accurate pricing for your unique painting project, set up a free estimate appointment."
    },
    {
      "question": "Do I need to move furniture before the crew arrives?",
      "answer": "Your local painting team will cover and protect the furniture and floors, but if there is a delicate piece of furniture or an heirloom that is tricky to move, please remove it before your painting team arrives or make sure you notify the Job Site Supervisor before they begin the project."
    },
    {
      "question": "Can you match the paint color already on the walls?",
      "answer": "CGI Pro Painters can match just about any paint color on your home using a chip of paint or wet sample. Even if you do not remember the original color codes, we can still match the color."
    },
    {
      "question": "What are the trending interior paint colors this year?",
      "answer": "Popular paint colors change every few years, right now white, gray, and shades of tan are all very popular color choices for interior walls. Check out our blog for updated color trends."
    },
    {
      "question": "Can you repair damage to trim or walls as part of the project?",
      "answer": "It depends on the scope of the damage, but in many cases, yes. CGI Pro Painters can patch damaged sections of drywall and minor repair cracks in walls and ceilings as they prep for your painting project."
    },
    {
      "question": "How long will the painting project take?",
      "answer": "The duration of the painting project will depend on the size of your home, the number of rooms being painted, the amount of prep work needed, and the complexity of the project. Our Pro Painter team can provide a more accurate timeline during your free estimate appointment."
    }

  ]
}) => {
  const faqCol1 = [];
  const faqCol2 = [];
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  faqs.map((faq, index) => {
    const renderedFaq = (
      <Faq key={index} onClick={() => toggleQuestion(index)}>
        <Question>
          <QuestionText>{faq.question}</QuestionText>
          <QuestionToggleIcon
            variants={{
              collapsed: { rotate: 0 },
              open: { rotate: -180 }
            }}
            initial="collapsed"
            animate={activeQuestionIndex === index ? "open" : "collapsed"}
            transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ChevronDownIcon />
          </QuestionToggleIcon>
        </Question>
        <Answer
          variants={{
            open: { opacity: 1, height: "auto", marginTop: "16px", display: "block" },
            collapsed: { opacity: 0, height: 0, marginTop: "0px", display: "none" }
          }}
          initial="collapsed"
          animate={activeQuestionIndex === index ? "open" : "collapsed"}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {faq.answer}
        </Answer>
      </Faq>
    );

    if (index % 2 === 0) faqCol1.push(renderedFaq);
    else faqCol2.push(renderedFaq);

    return null;
  });
  return (
    <PrimaryBackgroundContainer id="FAQ">
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <FaqsContainer>
          <FaqsColumn>{faqCol1}</FaqsColumn>
          <FaqsColumn>{faqCol2}</FaqsColumn>
        </FaqsContainer>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
