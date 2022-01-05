function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(238, 154, 73);
  fill(184, 134, 11);
  triangle(100, 211, 0, 400, 226, 400);
  fill(184, 134, 11);
  triangle(300, 269, 200, 400, 480, 500);
  fill(84, 139, 84);
  triangle(300, 320, 230, 400, 420, 449);
  fill(139, 134, 78);
  triangle(107, 277, 30, 400, 200, 400);
  fill(255, 215, 0);
  circle(mouseX, mouseY, 90);
  noStroke();
  fill(0, 191, 255);
  ellipse(150, 60, 55, 55);
  ellipse(200, 49, 55, 55);
  ellipse(250, 58, 55, 55);
  ellipse(229, 86, 55, 55);
  ellipse(180, 89, 55, 55);
  noStroke();
  fill(random(30, 278), random(65, 145), random(44, 125), 50);
  circle(mouseX, mouseY, random(44, 67));
}

function mousePressed() {
  // background(220);
  print("夕陽無限好 只是近黃昏");
}
