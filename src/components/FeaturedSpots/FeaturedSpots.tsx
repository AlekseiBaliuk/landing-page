import React from "react";

import * as SC from "./FeaturedSpots.styled";

import img1 from "../../assets/feature-1.jpg";
import img2 from "../../assets/feature-2.jpg";
import img3 from "../../assets/feature-3.jpg";

export const FeaturedSpots = () => {
  return (
    <SC.Wrapper>
      <SC.InfoWrapper>
        <SC.InfoTitle>Featured Spots</SC.InfoTitle>
        <p>Some text Some text Some text Some text</p>
      </SC.InfoWrapper>
      <SC.ImgWrapper>
        <div>
          <SC.Image src={img1} alt="nature" />
          <SC.ImgTitle>Title</SC.ImgTitle>
          <SC.ImgDescription>Description</SC.ImgDescription>
        </div>
        <div>
          <SC.Image src={img2} alt="nature" />
          <SC.ImgTitle>Title</SC.ImgTitle>
          <SC.ImgDescription>Description</SC.ImgDescription>
        </div>
        <div>
          <SC.Image src={img3} alt="nature" />
          <SC.ImgTitle>Title</SC.ImgTitle>
          <SC.ImgDescription>Description</SC.ImgDescription>
        </div>
      </SC.ImgWrapper>
    </SC.Wrapper>
  );
};
