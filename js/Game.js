var Game = Class.extend({
        init: function () {
            this.canvas = document.getElementById("mycanvas");
            this.width = 800;
            this.height = 480;
            this.gameover = document.getElementById("gameover");

            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.ctx = this.canvas.getContext("2d");

            this.canvas.style.display = "block";
            //冲刺
            this.run = false;
            //下蹲
            this.d = false;
            //空格键
            this.dir = "down";
            //金币
            this.count = 0;
            //时间
            this.second = 0;
            this.R = {
                "bg": "images/bg.png",
                "01": "images/01.png",
                "barrier": "images/barrier.png",
                "attack": "images/attack.png",
                "02": "images/02.png",
                "03": "images/03.png",
                "04": "images/04.png",
                "05": "images/05.png",
                "06": "images/06.png",
                "07": "images/07.png",
                "08": "images/08.png",
                "09": "images/09.png",
                "10": "images/10.png",
                "11": "images/11.png",
                "12": "images/12.png",
                "barrier01": "images/barrier01.png",
                "eat": "images/eat.png",
                "body": "images/body.png",
                "barrier03": "images/barrier03.png",
                "start": "images/start.png",
                "startbg": "images/startbg2.jpeg",
                "s1": "images/s1.jpg",
                "s2": "images/s2.jpg",
                "s3": "images/s3.jpg",
                "sgo": "images/sgo.jpg",
                "gameover": "images/gameover.png",
                "again": "images/again.png",
                "font1": "images/font2.png",
                "lands": "images/lands3.png",
                "cartoon": "images/cartoon.png"
            };
            var self = this;
            this.loadResources(function () {
                self.start();
            });
            this.bindEvent();
        },
        loadResources: function (callback) {
            var count = 0;
            var length = Object.keys(this.R).length;

            for (var k in this.R) {
                var image = new Image();
                image.src = this.R[k];
                this.R[k] = image;

                var self = this;
                image.onload = function () {
                    count++;
                    self.clear();

                    self.ctx.font = "20px 微软雅黑";
                    self.ctx.textAlign = "center";
                    self.ctx.fillText("正在加载图片" + count + "/" + length + "...请稍等", self.width / 2, 240);
                    if (count == length) {
                        callback();
                    }
                }
            }
        },
        clear: function () {
            this.ctx.clearRect(0, 0, this.width, this.height);
        },
        start: function () {
            var self = this;

            this.f = 0;
            this.sm = new SceneManager();
            this.timer = setInterval(function () {
                self.clear();
                self.f++;
                self.sm.updateAndrender();
                // self.ctx.fillStyle = "white";
                // self.ctx.textAlign = "left";
                // self.ctx.font = "16px consolas";
                // self.ctx.fillText(self.f + "", 10, 20);

            }, 20);
        },
        bindEvent: function () {
            var self = this;
            var idx = true;
            var down = true;
            var kongge = true;
            document.onkeydown = function (event) {
                if (event.keyCode == 32) {
                    if (self.d == true) {
                        return;
                    } else {
                        self.dir = "up";
                        self.sm.person.jump();
                        document.getElementById("jump").load();
                        document.getElementById("jump").play();

                    }

                } else if (event.keyCode == 40) {
                    if (self.dir == "up") {
                        return;
                    } else {

                        if (down == true) {
                            self.d = true;
                            self.sm.person.render(self.d);
                            down = false;
                        } else if (down == false) {
                            self.d = false;
                            self.sm.person.render(self.d);
                            down = true;
                        }
                    }
                } else if (event.keyCode == 86) {
                    if (idx == true) {
                        self.run = true;
                        self.sm.background.update(self.run);
                        self.sm.land.update(self.run);

                        document.getElementById("run").load();
                        document.getElementById("run").play();
                        idx = false;

                    } else if (idx == false) {
                        self.run = false;
                        self.sm.background.update(self.run);
                        self.sm.land.update(self.run);
                        idx = true;
                    }

                }
            }
        }


    })
;