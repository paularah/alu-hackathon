import React from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { Link } from "react-router-dom";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import Rectangle1 from "images/rectange1.png";
import Rectangle2 from "images/rectange2.png";
import { SectionHeading as HeadingBase } from "components/misc/Headings";

const SectionImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 sm:h-80 bg-center mr-8 ml-8 bg-cover rounded-t`}
`;

const Container = tw.div`relative text-center`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

// const Heading = tw(
//   SectionHeading
// )`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Heading = tw(HeadingBase)`text-center text-primary-900 leading-snug`;

export default () => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <Heading>What would you like to do?</Heading>
      <TwoColumn>
        <ImageColumn>
          <Link to="/events">
            <SectionImage imageSrc={Rectangle1}></SectionImage>
          </Link>
        </ImageColumn>
        <ImageColumn>
          <Link to="/create">
            <SectionImage imageSrc={Rectangle2}></SectionImage>
          </Link>
        </ImageColumn>
      </TwoColumn>
    </Container>
  );
};
