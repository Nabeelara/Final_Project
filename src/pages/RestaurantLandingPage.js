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

import Maps from "components/cards/Artist";

export default () => {
  const HighlightedText = tw.span`bg-yellow-800 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-red-900 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8 font-serif`;
  const imageCss = tw`rounded-4xl`;
  const description="Explore the Uniqueness and Elegance of Antiques at Our Shop! Each Item Tells a Story, Bring a Classic Touch to Your Home Now!"

  // TODO
  // 1. Panggil component yang harusnya ada di halaman ini
  // 2. Modifikasi styling dan value property yang dimiliki component

  return (
    <AnimationRevealPage>
        <Hero
          heading={
            <>
              Discover{" "}
              <HighlightedText>The Beauty of The Past</HighlightedText>
            </>
          }
          description="Antiques offer a unique charm, showcasing history's elegance and craftsmanship. Each piece tells a story, adding character and timeless beauty to any space. Discover treasures that transcend generations."
          imageSrc=""
          imageCss={""}
          imageDecoratorBlob={true}
          primaryButtonText="Show More"
        />

      <Description>{description} </Description>

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
