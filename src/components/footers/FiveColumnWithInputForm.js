import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import LogoImage from "images/logo.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";

const Content = tw.div`mx-auto relative z-10 sm:mx-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12 `;

const ColumnHeading = tw.h5`uppercase text-[#FF689B] font-bold`;

const LinkList = tw.ul`mt-6 text-sm text-[#49B8FC] font-medium `;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-[#FFA3D0] hover:text-[#FFA3D0] pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(
  Column
)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-200 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-[#FF689B] focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(
  PrimaryButtonBase
)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none bg-[#FF689B] hover:bg-[#2DB7E3] px-8 py-3`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-[#1893D0]`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-[#FF689B] text-gray-100 hover:bg-[#1893D0] transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default ({ background }) => {
  return (
    <div
      className={`relative ${background} text-sm md:text-base lg:text-lg text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`}
    >
      <Content>
      <SixColumns>
        <Column>
          <ColumnHeading>Main</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Blog</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">FAQs</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Support</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">About Us</Link>
            </LinkListItem>
          </LinkList>
        </Column      >
        
        <Column>
          <ColumnHeading>Why Choose Us?</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Guaranteed Quality</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Satisfying Shopping Experience</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Unique Collections</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Cultural Heritage</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Affordable Prices</Link>
            </LinkListItem>
          </LinkList>
        </Column      >
        
        {/* Kolom Tambahan: Contact Us */}
        <Column>
          <ColumnHeading>Contact Us</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <span>📍 123 Candy Lane, Sweetville</span>
            </LinkListItem>
            <LinkListItem>
              <span>📞 (123) 456-7890</span>
            </LinkListItem>
            <LinkListItem>
              <span>📧 contact@treact.com</span>
            </LinkListItem>
          </LinkList>
        </Column      >
        
        {/* Kolom Tambahan: Our Policies */}
        <Column>
          <ColumnHeading>Our Policies</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Privacy Policy</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Return Policy</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Terms & Conditions</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Cookie Policy</Link>
            </LinkListItem>
          </LinkList>
        </Column      >
        
        <SubscribeNewsletterColumn>
          <SubscribeNewsletterContainer>
            <ColumnHeading>Subscribe to our Newsletter</ColumnHeading>
            <SubscribeText>
              We deliver high quality blog posts written by professionals weekly. And
              we promise no spam.
            </SubscribeText>
            <SubscribeForm method="get" action="#">
              <Input type="email" placeholder="Your Email Address" />
              <SubscribeButton type="submit">Subscribe</SubscribeButton>
            </SubscribeForm>
          </SubscribeNewsletterContainer>
        </SubscribeNewsletterColumn>
      </SixColumns>

        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Treact Inc.</LogoText>
          </LogoContainer>
          <CopywrightNotice>
            &copy; 2018 Treact Inc. All Rights Reserved.
          </CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </div>
  );
};
