function setup() {
  createCanvas(710, 400);
}
function draw() {
  background(237, 34, 93);
  if (mouseIsPressed) {
    stroke(0);
    fill(0);
    rect(300, 193, 100, 100);
    strokeWeight(2);
    line(0, 300, 710, 300);
    strokeWeight(10);
    point(60, 70);
    strokeWeight(5);
    point(570, 240);
    strokeWeight(7);
    point(470, 125);
    strokeWeight(17);
    point(250, 143);
    strokeWeight(10);
    point(100, 200);
    strokeWeight(5);
    point(148, 190);
    strokeWeight(7);
    point(460, 210);
    strokeWeight(14);
    point(560, 123);
    noStroke();
    fill(255);
    rect(312, 225, 15, 15);
    noStroke();
    fill(255);
    rect(370, 225, 15, 15);
    noStroke();
    fill(255);
    rect(338, 260, 20, 5);
    noStroke();
    fill(255);
    rect(333, 255, 5, 5);
    noStroke();
    fill(255);
    rect(358, 255, 5, 5);
    noStroke();
    fill(255);
    rect(378, 235, 6, 15);
    noStroke();
    fill(255);
    rect(378, 260, 6, 6);
  } else {
    background(200, 200, 200);
    strokeWeight(14);
    stroke(50, 200, 200);
    fill(50, 200, 200);
    rect(300, 193, 100, 100);
    strokeWeight(2);
    stroke(150);
    line(0, 300, 710, 300);
    noStroke();
    fill(255);
    rect(312, 225, 15, 15);
    noStroke();
    fill(255);
    rect(370, 225, 15, 15);
    noStroke();
    fill(255);
    rect(315, 260, 70, 5);
  }
  print(mouseIsPressed);
}
