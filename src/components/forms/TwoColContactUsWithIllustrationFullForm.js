import React, {useRef}from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/mailbox.png";
import emailjs from '@emailjs/browser';


const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

// const HubspotContactForm = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "//js.hsforms.net/forms/v2.js";
//     document.body.appendChild(script);

//     script.addEventListener("load", () => {
//       if (window.hbspt) {
//         window.hbspt.forms.create({
//           portalId: "46454690",
//           formId: "cd4ebe50-bd8f-49bb-9156-b8f7b486a392",
//           target: "#hubspotForm",
//         });
//       }
//     });
//   }, []);

//   return <div id="hubspotForm" />;
// }


export default ({
  subheading = "Contact Us",
  heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with us.</>,
  description = "Please contact us with any questions or concerns, and we will respond as soon as possible.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,

  
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_rkj2w5y', 'template_kixkcyo', form.current, 'oKtWSa3HTCx7cs7M7')
  .then(
      (result) => {
      console.log("ok", result.text)
      form.current.reset()
      },
      (error) => {
        console.log("error", error.text)
      }
    )
}

  return (
    <Container id="contactus">
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
       
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <br />
            {/* <HubspotContactForm /> */}
           
            <Form action={formAction} method={formMethod} ref={form} onSubmit={sendEmail}>
            {/* <HubspotContactForm /> */}
              <Input type="email" name="email" id="email" required placeholder="Email Address" />
              <Input type="text" name="name" id="name" required placeholder="Full Name" />
              <Input type="text" name="subject" id="subject" required placeholder="Subject" />
              <Textarea name="message" id="message" placeholder="Your Message Here" />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
