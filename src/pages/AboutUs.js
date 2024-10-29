import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

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
        heading="Finding Beauty in Every Story."
        description="Finding beauty in every story is about embracing the timeless allure of antiques, where every item carries a piece of history and a rich narrative. Each scratch, mark, or worn edge tells the story of its journey through time, adding character and meaning, transforming these objects into cherished pieces of art that connect us to the past."
        description2="At our online store, we're all about finding beauty in every story. Each antique we offer carries a rich history and unique charm, connecting you to the past. Our passion is to curate meaningful pieces, helping you bring home timeless treasures with a story to tell."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://i.pinimg.com/474x/54/37/b1/5437b197f13ef459109177bc8e0862d4.jpg"
      />
      <MainFeature3
        subheading={<Subheading>Our Vision</Subheading>}
        heading="Inheriting Tradition, Celebrating History."
        description="Embodies our commitment to preserving the timeless beauty of the past. At our store, we specialize in curating unique antique pieces that carry stories across generations, offering a window into history for collectors and enthusiasts alike. Our passion for heritage is reflected in every item, ensuring that tradition lives on through the treasures we share."
        description2=""
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://i.pinimg.com/564x/f5/b1/4e/f5b14e84050ebc5412a62fd8fb8238a2.jpg"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "Antique Lovers Unite! Our knowledgeable team is here for you 24/7, ready to provide guidance and support for your vintage treasures."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Strength in Unity – Our talented team works collaboratively to ensure each antique tells its story and meets your expectations!"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Your Happiness Matters – Our commitment to customer satisfaction means we’re always here to assist you and address your needs!"
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
