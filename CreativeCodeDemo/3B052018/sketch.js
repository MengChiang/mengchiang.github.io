function setup() {
  createCanvas(720, 400);
  background(230);
  strokeWeight(2);
}

function draw() {
  if (mouseIsPressed) {
    stroke(255, 0, 0);
  } else {
    stroke(0, 0, 255);
  }
  circle(mouseX, mouseY, mouseX + 20);
}
