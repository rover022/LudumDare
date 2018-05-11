class Carrot extends Phaser.Sprite{
    constructor(game: Phaser.Game, x: number, y: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number) {
        super(game, x, y, "images");
        this.frameName = "carrot.png";

        // scale up!
        this.smoothed = false;
        this.scale.x = 2;
        this.scale.y = 2;

        // center rotations
        this.anchor.setTo(0.5, 0.5);

        this.game.physics.arcade.enableBody(this);
        this.body.setSize(6, 6, 0, 0);
        this.body.rotation = game.rnd.realInRange(-180, 180);

        // automatically kill after 15 seconds
        this.lifespan = 15000;
    }
}