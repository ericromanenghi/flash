var endState = {
    create: function () {
        background.init();
        
        endBox = game.add.bitmapText(0, 0, 'carrier_command', 'Your score is ' + score.score, 24);
        endBox.x = game.world.centerX - endBox.width / 2;
        endBox.y = game.world.centerY - endBox.height / 2;
    },
    
    update: function () {
        background.move();
    }
}