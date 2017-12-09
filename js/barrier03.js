var Barrier03=Class.extend({
    init:function () {
        this.image=game.R["cartoon"];

        this.location=0;

        this.height=_.random(100,200);
        this.x=game.width;
        game.sm.barrier03.push(this);
    },
    update:function (str) {
        this.x1=this.location+game.width;
        this.x2=this.location+game.width+175;
        this.y1=this.height;
        this.y2=this.height+175;

        //碰撞
        //console.log(game.sm.person.x1>this.x1,game.sm.person.x2<this.x2,game.sm.person.y1<this.y2,game.sm.person.y2<this.y2);
        if(game.sm.person.x1>this.x1&&game.sm.person.x2<this.x2&&game.sm.person.y1<this.y2&&(game.sm.person.y2>this.y1&&game.sm.person.y2<this.y2)){
            this.goDie();
            document.getElementById("gg").load();
            document.getElementById("gg").play();
        }
        if (str == true) {
            this.dx = 20;
            this.location -= this.dx;
        } else {
            this.location-=6;

        }

        if (this.location<-3000){
            this.goDie();
        }
    },
    render:function () {
        game.ctx.drawImage(this.image,178,240,175,175,this.location+game.width,this.height,175,175);


    },
    goDie:function () {
        game.sm.barrier03=_.without(game.sm.barrier03,this);
    }
});