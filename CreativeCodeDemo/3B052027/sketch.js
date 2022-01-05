function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  noStroke();
  fill(mouseX, mouseY, 0);
  ellipse(mouseX, mouseY, 50, 50);
  print(mouseX);
}
