import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import AntiqueShop from "images/oldpink.webp"
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch justify-between lg:h-auto bg-blue-100 lg:px-20 lg:py-20 py-6 md:py-16`;

const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-4`;
const ImageColumn = tw(Column)`lg:w-5/12 flex-shrink-0 h-80 lg:h-auto relative`;
const TextColumn = styled(Column)(props => [
  tw`lg:w-7/12 lg:mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-8 lg:mr-12 md:order-first`
    : tw`md:ml-8 lg:ml-12 md:order-last`
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-left`;

const Heading = tw(
  SectionHeading
)` font-black text-left text-[#FF689B] lg:text-5xl text-center md:text-left leading-tight md:mt-8`;
const Description = tw.p`mt-4 text-sm md:text-base lg:text-lg font-serif font-medium leading-relaxed tracking-wide text-secondary-100`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto  bg-[#FF689B] hover:bg-[#B7534E]`;

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

export default ({
  heading = (
    <>
      Bringing sweetness through generations
    </>
  ),
  description = "Founded in 1925 by Clara Peterson, our candy store began as a small neighborhood shop offering handcrafted chocolates, caramels, and her famous peppermint drops. Clara’s dedication to quality and her innovative penny candies during the Great Depression made the store a beloved gathering place for families, even in challenging times.",
  description2 = "Today, the store remains a family-run business, blending traditional recipes with modern flavors. Generations continue to visit, cherishing its timeless charm and delicious treats. Clara’s vision lives on: “Spreading happiness, one candy at a time.",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = AntiqueShop,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const defaultStatistics = [
    {
      key: "Clients",
      value: "2282+"
    },
    {
      key: "Projects",
      value: "3891+"
    },
    {
      key: "Awards",
      value: "1000+"
    }
  ];

  if (!statistics) statistics = defaultStatistics;

  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center sm:flex sm:flex-row md:flex md:flex-row`}>
        <ImageColumn css={imageContainerCss}>
          {imageInsideDiv ? <Image imageSrc={imageSrc} css={imageCss} /> : <img src={imageSrc} css={imageCss} alt="" />}
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Description>{description2}</Description>
            <PrimaryButton as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
