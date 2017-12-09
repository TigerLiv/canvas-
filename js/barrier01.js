var barrier01 = Class.extend({
    init: function () {
        this.image = game.R["barrier01"];
        this.cho = 0;
        game.sm.barrier01.push(this);
        this.x = 0;
    },
    update: function (str) {
        if (str == true) {
            this.dx = 20;
            this.x -= this.dx;
        } else {
            this.x -= 6;

        }

        this.cho++;

        this.x1 = game.width + this.x;
        this.x2 = game.width + this.x + 214;
        this.y1 = 150;
        this.y2 = 0;
        //碰撞检测
        if (game.sm.person.x1 > this.x1 && game.sm.person.x2 < this.x2 && (game.sm.person.y1 < this.y1)) {

            game.sm.changeScene(7);
            document.getElementById("gameover").load();
            document.getElementById("gameover").play();

            return;
        }
        if (this.cho > 1) {
            this.cho = 0;
        }
        if (this.x < -800) {
            this.goDie();
        }

    },
    render: function () {
        game.ctx.drawImage(this.image, 505, 0, 427, 400, game.width + this.x, 0, 214, 200);
    },
    goDie: function () {
        game.sm.barrier01 = _.without(barrier01, this);
    }
});