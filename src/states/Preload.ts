class Preloade extends Phaser.State {
    loadbar = null;
    ready = false;
    waiting = false;

    preload() {
        this.loadbar = this.add.sprite(60, 0, 'preloader');
        this.loadbar.anchor.setTo(0, 0.5);
        this.loadbar.y = this.game.height / 2;
        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.setPreloadSprite(this.loadbar);


        this.load.atlas('images', R.URL + 'assets/atlas.png', R.URL + 'assets/atlas.json');
        //this.load.audio('atlas', [R.URL + 'assets/atlas.ogg', R.URL + 'assets/atlas.mp3'], true);
    }

    create() {
        this.loadbar.cropEnabled = false;
    }

    update() {
        if (!!this.ready && !this.waiting) {
            // A time delay is necessary to get the google webfonts to work.
            // This is a known issue with Phaser.
            this.game.time.events.add(1000, function () {
                this.game.state.start('menu');
            }, this);
            this.game.add.tween(this.loadbar).to({alpha: 0}, 1000, Phaser.Easing.Quadratic.InOut, true);
            this.waiting = true;
        }
    }

    onLoadComplete() {
        this.ready = true;
    }

}