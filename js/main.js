var game = new Phaser.Game(SETTINGS.width, SETTINGS.height, Phaser.AUTO, 'game_frame');

game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('end', endState);

game.state.start('load');
