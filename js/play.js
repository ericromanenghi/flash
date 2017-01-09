var grid = {
    rows: 3,
    cols: 3,
    
    getWidth: function () {
        var min_x = SETTINGS.x_padding;
        var max_x = game.world.width - SETTINGS.x_padding;
        return max_x - min_x;
    },
    
    getHeight: function () {
        var min_y = SETTINGS.y_padding;
        var max_y = game.world.height - SETTINGS.y_padding;
        return max_y - min_y;
    },
    
    getRandomX: function () {
        return this.getWidth() * Math.random() + SETTINGS.x_padding;
    },
    
    getRandomY: function () {
        return this.getHeight() * Math.random() + SETTINGS.y_padding;
    },
    
    starSelected: function (starClicked) {
        starClicked.kill();
        score.add(1);
        score.updateBox();
        this.addStar();
    },
    
    addStar: function () {
        var star = game.add.button(this.getRandomX(), this.getRandomY(), 'star', this.starSelected, this);
        star.scale.set(1.5, 1.5);
        this.stars.add(star);
    },
    
    init: function () {
        this.stars = game.add.group();

        this.addStar();
    },
};

var score = {
    score: 0,
    init: function () {
        this.box = game.add.bitmapText(0, 0, 'carrier_command', this.updateText(), 16);
        this.box.y = this.box.height + 5;
        this.box.x = game.world.width - this.box.width - 20;
    },
    add: function (n) {
        this.score += n; 
    },
    updateBox: function () {
        this.box.text = this.updateText();
    },
    updateText: function () {
        return 'score: ' + this.score;
    }
}

var timer = {
    seconds: 0,
    init: function () {
        this.box = game.add.bitmapText(0, 0, 'carrier_command', this.updateText(), 16);
        this.box.y = this.box.height + 5;
        this.box.x = 20;
        this.timer = game.time.events.repeat(Phaser.Timer.SECOND, SETTINGS.duration, this.step, this);
        this.timer.timer.onComplete.add(this.trigerEnd, this);
    },
    add: function (n) {
        this.seconds += 1;  
    },
    step: function () {
        this.add(1);
        this.updateBox();
    },
    trigerEnd: function () {
        game.state.start('end');
    },
    updateBox: function () {
        this.box.text = this.updateText();
    },
    updateText: function () {
        var remainingTime = SETTINGS.duration - this.seconds;
        return 'Remaining time: ' + remainingTime;
    }
}

var playState = {
    create: function () {
        background.init();
        grid.init();
        timer.init();
        score.init();
    },
    
    update: function () {
        background.move();
    }
};