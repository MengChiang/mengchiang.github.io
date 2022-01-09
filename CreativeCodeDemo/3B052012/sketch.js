function setup() {
  createCanvas(400, 400);
}

function setup() {
  createCanvas(400, 400);
}

function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(0, 0, 0);
  //月亮
  fill(255, 255, 0);
  circle(180, 200, 320);
  //左山
  fill(0, 255, 0);
  ellipse(150, 430, 410, 450);
  //右山
  fill(0, 210, 87);
  ellipse(530, 430, 430, 500);
  //星星
  fill(250, 255, 240);
  push();
  translate(width * 0.8, height * 0.2);
  star(0, 0, 10, 30, 5);
  pop();

  push();
  translate(width * 0.9, height * 0.4);
  star(0, 0, 10, 30, 5);
  pop();

  //柱子
  fill(255, 255, 255);
  rect(140, 210, 10, 700);
  rect(358, 205, 10, 700);
  rect(575, 205, 10, 700);
  rect(249, 85, 10, 700);
  rect(463, 85, 10, 700);
  //風扇
  fill(255, 255, 255);
  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 10, 70, 3);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 10, 70, 3);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 10, 70, 3);
  pop();

  push();
  translate(width * 0.35, height * 0.2);
  rotate(frameCount / 200.0);
  star(0, 0, 15, 70, 3);
  pop();

  push();
  translate(width * 0.65, height * 0.2);
  rotate(frameCount / 200.0);
  star(0, 0, 15, 70, 3);
  pop();

  //rect(140, 210, 10, 700);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
