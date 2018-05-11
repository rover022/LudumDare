class Block extends Phaser.Sprite {
    rightFace: number;
    bottomFace: number;
    leftFace: number;
    topFace: number;

    constructor(game: Phaser.Game, x: number, y: number, leftFace: number, aboveFace: number) {
        super(game, x, y, "images");
        this.leftFace = leftFace;
        this.topFace = aboveFace;
        this.rightFace = game.rnd.integerInRange(0, 1);
        this.bottomFace = game.rnd.integerInRange(0, 1);

        this.frameName = "tileset_dirt" + "000" + getFrame(this, this.leftFace, this.topFace, this.rightFace, this.bottomFace) + ".png";

        // scale up! //
        this.smoothed = false;
        this.scale.x = 2;
        this.scale.y = 2;

        this.anchor.setTo(0.5, 0.5);
        this.x += this.width / 2;
        this.y += this.height / 2;
    }
}

function getFrame(block, left: number, top: number, right: number, bottom: number): number {
    let type: number = left * 1000 + top * 100 + right * 10 + bottom;
    let sum: number = left + top + right + bottom;
    let frameNum: number = 0;

    if (sum !== 2) {
        frameNum = sum;
        if (type === 1) block.angle = 180;
        if (type === 10) block.angle = 90;
        if (type === 1000) block.angle = 270;
        if (type === 1011) block.angle = 90;
        if (type === 1101) block.angle = 180;
        if (type === 1110) block.angle = 270;
    } else {
        if (type === 11) {
            frameNum = 2;
            block.angle = 90;
        }
        else if (type === 110) {
            frameNum = 2;
        }
        else if (type === 101) {
            frameNum = 5;
        }
        else if (type === 1100) {
            frameNum = 2;
            block.angle = 270;
        }
        else if (type === 1010) {
            frameNum = 5;
            block.angle = 90;
        }
        else {
            frameNum = 2;
            block.angle = 180;
        }
    }

    return frameNum;
};