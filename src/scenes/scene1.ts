class scene1 extends Phaser.Scene {
  player: Phaser.Physics.Arcade.Sprite | null;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys | null;
  keyboardMap: Record<string, boolean>;

  constructor() {
    super("Scene 1");
    this.player = null;
    this.cursors = null;
    this.keyboardMap = {};
  }

  preload() {
    this.load.image("sky", "/sky.png");
    this.load.image("platform", "/platform.png");
    this.load.image("star", "/star.png");
    this.load.image("bomb", "/bomb.png");
    this.load.spritesheet("dude", "/boy2.png", {
      frameWidth: 256,
      frameHeight: 256,
    });
  }

  create() {
    this.add.image(400, 300, "sky").setScale(8, 1);
    this.add.text(20, 20, "Hello world", { fontSize: "32px", color: "#fff" });
    this.player = this.physics.add.sprite(200, 20, "dude", 4).setScale(0.3);
    this.player.setCollideWorldBounds(true);

    const platforms = this.physics.add.staticGroup();

    platforms.create(100, 200, "platform");
    platforms.create(400, 400, "platform");
    platforms.create(400, 580, "platform").setScale(4, 1).refreshBody();
    platforms.create(2400, 580, "platform").setScale(4, 1).refreshBody();

    this.physics.add.collider(this.player, platforms);

    // this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on("keydown", (e: any) => {
      this.keyboardMap[e.key] = true;
    });
    this.input.keyboard.on("keyup", (e: any) => {
      this.keyboardMap[e.key] = false;
    });

    const bomb = this.physics.add.sprite(400, 300, "bomb");

    bomb.setBounce(0.5);

    this.physics.add.collider(bomb, platforms);

    bomb.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, bomb, (e) => console.log(e));
    this.physics.world.setBounds(0, 0, 3000, 600);
    this.cameras.cameras[0].startFollow(this.player, true, 1, 0, 0, -280);

    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 9 }),
      frameRate: 24,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 5 }],
      frameRate: 20,
    });
  }

  update() {
    // if (this.cursors?.up.isDown) {
    //   this.player?.setVelocityY(-200);
    // }
    if (
      this.keyboardMap.ArrowUp
      // && this.player?.body.touching.down
    ) {
      this.player?.setVelocityY(-200);
    }
    if (this.keyboardMap.ArrowRight) {
      this.player?.setVelocityX(300);
      this.player?.setScale(0.3, 0.3);
      this.player?.anims.play("run", true);
    } else if (this.keyboardMap.ArrowLeft) {
      this.player?.setVelocityX(-300);
      this.player?.setScale(-0.3, 0.3);
      this.player?.anims.play("run", true);
    } else {
      this.player?.setVelocityX(0);
      this.player?.anims.play("turn");
    }
  }
}

export default scene1;
