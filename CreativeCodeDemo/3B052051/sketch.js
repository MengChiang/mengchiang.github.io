function setup() {
  createCanvas(400, 400);
}

function draw() {
  translate(width / 42, height / 62);
  background(100);
  //face
  noStroke();
  rotate(0.2 + sin(frameCount / 90));
  fill(0, 139, 139);
  rect(120, 150, 160, 100, 20);

  //eye
  fill(0, 255, 255);
  circle(150, 200, 25 + random(-10, 10));
  circle(250, 200, 25 + random(30, -30));

  //ear
  fill(255, 185, 15);
  rect(100, 180, 20, 40);
  rect(280, 180, 20, 40);

  //mouth
  push();
  rotate(-0.03);
  fill(255, 250, 205);
  rect(170, 220, 60, 10);
  pop();
}
