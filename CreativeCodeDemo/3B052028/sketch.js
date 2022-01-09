function setup() {
  createCanvas(750, 750);
  background(100);
}

function draw() {
  fill("#6AD5CB");
  rect(0, 0, width, height);
  translate(width / 2 + cos(frameCount / 20 + mouseX / 50) * 50, 0);
  stroke(255, 100);
  noFill();
  for (var i = 0; i < height; i += 4) {
    strokeWeight(random(1) + 2);
    fill(255, 5);
    let nn = noise(i / 10, frameCount / 100) * 20 + (height - i) / 9;
    let stAng = sin(i + frameCount / 2);
    arc(0, i - 100, nn * 8, nn * 3, stAng, stAng + PI * 1.5);
  }
}
