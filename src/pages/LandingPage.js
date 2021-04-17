import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Footer from "components/footers/SimpleFiveColumn.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Footer />
  </AnimationRevealPage>
);
