var GEM_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class Gem extends Phaser.Sprite {
    private gemValue: number;
    constructor(game: Phaser.Game, x: number, y: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number) {
        super(game, x, y, "images");
        // scale up!


        this.gemValue = this.game.rnd.integerInRange(0, 9);
        this.frameName = "gems000" + this.gemValue + ".png";


        // scale up!
        this.smoothed = false;
        this.scale.x = 2;
        this.scale.y = 2;
        //
        // center rotations
        this.anchor.setTo(0.5, 0.5);

        this.game.physics.arcade.enableBody(this);
        this.body.setSize(8, 8, 0, 0);
        this.body.rotation = game.rnd.realInRange(-180, 180);

        // automatically kill after 15 seconds
        this.lifespan = 15000;
    }

    value() {
        return GEM_VALUES[this.gemValue];
    }
}