function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(200);
  translate(250, 250);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255, 150, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  //arc(0, 0, 300, 300, 0, secondAngle);

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  //arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  //arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(10, 10, 250);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(240, 150, 150);
  line(0, 0, 75, 0);
  pop();
  1;
  push();
  rotate(hourAngle);
  stroke(0, 150, 150);
  line(0, 0, 50, 0);
  pop();

  stroke(0);
  point(0, 0);

  //  fill(255);
  //  noStroke();
  //  text(hr + ':' + mn + ':' + sc, 10, 200);
}
