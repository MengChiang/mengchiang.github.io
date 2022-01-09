function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(250, 0, 0);
  x = 100;
}

function draw() {
  x += 0.3;
  y = 3 * (cos(x) + sin(x / 2)) + 110;
  background(0, y / 3, y);
  translate(width / 2, height / 2 - y + 50);
  rotate(PI / 4.0);
  square(0, 0, y);
  circle(y / 2, 0, y);
  circle(0, y / 2, y);
}
