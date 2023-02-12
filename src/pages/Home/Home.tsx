import React from "react";
import { FeaturedSpots } from "../../components/FeaturedSpots/FeaturedSpots";
import { MountainSection } from "../../components/MountainSection/MountainSection";
import { SeaSection } from "../../components/SeaSection/SeaSection";
import { Slider } from "../../components/Slider/Slider";
import { Subscribe } from "../../components/Subscribe/Subscribe";

const Homepage = () => {
  return (
    <>
      <FeaturedSpots />
      <SeaSection />
      <Slider />
      <MountainSection />

      <Subscribe />
    </>
  );
};

export default Homepage;
