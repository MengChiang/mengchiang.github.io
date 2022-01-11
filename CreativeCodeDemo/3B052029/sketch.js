let nyacat;
let nImg;
let fImg;
let bImg;
let fire = [];
let soundClassifier;

function preload() {
    const options = {
        probabilityThreshold: 0.95
    };
    soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
    nImg = loadImage('nyacat.png');
    fImg = loadImage('fire.png');
    bImg = loadImage('background.jpg');
}

function mousePressed() {
    fire.push(new Fire());
}

function setup() {
    createCanvas(800, 450);
    nyacat = new Nyacat();
    soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results[0].label, results[0].confidence);
    if (results[0].label == 'up') {
        nyacat.jump();
    }
}

function keyPressed() {
    if (key == ' ') {
        nyacat.jump();
    }
}

function draw() {
    if (random(1) < 0.005) {
        fire.push(new Fire());
    }

    background(bImg);
    for (let f of fire) {
        f.move();
        f.show();
        if (nyacat.hits(f)) {
            console.log('game over');
            noLoop();
        }
    }

    nyacat.show();
    nyacat.move();
}

class Fire {
    constructor() {
        this.r = 75;
        this.x = width;
        this.y = height - this.r;
    }

    move() {
        this.x -= 16;
    }

    show() {
        image(fImg, this.x, this.y, this.r, this.r);


    }
}

class Nyacat {
    constructor() {
        this.r = 100;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 3;
    }

    jump() {
        if (this.y == height - this.r) {
            this.vy = -35;
        }
    }

    hits(fire) {
        let x1 = this.x + this.r * 0.5;
        let y1 = this.y + this.r * 0.5;
        let x2 = fire.x + fire.r * 0.5;
        let y2 = fire.y + fire.r * 0.5;
        return collideCircleCircle(x1, y1, this.r, x2, y2, fire.r);
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }

    show() {
        image(nImg, this.x, this.y, this.r, this.r);


    }
}