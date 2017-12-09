var SceneManager = Class.extend({
    init: function () {
        this.scenenumber = 1;
        //进入场景1
        this.changeScene(1);
        this.bindEvent();
    },
    changeScene: function (number) {
        this.scenenumber = number;
        switch (this.scenenumber) {
            case 1:
                break;
            case 2:
                this.images2 = game.R["s3"];
                break;
            case 3:
                this.images3 = game.R["s2"];
                break;
            case 4:
                this.images4 = game.R["s1"];
                break;
            case 5:
                this.imagesgo = game.R["sgo"];
                break;
            case 6:
                this.background = new Background();
                //土地
                this.land = new Land();
                //人物
                this.person = new Person();
                //障碍
                this.barriers = [];
                this.missile = [];
                this.barrier01 = [];
                this.barrier02 = [];
                this.barrier03 = [];
                //金币
                //  this.dolloar=new Dolloar();
                this.dolloar = [];

                break;
            case 7:

                break;
        }
    },
    updateAndrender: function () {
        switch (this.scenenumber) {
            case 1:
                game.ctx.drawImage(game.R["startbg"], 0, 0, 640, 360, 0, 0, 800, 480);
                game.ctx.drawImage(game.R["start"], 281, 350);
                break;
            case 2:
                game.ctx.drawImage(this.images2, 0, 0, 960, 640, 0, 0, 800, 480);
                break;
            case 3:
                game.ctx.drawImage(this.images3, 0, 0, 960, 640, 0, 0, 800, 480);
                break;
            case 4:
                game.ctx.drawImage(this.images4, 0, 0, 960, 640, 0, 0, 800, 480);
                break;
            case 5:
                game.ctx.drawImage(this.imagesgo, 0, 0, 960, 640, 0, 0, 800, 480);
                break;
            case 6:
                this.background.update(game.run);
                this.background.render(game.run);

                this.land.update(game.run);
                this.land.render();


                game.f % 200 == 0 && (new Barrier());
                game.f % 240 == 0 && (new Missile());
                game.f % 500 == 0 && (new barrier01());
                game.f % 20 == 0 && (new Dolloar());
                game.f % 150 == 0 && (new Barrier03());
                game.f % 210 == 0 && (new Barrier02());
                if (this.barriers.length > 2) {
                    this.barriers.pop();
                }
                if (this.missile.length > 1) {
                    this.missile.pop();
                }
                if (this.barrier01.length > 1) {
                    this.barrier01.pop();
                }
                if (this.barrier03.length > 3) {
                    this.barrier03.pop();
                }
                if (this.barrier02.length > 1) {
                    this.barrier02.pop();
                }
                for (var i = 0; i < this.barriers.length; i++) {
                    this.barriers[i].update(game.d, game.run);
                    this.barriers[i] && this.barriers[i].render();
                }
                for (var j = 0; j < this.missile.length; j++) {
                    this.missile[j].update(game.run);
                    this.missile[j] && this.missile[j].render();
                }
                for (var k = 0; k < this.barrier01.length; k++) {
                    this.barrier01[k].update(game.run);
                    this.barrier01[k] && this.barrier01[k].render();
                }
                for (var l = 0; l < this.dolloar.length; l++) {
                    this.dolloar[l].update(game.run);
                    this.dolloar[l] && this.dolloar[l].render();
                }
                for (var g = 0; g < this.barrier03.length; g++) {
                    this.barrier03[g].update(game.run);
                    this.barrier03[g] && this.barrier03[g].render();
                }
                for (var m = 0; m < this.barrier02.length; m++) {
                    this.barrier02[m].update(game.d);
                    this.barrier02[m] && this.barrier02[m].render();
                }
                this.person.update(game.dir);
                this.person.render(game.d);
                break;
            case 7:
                this.background.render();
                this.land.render();
                this.person.render(game.d);
                for (var j = 0; j < this.missile.length; j++) {
                    this.missile[j] && this.missile[j].render();
                }

                game.ctx.drawImage(game.R["gameover"], 217, 160);
                game.ctx.drawImage(game.R["again"], 604, 76, 216, 48, 281, 350, 216, 48);
                game.ctx.drawImage(game.R["again"], 531, 189, 124, 31, 327, 359, 124, 31);

                game.ctx.drawImage(game.R["again"], 873, 0, 146, 155, 634, 50, 146, 155);
                game.ctx.fillStyle = "#FFFF00";
                game.ctx.font = "16px consolas";
                game.ctx.fillText("你跑了" + this.background.meters + "米", 654, 90);
                game.ctx.fillText("你跑了" + this.background.sec + "秒", 654, 120);
                game.ctx.fillText("你获得了" + game.count + "金币", 654, 150);


                break;
        }
    },
    bindEvent: function () {
        var self = this;
        game.canvas.onmousedown = function (event) {
            var x = event.offsetX;
            var y = event.offsetY;
            var i = 3;
            switch (self.scenenumber) {
                case 1:
                    console.log(x, y);
                    if (x >= (game.width / 2 - 119) && x <= (game.width / 2 + 119) && y >= 350 && y <= 420) {
                        self.changeScene(2);
                    }
                    break;
            }

            var timer = setInterval(function () {
                self.changeScene(i++);
                if (i > 6) {
                    i = 3;
                    game.d=false;
                    game.run=false;
                    clearInterval(timer);
                }
            }, 1000);


        }


    }

});