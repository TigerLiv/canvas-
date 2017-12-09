var Barrier=Class.extend({
    init:function () {
        this.image=game.R["barrier"];
        this.image1=game.R["eat"];
        this.location=_.random(1000,1800);

        this.x=game.width;
        game.sm.barriers.push(this);
    },
    update:function (d,str) {

        this.x1=this.location+10;
        this.x2=this.location+20;
        this.y1=355+74;
        this.y2=375;
        //碰撞检测
        if (d){
            // if (game.person.x1 > this.x1 && game.person.x2 < this.x2 && (game.person.y2 > this.y2)) {
            //     clearInterval(game.timer);
            //     return;
            // }
            //console.log(game.person.dunX1>this.x1,game.person.dunX2<this.x2,game.person.dunY1<this.y2);
            if (game.sm.person.dunX1>this.x1&&game.sm.person.dunX2<this.x2&&game.sm.person.dunY1>this.y2){
                this.goDie();
                this.change();
                document.getElementById("beat").load();
                document.getElementById("beat").play();

            }
        }else {
            if (game.sm.person.x1 > this.x1  && (game.sm.person.y2 >390&&game.sm.person.x2<this.x2)) {
                game.sm.changeScene(7);
                document.getElementById("gameover").load();
                document.getElementById("gameover").play();
                return;
            }

        }
        if (str == true) {
            this.dx = 20;
            this.location -= this.dx;
        } else {
            this.location -= 6;
        }
        if (this.location<-2280){
            this.goDie();
        }
    },
    render:function () {
        game.ctx.drawImage(this.image,138,0,110,92,this.location,355,70,59);

    },
    goDie:function () {
        game.sm.barriers=_.without(game.barriers,this);
    },
    change:function () {
        game.ctx.drawImage(this.image,0,436,59,45,this.location,355,59,45);
    }
});