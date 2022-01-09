function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  if (mouseX > 0 && mouseX < 80 && mouseY > 0 && mouseY < 80) {
    fill(255);
  } else {
    fill(0);
  }
  rect(0, 0, 60, 110);

  if (mouseX > 0 && mouseX < 80 && mouseY > 0 && mouseY < 80) {
    fill(0);
  } else {
    fill(170, 170, 170);
  }
  rect(0, 250, 80, 100);

  if (mouseX > 0 && mouseX < 80 && mouseY > 0 && mouseY < 80) {
    fill(0);
  } else {
    fill(255);
  }

  rect(0, 350, 80, 50);

  if (mouseX > 50 && mouseX < 80 && mouseY > 30 && mouseY < 80) {
    fill(255, 0, 0);
  } else {
    fill(170, 170, 170);
  }

  rect(50, 0, 120, 30);

  if (mouseX > 50 && mouseX < 80 && mouseY > 30 && mouseY < 80) {
    fill(255, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  rect(50, 30, 50, 80);

  if (mouseX > 50 && mouseX < 80 && mouseY > 30 && mouseY < 80) {
    fill(170, 170, 170);
  } else {
    fill(255);
  }
  rect(100, 30, 70, 80);

  if (mouseX > 50 && mouseX < 80 && mouseY > 30 && mouseY < 80) {
    fill(0);
  } else {
    fill(255, 0, 0);
  }
  rect(80, 250, 90, 100);

  if (mouseX > 50 && mouseX < 80 && mouseY > 30 && mouseY < 80) {
    fill(255, 0, 0);
  } else {
    fill(0);
  }
  rect(80, 350, 185, 50);

  if (mouseX > 170 && mouseX < 265 && mouseY > 0 && mouseY < 80) {
    fill(0, 0, 85);
  } else {
    fill(255);
  }
  rect(170, 0, 95, 70);

  if (mouseX > 170 && mouseX < 265 && mouseY > 0 && mouseY < 80) {
    fill(170, 170, 170);
  } else {
    fill(255, 255, 0);
  }
  rect(170, 70, 95, 40);

  if (mouseX > 170 && mouseX < 265 && mouseY > 0 && mouseY < 80) {
    fill(255, 255, 0);
  } else {
    fill(255);
  }
  rect(170, 250, 95, 50);

  if (mouseX > 170 && mouseX < 265 && mouseY > 0 && mouseY < 80) {
    fill(255, 0, 0);
  } else {
    fill(0, 0, 85);
  }
  rect(170, 290, 95, 60);

  if (mouseX > 265 && mouseX < 360 && mouseY > 40 && mouseY < 80) {
    fill(250, 0, 0);
  } else {
    fill(170, 170, 170);
  }
  rect(265, 0, 95, 70);

  if (mouseX > 265 && mouseX < 360 && mouseY > 40 && mouseY < 80) {
    fill(255);
  } else {
    fill(0, 0, 85);
  }
  rect(265, 70, 95, 40);

  if (mouseX > 265 && mouseX < 360 && mouseY > 40 && mouseY < 80) {
    fill(255);
  } else {
    fill(0);
  }
  rect(265, 250, 100, 150);

  if (mouseX > 265 && mouseX < 360 && mouseY > 40 && mouseY < 80) {
    fill(170, 170, 170);
  } else {
    fill(255, 255, 0);
  }
  rect(265, 290, 95, 60);

  if (mouseX > 265 && mouseX < 360 && mouseY > 40 && mouseY < 80) {
    fill(0);
  } else {
    fill(170, 170, 170);
  }
  rect(265, 350, 95, 50);

  if (mouseX > 360 && mouseX < 400 && mouseY > 40 && mouseY < 80) {
    fill(0);
  } else {
    fill(255, 255, 0);
  }
  rect(360, 0, 40, 110);

  if (mouseX > 360 && mouseX < 400 && mouseY > 40 && mouseY < 80) {
    fill(0, 0, 85);
  } else {
    fill(255, 0, 0);
  }
  rect(360, 110, 20, 180);

  if (mouseX > 360 && mouseX < 400 && mouseY > 40 && mouseY < 80) {
    fill(170, 170, 170);
  } else {
    fill(255, 255, 255);
  }
  rect(380, 110, 20, 180);

  if (mouseX > 360 && mouseX < 400 && mouseY > 40 && mouseY < 80) {
    fill(255, 255, 0);
  } else {
    fill(255);
  }
  rect(360, 290, 40, 110);

  ellipse(100, 175, 150, 75);
  fill(0);
  ellipse(mouseX, mouseY, 60, 60);

  fill(255);
  ellipse(275, 175, 150, 75);
  fill(0);
  ellipse(mouseX + 175, mouseY, 60, 60);
}
