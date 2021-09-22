import React from "react";

const Size: React.FC<{ value: string }> = ({ value }) => (
  <div className={`nose ${value}`} />
);

const sizes = [
  { value: "big", rarity: 3, Component: Size },
  { value: "medium", rarity: 20, Component: Size },
  { value: "tiny", rarity: 77, Component: Size },
];

export default sizes;
