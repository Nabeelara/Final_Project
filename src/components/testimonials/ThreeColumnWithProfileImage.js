import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "components/misc/Layouts.js";
import { SectionHeading as Heading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import Customer2 from "images/Customer2.jpg"
import Customer3 from "images/Customer3.jpeg"

const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col md:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-24 h-24 rounded-full`;
const Quote = tw.blockquote`mt-5 text-[#56D1F6] text-sm md:text-base md:font-medium md:leading-loose`;
const CustomerName = tw.p`mt-5 text-[#FF689B] font-semibold uppercase text-sm tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

export default ({
  subheading = "Testimonials",
  heading = "Customer's Review",
  testimonials = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote:
        "This candy store has the best selection I’ve ever seen! The flavors are amazing, and I always find something new to try. It’s my happy place for sweet treats!",
      customerName: "Charlotte Hale"
    },
    {
      imageSrc: Customer2,
      quote:
        "This store brings back so many memories. The candies taste just like the ones I used to enjoy as a boy. It’s wonderful to share that joy with my grandkids now.",
      customerName: "Mr. George Thompson"
    },
    {
      imageSrc: Customer3,
      quote:
        "I love visiting this store with my kids. The candies are delicious, and the staff is always so friendly. It reminds me of my own childhood!",
      customerName: "Lyyn Taylor"
    }
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        <Testimonials>
          {testimonials.map((testimonial, index) => (
            <TestimonialContainer key={index}>
              <Testimonial>
                <Image src={testimonial.imageSrc} />
                <Quote>"{testimonial.quote}"</Quote>
                <CustomerName>- {testimonial.customerName}</CustomerName>
              </Testimonial>
            </TestimonialContainer>
          ))}
        </Testimonials>
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
