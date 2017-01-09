var background = {
    init: function () {
        this.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'background');
    },
    move: function () {
        this.background.tilePosition.x += 2;
    }
}