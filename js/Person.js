var Person = Class.extend({
    init: function () {
        this.image = [game.R["01"], game.R["02"], game.R["03"], game.R["04"], game.R["05"], game.R["06"],
            game.R["07"], game.R["08"], game.R["09"], game.R["10"], game.R["11"], game.R["12"]];

        this.body = game.R["body"];
        this.x = (game.width / 2) * 0.618;
        this.y = 0;
        this.dy = 0.8;
        this.cho = 0;
        this.dx = 0;

        //掉落
        this.diao=0;
    },
    update: function (dir) {
        this.x1=this.x+113;
        this.y1=350+this.y;
        this.x2=this.x;
        this.y2=430+this.y;
        if(game.run==true){
            game.f % 1 == 0 && this.cho++;

        }
        game.f % 2 == 0 && this.cho++;
        if ("up"==game.dir) {
            this.dy += 0.9;
            this.y += this.dy;
            if ((300 + this.y) < 0) {
                this.y = -300;
            }
            if (this.y > 0) {
                this.y = 0;
                game.dir = "down";
            }
            this.diao = 0;

        }else {
            //判断是否掉坑
            if((this.y+360)<340){
                this.diao=0;
            }else {
                console.log("a"+this.x1 < game.sm.land.x2 , this.x2 > game.sm.land.x1);
                if (this.x1 < game.sm.land.x2 && this.x2 > game.sm.land.x1) {
                    this.diao = 50;

                    game.sm.changeScene(7);
                    document.getElementById("gameover").load();
                    document.getElementById("gameover").play();

                }
            }
        }

        if (this.cho > 11) {
            this.cho = 0;
        }

        //下蹲时候
        this.dunX1=this.x+100;
        this.dunX2=this.x;
        this.dunY1=380;
        this.dunY2=430;

    },
    render: function (d) {
        if (d) {
            game.ctx.drawImage(this.body, 269, 215, 134, 75, this.x , this.diao+360 + this.y, 109, 60);
            //下蹲
        } else {
            game.ctx.drawImage(this.image[this.cho], this.x + this.dx, this.diao+340 + this.y);
        }
    },
    jump: function () {
        this.dy = -18;
    }

});