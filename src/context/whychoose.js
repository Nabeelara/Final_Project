import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = tw.div`max-w-screen-xl mx-auto py-20 px-6 bg-gradient-to-r from-pink-300 to-yellow-200`;

const Title = tw.h1`text-4xl font-extrabold text-center text-pink-600`;
const Subheading = tw.h2`md:text-xl lg:text-2xl mt-4 text-center text-orange-500`;
const Description = tw.p` md:text-base lg:text-lg text-center mt-4 text-gray-800 max-w-3xl mx-auto font-medium`;

const PlanList = tw.ul`mt-10 space-y-8`;

const PlanItem = tw.li`bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300`;

const PlanTitle = tw.h3`md:text-lg lg:text-xl font-semibold text-pink-600`;
const PlanDescription = tw.p`md:text-sm lg:text-base text-gray-700 mt-2`;

const CTASection = tw.div`mt-16 text-center`;
const CTAButton = tw.button`bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-700 transition duration-300`;

const FuturePlans = () => {
  const plans = [
    {
      title: "Sweet New Flavors",
      description: "We’re introducing unique, mouth-watering flavors like bubblegum licorice, and strawberry-fudge truffles that will make your taste buds dance with joy!"
    },
    {
      title: "Candy Subscription Boxes",
      description: "Get a monthly box filled with a variety of new and exclusive candies delivered right to your door. It's the sweetest surprise each month!"
    },
    {
      title: "Sustainability in Every Bite",
      description: "We’re going green! Our new packaging will be 100% eco-friendly, and we’re working on sourcing natural, sustainable ingredients for our treats."
    },
    {
      title: "Collaboration with Local Artisans",
      description: "We’re partnering with local candy makers to bring you limited-edition, handcrafted treats that you won’t find anywhere else."
    },
    {
      title: "Pop-Up Candy Experiences",
      description: "We’ll be hosting pop-up shops in various cities where you can taste our best-selling treats and discover new limited-time flavors!"
    }
  ];

  return (
    <Container>
      <Title>Our Sweet Future Plans</Title>
      <Subheading>Exciting New Candy Creations and Initiatives</Subheading>
      <Description>
        At Sugar Crazy, we believe in the magic of candy and the joy it brings. We’re always innovating and looking ahead. Here are some of our upcoming plans that we can’t wait to share with you!
      </Description>

      <PlanList>
        {plans.map((plan, index) => (
          <PlanItem key={index}>
            <PlanTitle>{plan.title}</PlanTitle>
            <PlanDescription>{plan.description}</PlanDescription>
          </PlanItem>
        ))}
      </PlanList>

      <CTASection>
        <CTAButton onClick={() => alert("Stay tuned for updates and new flavors!")}>
          Stay Updated
        </CTAButton>
      </CTASection>
    </Container>
  );
};

export default FuturePlans;
