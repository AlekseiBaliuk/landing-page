import React, { useState } from "react";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import * as SC from "./Header.styled";

export const Header = () => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const text = `There is something about the word sea that allows an immediate sense
          of calm to wash over me. I cant help envisioning myself staring out at
          the ocean on a summer day and smelling the sea salt while my hair
          blows back and forth in the sea breeze.`;
  return (
    <SC.Header>
      <SC.Wrapper>
        <SC.LogoLink to="/">Logo</SC.LogoLink>
        <div>
          <SC.HeaderLink to="collection">My collection</SC.HeaderLink>
          <SC.Decor>|</SC.Decor>
          <SC.HeaderLink to="Registration">Registration</SC.HeaderLink>
        </div>
      </SC.Wrapper>
      <HeaderNav />

      <SC.HeaderCard>
        <SC.Title>This is Title</SC.Title>
        <SC.Text>{isReadMore ? text.slice(0, 100) + "..." : text}</SC.Text>
        <SC.Button type="button" onClick={toggleReadMore}>
          {isReadMore ? "Read More" : "Read Less"}
        </SC.Button>
      </SC.HeaderCard>
    </SC.Header>
  );
};
