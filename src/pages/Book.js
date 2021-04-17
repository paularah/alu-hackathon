import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import BookingCards from "components/cards/ConfirmationCard";

export default () => {
  return (
    <AnimationRevealPage>
      <BookingCards></BookingCards>
    </AnimationRevealPage>
  );
};
