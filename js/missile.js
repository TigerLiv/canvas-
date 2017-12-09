var Missile = Class.extend({
    init: function () {
        this.image = game.R["attack"];

        // this.image01=game.R["eat"];
        this.x = 0;
        this.deg = 0;
        this.height = _.random(180, 360);
        game.sm.missile.push(this);
        // this.xx=0;
    },
    update: function (str) {

        if (str == true) {
            this.dx = 20;
            this.x -= this.dx;
        } else {
            this.x -= 7;

        }
        this.x1 = game.width + this.x ;
        this.x2 = game.width + this.x ;
        this.y1 = this.height ;
        this.y2 = this.height;
        //console.log(this.x1,this.x2,this.y1,this.y2);
        //碰撞检测
       // console.log(game.person.x1 > this.x1 , game.person.x2 < this.x2 , game.person.y2 <this.y2 , game.person.y1 > this.y1);
        if (game.sm.person.x1 > this.x1 && game.sm.person.x2 < this.x2 && (game.sm.person.y2 > this.y2 && game.sm.person.y1 < this.y1)) {
           game.sm.changeScene(7);
            document.getElementById("gameover").load();
            document.getElementById("gameover").play();

            return;
        }

        if (this.x < -800) {
            this.goDie();
        }
        this.deg += 1;
    },
    render: function () {
        game.ctx.save();
        game.ctx.translate(game.width + this.x, this.height);
        game.ctx.rotate(this.deg);
        game.ctx.drawImage(this.image, -64, -64);
        game.ctx.restore();
        //   game.ctx.drawImage(this.image,game.width+this.x,this.height);
        // game.ctx.drawImage(this.image01,215,190,52,56,game.width+this.xx,this.height-100,52,56);
    },
    goDie: function () {
        game.sm.missile = _.without(game.missile, this);
    }
});