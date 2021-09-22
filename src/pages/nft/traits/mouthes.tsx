import React from "react";

const Mouth: React.FC<{ value: string }> = ({ value }) => (
  <div className={`mouth ${value}`} />
);

const mouthes = [
  { value: "smiling", rarity: 9, Component: Mouth },
  {
    value: "frowning",
    rarity: 1,
    Component: Mouth,
  },
  { value: "closed", rarity: 90, Component: Mouth },
];

export default mouthes;
