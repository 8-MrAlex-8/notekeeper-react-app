import React from "react";
import Card from "./Card";

const heightSet = {
  minHeight: "75dvh",
};

function CardGroup() {
  return (
    <div
      className="flex flex-wrap justify-center items-center gap-4"
      style={heightSet}
    >
      <Card
        content="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book."
        date="August 5, 2024"
      />
      <Card
        content="Wandering foxes often leap through meadows in search of 
      hidden berries and playful shadows. Curious and nimble, they dance beneath 
      the silver moon, weaving quietly between the trees, leaving only soft prints
       behind on mossy earth and fallen leaves."
        date="November 11, 2023"
      />

      <Card
        content="Ancient ruins lie buried beneath sands that shift with every 
      gust of desert wind. Stories of lost cities echo through time, whispered by 
      travelers who roam with maps drawn in faded ink and hope etched deep within 
      their weathered hearts."
        date="June 25, 2022"
      />

      <Card
        content="Robots assemble silently on endless lines, guided by code 
      that hums like a digital heartbeat. Sparks flash in sync with algorithms, 
      crafting futures one precise motion at a time, never pausing to question 
      their metal-borne purpose."
        date="February 7, 2021"
      />

      <Card
        content="The ocean sings a song of endless blue, where ships drift like 
      dreams across the waves. Beneath the surface, coral kingdoms bloom, teeming 
      with life that dances to the rhythm of the tides and the moon's gentle pull."
        date="September 18, 2020"
      />

      <Card
        content="Mountaintops glow in the first light of dawn, their snowy peaks 
      piercing clouds like ancient guardians. Paths twist through pine forests below, 
      where time slows and the world hushes, waiting for footsteps to echo through 
      the stillness."
        date="April 3, 2020"
      />
    </div>
  );
}

export default CardGroup;
