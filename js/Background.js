var Background = Class.extend({
    init: function () {
        this.image = game.R["bg5"];
        this.imageb = game.R["bg"];
        this.font1=game.R["font1"];
        this.x = 0;
        this.meters = 0;
        this.sec = 0;
    },
    update: function (str) {
        this.meters += 1;
        if (str == true) {
            this.dx = 20;
            this.x -= this.dx;
        } else {
            this.x -= 6;

        }
        if (this.x < -512) {
            this.x = 0;
        }
        if (this.meters % 25 == 0) {
            this.sec+=1;
        }
    },
    render: function (str) {
        if (str==true){
            game.ctx.drawImage(this.imageb, this.x, 0);
            game.ctx.drawImage(this.imageb, this.x + 799, 0);
            game.ctx.drawImage(this.imageb, this.x + 799 * 2, 0);
            game.ctx.drawImage(this.imageb, this.x + 799 * 3, 0);
            game.ctx.drawImage(this.font1,260,0,220,48,game.width/2-130,game.height/2-80,220,48);
            game.ctx.fillStyle = "#8A2BE2";
            game.ctx.font = "16px consolas";
            game.ctx.textAlign = "left";
            game.ctx.fillText(this.meters + "米", 10, 20);
            game.ctx.fillStyle = "#FF4500";
            game.ctx.fillText(this.sec + " s", 700, 20);
        }else {

            game.ctx.drawImage(this.imageb, this.x, 0);
            game.ctx.drawImage(this.imageb, this.x + 799, 0);
            game.ctx.drawImage(this.imageb, this.x + 799 * 2, 0);
            game.ctx.drawImage(this.imageb, this.x + 799 * 3, 0);

            game.ctx.fillStyle = "#8A2BE2";
            game.ctx.font = "16px consolas";
            game.ctx.textAlign = "left";
            game.ctx.fillText(this.meters + "米", 10, 20);
            game.ctx.fillStyle = "#FF4500";
            game.ctx.fillText(this.sec + " s", 700, 20);
        }

    }
})