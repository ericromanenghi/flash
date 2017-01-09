var menuState = {
    create: function () {
        background.init();
        
        var logoImg = game.cache.getImage('logo'); 
        var logoX = game.world.centerX - logoImg.width / 2;
        var logoY = game.world.centerY - logoImg.height / 2;
        logo = game.add.sprite(logoX, logoY, 'logo');
        
        
        startButton = game.add.bitmapText(0, 0, 'carrier_command', 'Press here to start', 16);
        startButton.y = (game.world.height - game.world.centerY) / 2 + game.world.centerY - startButton.height / 2;
        startButton.x = game.world.centerX - startButton.width / 2;
        startButton.inputEnabled = true;
        
        startButton.events.onInputDown.add(
            function () {
                game.state.start('play');
            },
            this
        );
    },
    
    update: function () {
        background.move();
    }
};