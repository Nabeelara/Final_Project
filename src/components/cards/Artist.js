import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Furniture from "images/Furniture.jpg";
import Jewellery from "images/Jewellery.jpg";
import EgyptMap from "images/EgyptMap.jpg";
import { SectionHeading as Heading } from "components/misc/Headings.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:justify-between lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const SectionHeading = styled(Heading)`
  ${tw`text-center text-orange-800 mt-16 `}
  font-size: 2.5rem;
  font-weight: bold;
`;
const ImageWrapper = styled.div`
  ${tw`w-full lg:w-1/3 px-2`}
  img {
    ${tw`w-full object-cover`}
    height: 700px; /* Set the desired height */
  }
`;

export default () => {
  return (
    <Container>
      <SectionHeading>We Also Have</SectionHeading>
      <TwoColumn>
        <ImageWrapper>
          <img src={Furniture} alt="Furniture" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={Jewellery} alt="Jewellery" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={EgyptMap} alt="Map" />
        </ImageWrapper>
      </TwoColumn>
    </Container>
  );
};
