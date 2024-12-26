import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import ProductList from "components/products/ProductList";
import Sort from "components/sort/Sort";
import Filters from "components/Filters";

export const Products = () => {
  const Container = tw.div`relative bg-yellow-100 text-gray-700 -mb-8 -mx-8 px-4 lg:py-12`;
  const Content = tw.div`w-screen px-4 mx-auto relative z-10`;
  return (
    <AnimationRevealPage>
      <Header />
      <Container className="pt-4">
        <Content>
          <main>
            <div className="section-center products pb-[90px] flex md:gap-12">
              <Filters className="w-[20%] md:w-auto"/>
              <div className="w-[80%] md:w-auto">
                <Sort />
                <ProductList />
              </div>
            </div>
          </main>
        </Content>
      </Container>

      <Footer background="bg-white" />
    </AnimationRevealPage>
  );
};
