/**
 * Created by Hosuke on 25/04/2014.
 */
var play_state = {

    // No more 'preload' function, since it is already done in the 'load' state

    create: function() {
        score = 5;
        var style = { font: "30px Arial", fill: "#ffffff" };
        this.pressed = false;
        this.str8 = '8';
        this.counter = 1;
        this.text =  this.game.add.text(160, 240, this.str8, style);
        this.text.anchor.setTo(0.5, 0.5);
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    },

    update: function() {
        if (this.spaceKey.isDown) {
            //first pressed
            this.pressed = true;
            // TODO : add 8
            this.str8 += '8';
            this.counter += 1;
            if (this.counter % 15 == 0)
            {this.str8 += '\n';}
            this.text.setText(this.str8);
        }

        if (this.pressed && !(this.spaceKey.isDown))
        {
            this.gameOver();
        }
        //this.gameOver();
    },

    gameOver: function(){
        this.game.time.events.remove(this.timer);
        this.game.state.start('menu');
    }

};