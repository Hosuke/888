/**
 * Created by Hosuke on 25/04/2014.
 */
var game = new Phaser.Game(320, 480, Phaser.AUTO, 'game_div');

var score = 0;
var highscore = 0;

game.state.add('load', load_state);
game.state.add('menu', menu_state);
game.state.add('play', play_state);

game.state.start('load');