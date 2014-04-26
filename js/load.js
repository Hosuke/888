/**
 * Created by Hosuke on 25/04/2014.
 */
var load_state = {
    preload: function() {
        this.game.stage.backgroundColor = '#ff851b';

    },

    create: function() {
        this.game.state.start('menu');
    }
};
