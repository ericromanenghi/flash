var loadState = {
    preload: function () {
        game.load.image('background', 'assets/background.png');
        game.load.image('logo', 'assets/logo.png');
        game.load.image('star', 'assets/star.png');
        
        game.load.bitmapFont('carrier_command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
    },
    
    create: function () {
        game.state.start('menu');
    }
}