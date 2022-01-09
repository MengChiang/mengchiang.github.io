let snowflakes = [];

function setup() {
    createCanvas(400, 400);
}

function draw() { }

function draw() {
    background(51);
    other();
    snow();
}

function snow() {
    let t = frameCount / 400;
    noStroke();
    fill(255, 255, 255);
    for (let i = 0; i < random(1); i++) {
        snowflakes.push(new snowflake());
    }
    for (let flake of snowflakes) {
        flake.update(t);
        flake.display();
    }
}

function snowflake() {
    this.posY = random(1, 1);
    this.initialangle = random(0, 10 * PI);
    this.size = random(2.5, 0);
    this.radius = sqrt(random(pow(width / 2, 2)));
    this.update = function (time) {
        let w = 0.2;
        let angle = w * time + this.initialangle;
        this.posX = width / 2 + this.radius * sin(angle);
        this.posY += pow(this.size, 0.5);
    };
    this.display = function () {
        ellipse(this.posX, this.posY, this.size);
    };

    circle(400, 400, 50);

    circle(380, 400, 30);

    circle(363, 400, 30);

    circle(255, 400, 30);

    circle(200, 400, 23);

    circle(160, 400, 20);

    circle(130, 400, 30);

    circle(140, 400, 25);

    circle(100, 400, 40);

    circle(80, 400, 45);

    circle(40, 400, 30);

    square(0, 390, 80);

    square(100, 390, 80);

    square(340, 390, 80);
}

function other() {
    stroke(1);

    fill(255, 255, 255);
    square(250, 301, 100);

    fill(0, 0, 255);
    rect(260, 310, 30, 20, 5);

    fill(255, 255, 0);
    square(295, 350, 40);

    fill(350, 160, 0);
    triangle(350, 300, 250, 300, 300, 200);

    fill(350, 160, 0);
    circle(330, 377, 5);

    fill(255, 255, 255);
    circle(220, 390, 50);

    fill(255, 255, 255);
    circle(220, 355, 35);

    fill(0, 0, 0);
    circle(220, 360, 2);

    fill(0, 0, 0);
    circle(210, 360, 2);

    fill(255, 0, 0);
    circle(215, 365, 4);

    fill(255, 255, 255);
    circle(178, 390, 30);

    fill(255, 255, 255);
    circle(178, 370, 20);

    fill(0, 0, 0);
    circle(180, 369, 1);

    fill(0, 0, 0);
    circle(185, 367, 1);

    fill(255, 0, 0);
    circle(183, 372, 2);

    fill(0, 180, 20);
    circle(170, 372, 8);

    fill(255, 255, 255);
    circle(237, 316, 7);

    fill(255, 255, 0);
    circle(200, 25, 6);

    fill(255, 255, 0);
    circle(20, 10, 3);

    fill(255, 255, 0);
    circle(2, 60, 5);

    fill(255, 255, 0);
    circle(290, 80, 5);

    fill(255, 255, 0);
    circle(290, 7, 2);

    fill(255, 255, 0);
    circle(275, 45, 3);

    fill(255, 255, 0);
    circle(175, 45, 3);

    fill(255, 255, 0);
    circle(175, 45, 3);

    fill(255, 255, 0);
    circle(155, 145, 3);

    fill(255, 255, 0);
    circle(65, 90, 4);

    fill(255, 255, 0);
    circle(75, 1, 7);

    fill(255, 255, 0);
    circle(230, 1, 3);

    fill(255, 255, 0);
    circle(230, 180, 3);

    fill(255, 255, 0);
    circle(25, 110, 2);

    fill(255, 255, 0);
    circle(250, 115, 6);

    fill(255, 255, 0);
    circle(400, 115, 7);

    fill(255, 255, 0);
    circle(380, 10, 3);

    fill(255, 255, 0);
    circle(345, 55, 2);

    fill(255, 255, 0);
    circle(330, 140, 3);

    fill(255, 255, 0);
    circle(90, 170, 2);

    fill(255, 0, 0);
    triangle(210, 340, 235, 320, 236, 350);
}
