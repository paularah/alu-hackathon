// import React from "react";
// import tw from "twin.macro";
// import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line
// import { SectionHeading } from "components/misc/Headings.js";
// import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
// import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
// import { ReactComponent as TrendingIcon } from "feather-icons/dist/icons/trending-up.svg";
// import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
// // import rectange1 from "";

// const Container = tw.div`relative`;
// const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

// const ThreeColumn = tw.div`flex flex-wrap`;
// const Column = tw.div``;
// const HeadingColumn = tw(Column)`w-full xl:w-1/3`;
// const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-1/3 mt-16 xl:mt-0`;
// const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
// const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
// const HeadingTitle = tw(SectionHeading)`xl:text-left leading-tight`;
// const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
// const PrimaryLink = styled(PrimaryLinkBase)`
//   ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
//   svg {
//     ${tw`ml-2 w-5 h-5`}
//   }
// `;

// const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
// const CardImage = styled.div((props) => [
//   `background-image: url("${props.imageSrc}");`,
//   tw`h-80 bg-cover bg-center rounded`,
// ]);

// const CardText = tw.div`mt-4 w-full`;

// const CardHeader = tw.div`flex justify-between items-center`;
// const CardType = tw.div`text-primary-500 font-bold text-lg`;
// const CardPrice = tw.div`font-semibold text-sm text-gray-600`;
// const CardPriceAmount = tw.span`font-bold text-gray-800 text-lg`;

// const CardTitle = tw.h5`text-xl mt-4 font-bold`;

// const CardMeta = styled.div`
//   ${tw`flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
// `;

// const CardMetaFeature = styled.div`
//   ${tw`flex items-center mt-4`}
//   svg {
//     ${tw`w-5 h-5 mr-1`}
//   }
// `;
// const CardAction = tw(PrimaryButtonBase)`w-full mt-8`;

// export default () => {
//   return (
//     <Card>
//       <CardImage imageSrc="../../images/rectange1" />
//       <CardText>
//         <CardHeader>
//           <CardCompany> Lorem ispum tired </CardCompany>
//           {/* <CardType>{card.type}</CardType> */}
//         </CardHeader>
//         {/* <CardTitle>{card.title}</CardTitle> */}
//         <CardMeta>
//           <CardMetaFeature>
//             <LocationIcon /> Remote
//           </CardMetaFeature>
//         </CardMeta>
//         <CardAction>wotoooooo</CardAction>
//       </CardText>
//     </Card>
//   );
// };
import React from "react";
const SingleCardPage = () => (
  <>
    <Card className="w-full md:w-4/12">
      <img
        src="https://res.cloudinary.com/beloved/image/upload/v1608682938/Assets/632198_sgrp38.jpg"
        alt="image"
        width={1100}
        height={100}
        className="max-w-full h-auto"
      />
      <Card.Body>
        <Card.Title>Sunday, 05 March 2021 | 10:00AM </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
      </Card.Body>
      <div className="mb-1"></div>
      <NoImageCard />
    </Card>
  </>
);

const NoImageCard = () => {
  return (
    <Card className="w-full md:w-4/12">
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text2>
          Entrance Fee
          <span>5,000 RWF</span>
        </Card.Text2>
        <Card.Text3>-1000</Card.Text3>
      </Card.Body>
    </Card>
  );
};
const Card = ({ className, children }) => (
  <div
    className={`${className} relative flex flex-col border-2 border-gray-200 rounded-lg`}
    style={style}
  >
    {children}
  </div>
);
Card.Body = ({ children }) => (
  <div className="block flex-grow flex-shrink p-5">{children}</div>
);

Card.Title = ({ className, children }) => (
  <h5 className={`${className} text-xl mt-4 font-bold`}>{children}</h5>
);
Card.Text = ({ children }) => <div className="text-gray-500">{children}</div>;
const style = {
  boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
};

Card.Text2 = ({ children }) => <div className="text-red-500">{children}</div>;
Card.Text3 = ({ children }) => <div className="text-green-500">{children}</div>;

export default SingleCardPage;
