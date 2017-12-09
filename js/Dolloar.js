var Dolloar = Class.extend({
    init: function () {
        this.image = game.R["eat"];
        this.w = _.random(300, 800);
        this.h = _.random(100, 370);
        this.x = 0;

        game.sm.dolloar.push(this);
    },
    update: function (str) {

        if (str == true) {
            this.dx = 20;
            this.x -= this.dx;
        } else {
            this.x -= 6;

        }
        this.x1=this.w + this.x+500;
        this.x2=this.w + this.x+500+75;
        this.y1=this.h+36;
        this.y2=this.h;
        //碰撞检测
        //console.log(game.sm.person.x1 > this.x1 , game.sm.person.x2 < this.x2 , game.sm.person.y1 >this.y1,game.sm.person.y2>this.y1);
        if (game.sm.person.x1 > this.x1 && game.sm.person.x2 < this.x2 && game.sm.person.y1 <this.y1&&(game.sm.person.y2>this.y1&&game.sm.person.y2>this.y2)) {
            game.count+=2;
            this.goDie();
            console.log(this);
            document.getElementById("dolloar").load();
            document.getElementById("dolloar").play();


        } else if (this.x < -4000) {
            this.goDie();
        }
    },
    render: function () {
        game.ctx.drawImage(this.image, 0, 317, 75, 36, this.w + this.x+500, this.h, 75, 36);
        game.ctx.fillStyle = "gold";
        game.ctx.textAlign = "center";
        game.ctx.font = "16px consolas";
        game.ctx.fillText("金币"+game.count,game.width/2,20);
    },
    goDie: function () {
        game.sm.dolloar = _.without(game.sm.dolloar, this);

    }
});