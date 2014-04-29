/**
 * Created by Hosuke on 25/04/2014.
 */
var load_state = {
    preload: function() {
        this.game.stage.backgroundColor = '#001f3f';

    },

    create: function() {
        this.game.state.start('menu');
    }
};
