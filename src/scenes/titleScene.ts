class titleScene extends Phaser.Scene {
  constructor() {
    super({ key: "TitleScene" });
  }

  preload() {
    this.load.image("background", "/assets/images/1.png");
  }

  create() {
    this.add.sprite(0, 0, "background").setOrigin(0, 0);
  }

  update() {}
}

export default titleScene;
