import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import StatsIllustrationSrc from "images/paintbucket-removebg.png";

import Hero from "../demos/ThankYouHero.js";



export default  ({imageSrc = StatsIllustrationSrc}) => {

return (<>
  <AnimationRevealPage enabled>
  <Hero />

 
    </AnimationRevealPage >

    </>);

    }