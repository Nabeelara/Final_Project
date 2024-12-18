import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import ProductGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import candyImage from "images/candyy.jpg";
import Maps from "components/cards/Artist";

export default () => {
  const HighlightedText = tw.span`
  bg-gradient-to-r from-[#2CB8E3] to-[#1893D0] text-gray-100 px-4 
  transform -skew-x-12 inline-block shadow-md hover:shadow-lg transition duration-300
`;

const HighlightedTextInverse = tw.span`
  bg-gradient-to-r from-gray-200 to-gray-100 text-red-900 px-4 
  transform -skew-x-12 inline-block shadow-md hover:shadow-lg transition duration-300
`;

const Description = tw.span`
inline-block mt-8 ml-8 text-gray-700 text-lg leading-relaxed 
tracking-wide sm:ml-16 sm:text-xl sm:leading-loose
`;

  const description="Explore Our Sweet Selection, from fruity gummies to creamy chocolates, our collection is crafted to bring happiness in every bite. Indulge in our unique creations, perfect for gifts, celebrations, or a treat just for you!"

  // TODO
  // 1. Panggil component yang harusnya ada di halaman ini
  // 2. Modifikasi styling dan value property yang dimiliki component

  return (
    <AnimationRevealPage>
        <Hero
  heading={
    <>
      Discover{" "}
      <HighlightedText>of Sweetness!</HighlightedText>
    </>
  }
  description={
    <span
      style={{
        textShadow: "2px 2px 4px rgba(0.5, 0.5, 0.5, 0.7)",
        fontSize: "1.1rem",
        lineHeight: "1.8rem",
      }}
    >
      Welcome to Candy Wonderland!<br />
      Dive into a world of sweetness where every treat tells a story of joy, love, and delicious indulgence.
      From handcrafted chocolates to colorful candies, we’re here to make your sweetest dreams come true.
    </span>
  }
  imageSrc={candyImage}
  imageCss="w-full h-auto rounded-lg shadow-2xl transition transform hover:scale-105"
  imageDecoratorBlob={true}
  primaryButtonText="Show More"
  primaryButtonCss={tw`bg-[#2CB8E3] hover:bg-[#1893D0] text-gray-100 px-8 py-4 rounded-lg shadow-md transition-all`}
/>


      <Description className="ml-8">{description} </Description>

      <MainFeature/>

      <ProductGrid/>

      <MainFeature2/>

      <Maps/>

      <Testimonial/>

      <Features/>

      <DownloadApp
        text={
          <>
            People around you are ordering delicious meals using the{" "}
            <HighlightedTextInverse>Treact App.</HighlightedTextInverse>
          </>
        }
      />
      <Footer background={"bg-gray-200"} />
    </AnimationRevealPage>
  );
};
