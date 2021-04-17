import React from "react";
import EventCard from "components/cards/EventCard";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
export default () => {
  return (
    <AnimationRevealPage>
      <EventCard></EventCard>
    </AnimationRevealPage>
  );
};
