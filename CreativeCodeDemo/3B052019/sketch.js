//3B052019
//陳學廷
//花的意象-曼德拉草

function setup() {
  createCanvas(400, 400);
}

let value = 0;
function draw() {
  noStroke();
  background(color(205, 0, 205));
  circle(180, 200, 100);
  rect(30, 0, 55, 260);
  rect(115, 0, 55, 130);
  rect(200, 0, 55, 130);
  rect(285, 0, 55, 190);
  triangle(0, 400, 180, 180, 200, 200);
  triangle(180, 400, 160, 160, 195, 195);
  bezier(400, 400, 0, 400, 400, 0, 400, 400, 0, 0, 100, 0);
  fill(value);
  circle(180, 200, 80);
  rect(40, 0, 35, 220);
  rect(125, 0, 35, 95);
  rect(210, 0, 35, 95);
  rect(295, 0, 35, 155);
  triangle(0, 400, 185, 185, 195, 195);
  triangle(180, 400, 170, 170, 185, 185);
  noStroke();
  circle(310, 310, 120);
}
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}