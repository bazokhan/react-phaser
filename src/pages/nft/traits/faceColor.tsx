import React from "react";

const FaceColor: React.FC<{ value: string }> = ({ value }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: value,
    }}
  />
);

const faceColors = [
  {
    value: "#2ECC71",
    rarity: 1,
    Component: FaceColor,
  },
  {
    value: "#3498DB",
    rarity: 3,
    Component: FaceColor,
  },
  {
    value: "#9B59B6",
    rarity: 23,
    Component: FaceColor,
  },
  {
    value: "#E67E22",
    rarity: 33,
    Component: FaceColor,
  },
  {
    value: "#ECF0F1",
    rarity: 40,
    Component: FaceColor,
  },
];

export default faceColors;
