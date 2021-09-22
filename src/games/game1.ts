import Phaser from "phaser";
import scene1 from "../scenes/scene1";
import scene2 from "../scenes/scene2";

const createGame = () =>
  new Phaser.Game({
    type: Phaser.AUTO,
    physics: {
      default: "arcade",
      arcade: { gravity: { y: 300 }, debug: true },
    },
    width: 1200,
    height: 600,
    scene: [scene1, scene2],
  });

export default createGame;
