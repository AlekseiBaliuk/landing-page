import React, { ReactNode } from "react";

import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

import { Container } from "../Container/Container";
import * as SC from "./Footer.styled";

export const Footer = () => {
  return (
    <Container>
      <SC.Footer>
        <SC.FooterLogo to="/">Title</SC.FooterLogo>
        <div>© 2012-2023</div>
        <SC.SocialsWrapper>
          <SC.SocialLink
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram size="24px" fill="black" />
          </SC.SocialLink>

          <SC.SocialLink
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineFacebook size="24px" fill="black" />
          </SC.SocialLink>

          <SC.SocialLink
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter size="24px" fill="black" />
          </SC.SocialLink>
        </SC.SocialsWrapper>
      </SC.Footer>
    </Container>
  );
};
