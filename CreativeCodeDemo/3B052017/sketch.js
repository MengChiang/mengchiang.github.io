function setup() {
  createCanvas(400, 400);
  pg = createGraphics(250, 250);
}
function draw() {
  background(0);
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 30, 30);

  pg.background(0);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX - 100, mouseY - 75, 30, 30);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 100, 75);
}
