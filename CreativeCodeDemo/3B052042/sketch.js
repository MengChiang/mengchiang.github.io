function setup() {
  createCanvas(windowWidth, windowHeight);
  background(90, 30);
}

function draw() {
  noStroke();
  fill(random(80, 200), random(60, 200), random(100, 200), 30);
  rect(mouseX, mouseY, random(24, 64));
}

function mousePressed() {
  background(225);
}