/**
 * Created by Hosuke on 25/04/2014.
 */
var play_state = {

    // No more 'preload' function, since it is already done in the 'load' state

    create: function() {
        score = 0;
        document.getElementById('star').style.display = 'none';
        var style = { font: "20px Arial", fill: "#ffffff" };
        this.pressed = false;
        this.str8 = '8';
        this.counter = 1;
        this.text =  this.game.add.text(160, 240, this.str8, style);
        this.text.anchor.setTo(0.5, 0.5);

        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.mousePointer = this.game.input.mousePointer;
        this.pointer = this.game.input.pointer1;

        //  Create Timer
        this.timer = game.time.create(false);
        this.timer.loop(100, this.addText, this);
        this.timer.start();

        // Instruction text
        this.instructionText =  this.game.add.text(160, 40, '按住屏幕开始', style);
        this.instructionText.anchor.setTo(0.5, 0.5);


    },

    update: function() {
        if ((!this.pressed)&&(this.spaceKey.isDown || this.pointer.isDown || this.mousePointer.isDown))
        {
            this.gameStart();
        }

        if (this.pressed && !(this.spaceKey.isDown || this.pointer.isDown || this.mousePointer.isDown))
        {
            this.gameOver();
        }

    },

    gameStart: function(){
        // Another timer to record playing time
        this.startTime = Math.floor(this.game.time.time / 10) % 100000;
        this.instructionText.setText('');

        //first pressed
        this.pressed = true;

    },

    addText: function(){
        if (this.spaceKey.isDown || this.pointer.isDown || this.mousePointer.isDown) {
            // TODO : add 8
            this.str8 += '8';
            this.counter += 1;
            if (this.counter % 24 == 0)
            {this.str8 += '\n';}
            this.text.setText(this.str8);
        }
    },

    gameOver: function(){
        this.endTime = Math.floor(this.game.time.time / 10) % 100000;
        score = (this.endTime - this.startTime)/100;
        this.game.time.events.remove(this.timer);
        var msg = '';
        if (score>20) {msg = '不错！\n'}
        if (score>30) {msg = '哎哟，不错喔！\n'}
        if (score>40) {msg = '很屌嘛！\n'}
        if (score>50) {msg = '你是不是练过？\n'}
        if (score>60) {msg = '超人水平！！\n'}
        if (score>300) {msg = '你确定你没有开挂？\n'}
        if (score>1000) {msg = '=。=这是世界纪录啊！！！\n'}
        alert(msg+'您这次憋了'+score+'秒\n共生成了'+this.counter+'个8!');
        document.getElementById('star').style.display = 'block';
        this.game.state.start('menu');
    }

};