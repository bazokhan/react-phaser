import Phaser from "phaser";

const createGame = () =>
  new Phaser.Game({
    type: Phaser.AUTO,
    width: 640,
    height: 360,
  });

export default createGame;
