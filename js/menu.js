/**
 * Created by Hosuke on 25/04/2014.
 */

var w = 320;
var h = 480;

var menu_state = {

    create: function() {
        // Call the 'start' function when pressing the spacebar
        this.cursor = this.game.input.keyboard.createCursorKeys();
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        // tap to start
        this.mousePointer = this.game.input.mousePointer;
        this.pointer = this.game.input.pointer1;

        // Logo
        var logo = this.game.add.text(w/2, -180, '测测肺活量', { font: '50px Arial', fill: '#fff' });
        logo.anchor.setTo(0.5, 0.5);
        this.game.add.tween(logo).to({ y: h/2-160 }, 1000, Phaser.Easing.Bounce.Out).start();

        // Defining variables
        var style = { font: "25px Arial", fill: "#ffffff" };
        var x = 160, y = 240;

        // Adding a text centered on the screen
        var text = this.game.add.text(x, y-30, "屏住呼吸同时按住屏幕来\n测试自己一次能憋气多久", style);
        text.anchor.setTo(0.5, 0.5);

        // If the user already played
        if (score > 0) {
            // Display its score
            var score_label = this.game.add.text(x, y+50, "憋气时间: " + score, style);
            score_label.anchor.setTo(0.5, 0.5);
        }

        if (score > highscore) {highscore = score;}

        if (highscore > 0) {
            //Display high score
            var highscore_label = this.game.add.text (x, y+80, '最佳纪录: '+ highscore, style);
            highscore_label.anchor.setTo(0.5, 0.5)
        }

        var footer = this.game.add.text(x,y+200, '© 2014 Hosuke', { font: "15px Arial", fill: "#ffffff" });
        footer.anchor.setTo(0.5, 0.5);

    },

    update: function() {
        if (this.spaceKey.isDown || this.pointer.isDown || this.mousePointer.isDown)
            this.start();
    },

    // Start the actual game
    start: function() {
        this.game.state.start('play');
    }
};