import React from "react";
import momo from "images/momo.png";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { motion } from "framer-motion";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Link } from "react-router-dom";

const SectionImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 sm:h-80 bg-center mr-8 ml-8 bg-cover rounded-t`}
`;

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl relative text-center mx-auto py-20 md:py-24 items-center`;

export default () => {
  return (
    <AnimationRevealPage>
      <TwoColumn>
        <Link to="/payment">
          <SectionImage imageSrc={momo}></SectionImage>
        </Link>
      </TwoColumn>
    </AnimationRevealPage>
  );
};
