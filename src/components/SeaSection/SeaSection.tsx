import React from "react";

import * as SC from "./SeaSection.styled";

import island from "../../assets/island.jpg";
import { useState } from "react";
import { Button } from "../Button/Button";

export const SeaSection = () => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const text = `There is something about the word sea that allows an immediate sense
          of calm to wash over me. I cant help envisioning myself staring out at
          the ocean on a summer day and smelling the sea salt while my hair
          blows back and forth in the sea breeze. Add in a picnic on the sand
          with a French baguette and some brie cheese on a weekend afternoon and
          it’s like my mind is guiding me on my own mediation through
          imagination. I’m curious. What is it that you picture when you think
          of the sea? I have written about quotes pertaining to the ocean and
          vacation before; my beach quotes post is a popular article. But, I
          noticed that some of you were looking specifically for sea quotes and
          sea captions. That is why I decided to make a post specifically
          dedicated to quotes about the sea and captions for the sea. I’m
          curious. What is it that you picture when you think of the sea? I have
          written about quotes pertaining to the ocean and vacation before; my
          beach quotes post is a popular article. But, I noticed that some of
          you were looking specifically for sea quotes and sea captions. That is
          why I decided to make a post specifically dedicated to quotes about
          the sea and captions for the sea.`;
  return (
    <SC.Wrapper>
      <SC.Img src={island} alt="island" />
      <div>
        <SC.Title>
          Above <br /> The Sea
        </SC.Title>
        <SC.SubDescription>Some description text</SC.SubDescription>
        <SC.Description>
          {isReadMore ? text.slice(0, 400) + "..." : text}
        </SC.Description>

        <Button type="button" onClick={toggleReadMore}>
          {isReadMore ? "Read More" : "Read Less"}
        </Button>
      </div>
    </SC.Wrapper>
  );
};
