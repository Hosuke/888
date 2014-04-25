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
        this.touch = this.game.touch;
        //TODO : tap to start
        //this.touch.onTap.add(this.start);

        // Background
        // TODO : Background

        // Logo
        var logo = this.game.add.text(w/2, -150, 'Game Title', { font: '50px Arial', fill: '#fff' });
        logo.anchor.setTo(0.5, 0.5);
        this.game.add.tween(logo).to({ y: h/2-80 }, 1000, Phaser.Easing.Bounce.Out).start();

        // Defining variables
        var style = { font: "30px Arial", fill: "#ffffff" };
        var x = 160, y = 240;

        // Adding a text centered on the screen
        var text = this.game.add.text(x, y-0, "Press space to start", style);
        text.anchor.setTo(0.5, 0.5);

        // If the user already played
        if (score > 0) {
            // Display its score
            var score_label = this.game.add.text(x, y+50, "score: " + score, style);
            score_label.anchor.setTo(0.5, 0.5);
        }

        if (score > highscore) {highscore = score;}

        if (highscore > 0) {
            //Display high score
            var highscore_label = this.game.add.text (x, y+100, 'high score: '+ highscore, style);
            highscore_label.anchor.setTo(0.5, 0.5)
        }

    },

    update: function() {
        if (this.spaceKey.isDown)
            this.start();
    },

    // Start the actual game
    start: function() {
        this.game.state.start('play');
    }
};