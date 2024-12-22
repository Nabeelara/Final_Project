import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-center text-pink-400`;
const Heading = tw(SectionHeading)`w-full text-center text-3xl lg:text-4xl font-bold text-[#ff4081]`;
const Description = tw(SectionDescription)`w-full text-center lg:text-lg text-gray-600`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 `}
`;

const Card = styled.div`
  ${tw`grid grid-cols-1  md:items-center items-start text-left h-full m-4 px-6 py-8  rounded-lg bg-gradient-to-r from-pink-100 via-yellow-200 to-pink-200 shadow-xl`}
  .imageContainer {
    ${tw`border-2 border-yellow-300 text-center rounded-full p-5`}
    img {
      ${tw`w-16 h-16`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold md:text-3xl leading-none text-pink-500`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-gray-700 leading-relaxed`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Our Features", subheading = "Why Choose Us?", description = "We offer the best candies with unmatched quality and service!" }) => {
  const defaultCards = [
    {
      title: "Sweet Variety",
      description: "We offer a wide selection of candies for all tastes!"
    },
    { 
      title: "Freshness Guaranteed",
      description: "Our candies are made fresh daily, ensuring the best taste."
    },
    { 
      title: "Customizable",
      description: "Create your own candy mix with your favorite treats."
    },
    { 
      title: "Affordable",
      description: "We provide high-quality candies at great prices."
    },
    { 
      title: "Gift-Friendly",
      description: "Perfect for candy gifts and special occasions."
    },
    { 
      title: "Fast Delivery",
      description: "Get your candy fix delivered to your door in no time!"
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title">{card.title || "Sweet Variety"}</span>
                <p className="description">
                  {card.description || "We offer a wide selection of candies for all tastes!"}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
