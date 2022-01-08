let timer = 20;
var x = 25;
var y = 25;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}
function draw() {
  createBackground();
  createText(timer);

  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
  }

  if (timer == 0) {
    background(50);
    text("GAME OVER!!", width / 2, height * 0.5);
  }
}

function createText(timer) {
  textAlign(CENTER, CENTER);
  textSize(50);
  text(timer, width / 2, height / 2);
}

function createBackground() {
  background(50);
  //小黃
  fill(250, 208, 55);
  noStroke();
  rect(x, y, 40, 40);
  //迷宮
  fill(219, 216, 216);
  noStroke();
  rect(30, 60, 100, 15);
  fill(219, 216, 216);
  noStroke();
  rect(175, 60, 75, 15);
  fill(219, 216, 216);
  noStroke();
  rect(145, 92.5, 15, 80);
  fill(219, 216, 216);
  noStroke();
  rect(216, 132.5, 15, 160);
  fill(219, 216, 216);
  noStroke();
  rect(273.5, 220, 130, 15);
  fill(219, 216, 216);
  noStroke();
  rect(290, 80, 15, 160);
  fill(219, 216, 216);
  noStroke();
  rect(320, 100, 45, 15);
  fill(219, 216, 216);
  noStroke();
  rect(395, 285, 215, 15);
  fill(219, 216, 216);
  noStroke();
  rect(284, 260, 15, 65);
  fill(219, 216, 216);
  noStroke();
  rect(310, 378, 15, 55);
  fill(219, 216, 216);
  noStroke();
  rect(186, 287, 68, 15);
  fill(219, 216, 216);
  noStroke();
  rect(215, 312, 15, 65);

  //進度
  fill(219, 216, 216);
  noStroke();
  rect(30, 345, 115, 15);
  fill(219, 216, 216);
  noStroke();
  rect(30, 130, 100, 15);
  fill(219, 216, 216);
  noStroke();
  rect(80, 328, 15, 30);
  fill(219, 216, 216);
  noStroke();
  rect(147, 335, 15, 291);
  fill(219, 216, 216);
  noStroke();
  rect(125, 197, 30, 15);
  fill(219, 216, 216);
  noStroke();
  rect(105, 256.5, 85, 15);
  fill(219, 216, 216);
  noStroke();
  rect(55, 227, 15, 74);
  //迷宮
  //寶箱
  fill(167, 129, 64);
  noStroke();
  rect(363, 346, 50, 35);
  fill(167, 129, 64);
  noStroke();
  rect(363, 358, 50, 35);
  fill(250, 208, 55);
  noStroke();
  rect(340, 357, 10, 36);
  fill(250, 208, 55);
  noStroke();
  rect(386, 357, 10, 36);
  fill(250, 208, 55);
  noStroke();
  rect(364, 344, 46, 10);
  fill(224, 193, 81);
  noStroke();
  rect(363, 344, 8, 16);
  //寶箱
}

//移動小黃
function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      x -= 10;
      break;
    case RIGHT_ARROW:
      x += 10;
      break;
    case UP_ARROW:
      y -= 10;
      break;
    case DOWN_ARROW:
      y += 10;
      break;
  }
}
