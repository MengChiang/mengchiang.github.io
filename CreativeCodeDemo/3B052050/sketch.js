function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noStroke();
  fill(random(50, 255), random(50, 150), random(50, 255), 100);
  circle(mouseX, mouseY, random(50, 64));
  quad(80, 31, 86, 20, 80, 63, 90, 30);

  rect(30, 400, 150, 300);
  rect(250, 380, 180, 300);
  rect(500, 300, 170, 500);
}
function mousePressed() {
  background(0);
}
