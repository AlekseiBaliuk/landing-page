import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import * as SC from "./Slider.styled";

import img1 from "../../assets/feature-1.jpg";
import img2 from "../../assets/feature-2.jpg";
import img3 from "../../assets/feature-3.jpg";

const images = [{ url: img1 }, { url: img2 }, { url: img3 }];

export const Slider = () => {
  return (
    <SC.Wrapper>
      <SC.InfoWrapper>
        <SC.Title>Title</SC.Title>
        <SC.Text>Text text text text text text text text text</SC.Text>
      </SC.InfoWrapper>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={0.9}
      />
    </SC.Wrapper>
  );
};
