class GameOver extends Phaser.State {
    private titleText: Phaser.Text;
    private congratsText: Phaser.Text;
    private instructionText: Phaser.Text;

    preload() {

    };

    create() {

        let style = {font: '65px 微软雅黑', fill: '#ffffff', align: 'center'};
        this.titleText = this.game.add.text(this.game.world.centerX, 100, '游戏结束!', style);
        this.titleText.anchor.setTo(0.5, 0.5);

        this.congratsText = this.game.add.text(this.game.world.centerX, 200,
            'You Win!', {
            font: '32px Arial',
            fill: '#ffffff',
            align: 'center'
        });
        this.congratsText.anchor.setTo(0.5, 0.5);

        this.instructionText = this.game.add.text(this.game.world.centerX, 300,
            'Click To Play Again', {
            font: '16px Arial',
            fill: '#ffffff',
            align: 'center'
        });
        this.instructionText.anchor.setTo(0.5, 0.5);
    }

    update() {
        if (this.game.input.activePointer.justPressed()) {
            this.game.state.start('play');
        }
    }
}