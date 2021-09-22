import React, { useEffect } from "react";
import createGame from "../../games/game2";
import titleScene from "../../scenes/titleScene";

const Game1 = () => {
  useEffect(() => {
    const game = createGame();
    game.scene.add("TitleScene", titleScene);
    game.scene.start("TitleScene");
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div />;
};

export default Game1;
