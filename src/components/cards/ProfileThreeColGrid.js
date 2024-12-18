import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import felix from "images/felixlee.jpg";
import jisoo from "images/jisookim.jpg";
import sunoo from "images/kimsunoo.jpg"

const HeadingContainer = tw.div`text-pink-600`
const Heading = tw(SectionHeading)`text-pink-800 text-3xl`;
const Subheading = tw(SubheadingBase)`text-center mb-3 text-yellow-600`;
const Description = tw(SectionDescription)`mx-auto text-center md:max-w-3xl text-base text-gray-700`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-16 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-48 h-48 bg-contain bg-center rounded-full shadow-lg border-4 border-yellow-500`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-wider text-sm text-yellow-600`}
  }
  .name {
    ${tw`mt-2 text-xl font-semibold text-pink-800`}
  }
`;

const CardLinks = styled.div`
  ${tw`mt-4 flex`}
  .link {
    ${tw`mr-4 last:mr-0 text-pink-600 hover:text-yellow-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  heading = "Meet Our Sweet Team!",
  subheading = "Candy Experts",
  description = "Our team of candy lovers is dedicated to creating delightful moments for everyone. From crafting the perfect sweets to ensuring every customer leaves with a smile, we work passionately to make your candy experience unforgettable.",
  cards = [
    {
      imageSrc: felix,
      position: "Candy Master",
      name: "Felix Lee",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: jisoo,
      position: "Flavor Designer",
      name: "Jisoo Kim",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: sunoo,
      position: "Sweet Innovator",
      name: "Sunoo Kim",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
