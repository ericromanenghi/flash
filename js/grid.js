var grid = {
    origin_x: SETTINGS.x_padding,
    origin_y: SETTINGS.y_padding,
    rows: 3,
    cols: 3,
    
    create: function () {
        //distance between stars
        var x_dst = this._compute_distance(SETTINGS.width - 2 * SETTINGS.x_padding, this.rows);
        var y_dst = this._compute_distance(SETTINGS.height - 2 * SETTINGS.y_padding, this.cols);
        
        this.stars = game.add.group();
        
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                var star = this.stars.create(this.origin_x+i*x_dst, this.origin_y+j*y_dst, 'star');
                star.inputEnabled = true;
                star.events.onInputDown.add(function () {console.log('clicked!')}, this);
            }    
        }
    },
    
    _compute_distance: function (size, n) {
        return Math.floor(size / n);        
    }
};