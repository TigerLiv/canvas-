var Barrier02 = Class.extend({
    init: function () {
        this.image = game.R["barrier03"];
        this.x = 0;
        this.height = _.random(100, 400);
        game.sm.barrier02.push(this);
        this.y = 0;

    },
    update: function (str) {
        this.x -= 12;
        if (this.height < 180) {
            this.y++;

        }
        if (this.height > 350) {
            this.y -= 2;

        }
        if (this.x < -3000) {
            this.goDie();
        }
        this.x1 = game.width + this.x;
        this.x2=game.width+this.x+92;
        this.y1=this.height+this.y;
        this.y2=this.height+this.y+66;
        //碰撞
        // console.log(game.sm.person.x1>this.x1,game.sm.person.x2<this.x2,game.sm.person.y1<this.y2,game.sm.person.y2>this.y1);
        if(str!=true){
            if (game.sm.person.x1 > this.x1 && game.sm.person.x2 < this.x2 && (game.sm.person.y1 < this.y2 && game.sm.person.y2 > this.y1)) {

                game.sm.changeScene(7);
                document.getElementById("fly").load();
                document.getElementById("fly").play();

            }

        }
    },
    render: function () {
        game.ctx.drawImage(this.image, 129, 0, 127, 94, game.width + this.x, this.height + this.y, 102, 76);
    },
    goDie: function () {
        game.sm.barrier02 = _.without(game.barrier02, this);
    }
});