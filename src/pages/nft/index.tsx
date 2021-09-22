import React, { useEffect, useMemo } from "react";
import Robot from "./classes/Robot";
import Trait from "./classes/Trait";
import "./nft.css";
import colors from "./traits/colors";
import faceColors from "./traits/faceColor";
import mouthes from "./traits/mouthes";
import sizes from "./traits/sizes";

const amount = 10000;

const robots = Array(amount)
  .fill(0)
  .map(() => new Robot())
  .map((robot: Robot) => ({
    name: robot.name,
    chance: `${(robot.rarity * 100).toFixed(4)}`,
    traits: robot.traitValues,
  }));

const robotsHash = robots.reduce((acc: Record<string, number>, robot) => {
  const id = robot.traits.map((t) => t.value).join("");
  if (acc[id]) {
    acc[id] += 1;
  } else {
    acc[id] = 1;
  }
  return acc;
}, {});

const rendered: string[] = [...robots]
  .sort((a, b) => Number(a.chance) - Number(b.chance))
  .map((robot) => robot.traits.map((t: Trait) => t.value).join(""));

const Nft = () => {
  return (
    <div id="app">
      <div style={{ width: "100%" }}>
        <p>These are {amount} robots randomly generated from traits</p>
        <p>Traits are:</p>
        <div style={{ display: "flex" }}>
          <div>
            <h2>Eye Color</h2>
            {colors.map((color) => (
              <div
                key={color.value}
                style={{ display: "flex", margin: 0, padding: 0 }}
              >
                <p style={{ margin: "5px", padding: 0, color: color.value }}>
                  Value: {color.value}
                </p>
                <p
                  style={{
                    margin: "5px",
                    padding: 0,
                    color:
                      color.rarity < 0.05
                        ? "black"
                        : color.rarity < 2
                        ? "red"
                        : color.rarity < 5
                        ? "orange"
                        : "white",
                  }}
                >
                  Rarity: {color.rarity}% or less of all generated
                </p>
              </div>
            ))}
          </div>
          <div>
            <h2>Face Color</h2>
            {faceColors.map((color) => (
              <div
                key={color.value}
                style={{ display: "flex", margin: 0, padding: 0 }}
              >
                <p style={{ margin: "5px", padding: 0, color: color.value }}>
                  Value: {color.value}
                </p>
                <p
                  style={{
                    margin: "5px",
                    padding: 0,
                    color:
                      color.rarity < 0.05
                        ? "black"
                        : color.rarity < 2
                        ? "red"
                        : color.rarity < 5
                        ? "orange"
                        : "white",
                  }}
                >
                  Rarity: {color.rarity}% or less of all generated
                </p>
              </div>
            ))}
          </div>
          <div>
            <h2>Mouth Shape</h2>
            {mouthes.map((color) => (
              <div
                key={color.value}
                style={{ display: "flex", margin: 0, padding: 0 }}
              >
                <p style={{ margin: "5px", padding: 0, color: color.value }}>
                  Value: {color.value}
                </p>
                <p
                  style={{
                    margin: "5px",
                    padding: 0,
                    color:
                      color.rarity < 0.05
                        ? "black"
                        : color.rarity < 2
                        ? "red"
                        : color.rarity < 5
                        ? "orange"
                        : "white",
                  }}
                >
                  Rarity: {color.rarity}% or less of all generated
                </p>
              </div>
            ))}
          </div>
          <div>
            <h2>Nose Size</h2>
            {sizes.map((color) => (
              <div
                key={color.value}
                style={{ display: "flex", margin: 0, padding: 0 }}
              >
                <p style={{ margin: "5px", padding: 0, color: color.value }}>
                  Value: {color.value}
                </p>
                <p
                  style={{
                    margin: "5px",
                    padding: 0,
                    color:
                      color.rarity < 0.05
                        ? "black"
                        : color.rarity < 2
                        ? "red"
                        : color.rarity < 5
                        ? "orange"
                        : "white",
                  }}
                >
                  Rarity: {color.rarity}% or less of all generated
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
      {[...robots]
        .sort((a, b) => Number(a.chance) - Number(b.chance))
        .map((robot, idx) => {
          const id = robot.traits.map((t: Trait) => t.value).join("");
          const copies = robotsHash[id];

          if (rendered.indexOf(id) !== idx) return null;

          return (
            <div
              key={id}
              className="container"
              style={{
                borderColor:
                  Number(robot.chance) < 0.05
                    ? "black"
                    : Number(robot.chance) < 2
                    ? "red"
                    : Number(robot.chance) < 5
                    ? "orange"
                    : "green",
              }}
            >
              <p>{robot.name}</p>
              <hr />
              <p>{robot.chance}%</p>
              <hr />
              <p>{copies} copy</p>
              <hr />
              <div className="robot" style={{ position: "relative" }}>
                {robot.traits.map((t: Trait) =>
                  t.Component ? <t.Component key={id} value={t.value} /> : null
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Nft;
