function setup() {
  createCanvas(600, 400);
  background(255, 203, 179);
}

function draw() {
  background(100, 1);
  noStroke();
  fill(mouseX, mouseY, 219);
  ellipse(mouseX, mouseY, 45, 45);
}
