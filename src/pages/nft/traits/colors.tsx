import React from "react";

const Color: React.FC<{ value: string }> = ({ value }) => (
  <>
    <div className={`circle ${value}`} />
    <div className={`circle2 ${value}`} />
  </>
);

const colors = [
  {
    value: "red",
    rarity: 1,
    Component: Color,
  },
  {
    value: "orange",
    rarity: 13,
    Component: Color,
  },
  {
    value: "green",
    rarity: 23,
    Component: Color,
  },
  {
    value: "blue",
    rarity: 33,
    Component: Color,
  },
  {
    value: "black",
    rarity: 30,
    Component: Color,
  },
];

export default colors;
