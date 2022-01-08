let snowflakes = [];
function setup() {
  createCanvas(400, 400);
  fill(225);
}

function draw() {
  let t = frameCount / 60;

  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake());
    background(0, 0, 128);

    if (mouseIsPressed == true) {
      fill(62, 195, 246);
    } else {
      fill(0);
    }
    rect(0, 0, 400, 400);
    //聖誕樹//
    fill(13, 155, 60);
    stroke(13, 155, 60);
    triangle(70, 150, 120, 100, 165, 150);
    fill(13, 155, 60);
    triangle(50, 200, 120, 130, 185, 200);
    fill(13, 155, 60);
    triangle(30, 270, 120, 160, 205, 270);
    fill(147, 66, 0);
    stroke(147, 66, 0);
    rect(105, 270, 30, 50);

    //雪人//
    fill(255);
    stroke(255);
    circle(300, 210, 80, 150);
    circle(300, 280, 100, 150);
    fill(0);
    circle(285, 200, 10, 150);
    circle(315, 200, 10, 150);
    fill(250, 53, 53);
    triangle(310, 215, 300, 225, 290, 215);
    fill(255, 165, 60);
    stroke(255);
    triangle(300, 120, 280, 180, 320, 180);
    circle(300, 120, 10, 150);

    //月亮//
    fill(255, 225, 0);
    stroke(255);
    circle(350, 50, 50, 150);
    fill(0);
    circle(300, 300, 8, 150);
    circle(300, 280, 8, 150);
    circle(300, 260, 8, 150);
    fill(255);
  }

  for (let flake of snowflakes) {
    flake.update(t);
    flake.display();
  }
}

function snowflake() {
  this.posX = 1;
  this.posY = random(-40, 10);
  this.initialangle = random(0, 2 * PI);
  this.size = random(5, 3);

  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function (time) {
    let w = 0.6;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * cos(angle);

    this.posY += pow(this.size, 1);

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function () {
    ellipse(this.posX, this.posY, this.size);
  };
}
