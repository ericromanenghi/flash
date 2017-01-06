var game = new Phaser.Game(SETTINGS.width, SETTINGS.height, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    load_assets();
}

function create() {
    grid.create();
}

function update() {
}