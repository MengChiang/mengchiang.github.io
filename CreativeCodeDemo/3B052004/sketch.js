function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
var acceleration = 0.0028;
var nDrops = 500;
var drops = [];

function setup() {
  createCanvas(740, 680);
  for (i = 0; i < nDrops; i++) {
    drops.push(new Drop());
  }
}

function draw() {
  clear();
  drops.forEach(function(d) {
    d.drawAndDrop();
  });
}

function Drop() {
  this.initX = function() {
    this.x = random() * width;
  };
  this.initY = function() {
    this.y = -random() * height / 2; // Initialise rain somewhat off the screen
  };

  this.initX();
  this.y = random() * height;

  this.length = random() * 15;
  this.speed = random() ;

  this.drawAndDrop = function() {
    this.draw();
    this.drop();
  };

  this.draw = function() {
    line(this.x, this.y, this.x, this.y + this.length);
  };

  this.drop = function() {
    if (this.y < height) {
      this.y += this.speed;
      this.speed += acceleration;
    } else {
      this.speed = random();
      this.initY();
      this.initX();
    }
  };
}