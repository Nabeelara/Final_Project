import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled, { css } from "styled-components"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/quality-assurance_17729838.png";
import ShieldIconImage from "images/satisfaction_12282390.png";
import CustomerLoveIconImage from "images/innovation.png";
import WhyChooseUs from "context/whychoose";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const CustomImage = styled.img`
  height: 200px;
  object-fit: cover;
`;


export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Treact</Subheading>}
        heading="A Sweet Haven for Candy Lovers"
        description="We  an e-commerce platform dedicated to candy lovers, offering a sweet and delightful shopping experience. Our Candy Shop features a wide variety of candies, ranging from classic treats to premium confections with unique flavors, tailored for all ages. With an intuitive and attractive website design, customers can easily find their favorite candies or explore new collections. We ensure every product is carefully packaged to maintain quality while providing secure payment methods and fast delivery across all regions."
        imageWrapperCss={tw`flex justify-end`}
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4e/09/7d/getlstd-property-photo.jpg?w=1200&h=-1&s=1"
      />
      <MainFeature3
        subheading={<Subheading>Our Vision</Subheading>}
        heading="Our Commitment to Sweetness"
        description="At Candy Crazy, we believe that every piece of candy should tell a story — a story of joy, connection, and memories. That’s why we go the extra mile to ensure our candies are made from the finest ingredients, maintaining the perfect balance of flavor, texture, and presentation."
        description2="We also understand that candy is more than just a treat—it’s a way to bring people together. Whether it's sharing a box of chocolates with loved ones or surprising a friend with a special gift, we are here to help you create those sweet moments. That's why we constantly innovate, crafting new flavors and unique combinations that will make every occasion extra special. From seasonal delights to exclusive collections, Candy Bliss is your trusted companion in spreading joy, one candy at a time."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhpQ_sZWsCJWsoKFcVS2GlDo2teuEiRT4Bg&s"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We commited to"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Quality Assurance",
            description: "Every candy is sourced from trusted suppliers and crafted with care to meet the highest standards of quality."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Customer Satisfaction",
            description: "Your happiness is our priority. From seamless shopping to reliable delivery, we strive to make every interaction a delightful one."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Innovation in Treats",
            description: "Beyond traditional sweets, we constantly explore new ideas to bring you creative confections that surprise and delight."
          },
        ]}
        linkText=""
      />
      <WhyChooseUs/>

      <TeamCardGrid 
        subheading={<Subheading>Meet the Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
