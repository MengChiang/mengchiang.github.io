let circleX = 50;
let rectX = 1;
let rectY = 400;
let rectZ = 300;
let B = 0;
let R = 255;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  B += 2;
  R -= 0.15;
  background(R, 220, B);
  strokeWeight(0);
  stroke(0);
  fill(0);

  //太陽//
  fill(247, 223, 121);
  circle(mouseX, mouseY, 100);

  //雲//
  fill(255, 255, 255);
  rectX = rectX + 0.5;
  rectY = rectY - 1;
  rectZ = rectZ - 0.45;
  rect(rectX, 30, 155, 20, 30);
  rect(rectZ, 98, 90, 20, 30);
  rect(rectY, 186, 122, 20, 30);

  //後面的山//
  fill(78, 135, 105);
  triangle(100, 277, 331, 445, -222, 445);
  //前面的山//
  fill(57, 132, 94);
  triangle(301, 220, 555, 445, 23, 445);
}