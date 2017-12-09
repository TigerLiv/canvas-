var Land = Class.extend({
    init: function () {
        this.image = game.R["lands"];

        this.x = 0;
        this.dx=0.88;

    },
    update: function (str) {
        if (str==true) {
            this.dx =20;
            this.x-=this.dx;
        } else {
            this.x -= 6;

        }

        if (this.x < -600) {
            this.x = 0;
        }
        this.x1=this.x+662;
        this.x2=this.x+662+120;
    },
    render: function () {

        game.ctx.drawImage(this.image,this.x, 400);
        game.ctx.drawImage(this.image,this.x+782, 400);
        game.ctx.drawImage(this.image,this.x+782*2, 400);

    }
});