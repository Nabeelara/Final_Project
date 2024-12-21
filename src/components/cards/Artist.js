import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import yupi from "images/yupi.jpg"
import kinderjoy from "images/ferrerokinderjoy.png"
import hershey from "images/Hershey-logo.jpg"
import kasugai from "images/kasugailogo.jpg"
import perfetti from "images/perfetti-van-melle.svg"
import mayora from "images/mayorakis.jpg"
import snak from "images/Snak-Club.jpg"
import yum from "images/yumearth.jpeg"
import enjoy from "images/enjoysnack.jpeg"
import cadbury from "images/cadburylogo.png"
import { SectionHeading as Heading } from "components/misc/Headings.js";

const Container = tw.div`relative my-24 lg:my-32`;
const TwoColumn = tw.div` lg:flex-row lg:justify-between lg:items-center  py-10 grid grid-cols-2 lg:grid-cols-5 gap-5 mx-3`;
const SectionHeading = styled(Heading)`
  ${tw`text-center text-[#2db7e3] mt-32 font-bold`}
  font-size: 2rem;

  @media (min-width: 1024px) { /* Media query untuk layar besar */
    font-size: 3.5rem;
  }
`;

const ImageWrapper = styled.div`
  ${tw` px-2`}
  img {
    ${tw` object-cover`}
    /* Set the desired height */
  }
`;

export default () => {
  return (
    <Container>
      <SectionHeading>Shop a Wide Variety of Trusted Candy Brands</SectionHeading>
      <p className="flex justify-center items-center mt-5 sm:mx-10 text-center">Discover your favorite candy brands and explore an extensive selection of delicious treats for every sweet craving!</p>
      <TwoColumn className="md:gap-8 flex lg:flex-cols-3">
        <ImageWrapper>
          <img src={yupi} alt="Furniture" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={kinderjoy} alt="Jewellery" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={hershey} alt="Map" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={kasugai} alt="Map" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={perfetti} alt="Map" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={mayora} alt="Map" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={snak} alt="Map" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={yum} alt="Map" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={enjoy} alt="Map" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={cadbury} alt="Map" />
        </ImageWrapper>
      </TwoColumn>
    </Container>
  );
};
