class R {
    public static URL: string = "resource/";
    public static P_PAIHAI: string = "my_awesome_leaderboard.";
    static PREVIDEO_AD: string = "433380667096621_433969653704389";
    static PRELOAD_AD: String = "433380667096621_433969653704389";
}

class Boot extends Phaser.State {
    preload() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.align(true, true);
        this.load.image('preloader', R.URL + 'assets/preloader.png');
    };

    create() {
        this.game.input.maxPointers = 1;
        this.game.state.start('preload');
    }
}


