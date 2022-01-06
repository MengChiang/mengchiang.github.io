let leftEyeballX = 250;
let rightEyeballX = 550;
let eyeballY = 150;

let centerX = 400;

function setup() {
  createCanvas(800, 400);
  background(220);

  fill("rgb(252,238,227)");
  rect(0, 0, 800, 400);

  //鼻子
  fill("rgb(237,197,187)");
  triangle(350, 250, 400, 200, 450, 250);

  //左眉
  fill(0);
  rect(150, 30, 150, 20);

  //右眉
  fill(0);
  rect(500, 30, 150, 20);

  //嘴
  fill("red");
  circle(centerX, 350, 90);

  fill("red");
  circle(200, 350, 10);
}

function draw() {
  //左眼白
  fill(255);
  circle(250, 150, 160);

  //右眼白
  fill(255);
  circle(550, 150, 160);

  //左眼珠
  fill(0);
  circle(leftEyeballX, eyeballY, 100);

  //右眼珠
  fill(0);
  circle(rightEyeballX, eyeballY, 100);

  if (mouseX < centerX) {
    if (leftEyeballX > 230) {
      leftEyeballX -= 1;
    }
    if (rightEyeballX > 530) {
      rightEyeballX -= 1;
    }
  } else if (mouseX > centerX) {
    if (leftEyeballX < 270) {
      leftEyeballX += 1;
    }
    if (rightEyeballX < 570) {
      rightEyeballX += 1;
    }
  }

  if (mouseY < centerX) {
    if (eyeballY > 130) {
      eyeballY -= 1;
    }
  } else if (mouseY > centerX) {
    if (eyeballY < 170) {
      eyeballY += 1;
    }
  }
}

function mouseClicked() {
  fill("red");
  circle(mouseX, mouseY, 10);
}
