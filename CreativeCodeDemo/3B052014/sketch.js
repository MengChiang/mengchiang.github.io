// By Roni Kaufman
// https://ronikaufman.github.io/

let n = 0;
let mode = 0;
let theta0 = 0;
let canChange = false;
let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
  noStroke();

  x = [];
  y = [];
  let r = 250;
  for (let theta = -PI / 6; theta < TWO_PI; theta += PI / 3) {
    x.push(r * cos(theta));
    y.push(r * sin(theta));
  }
}

function draw() {
  let new_n = floor((sin(frameCount / 25) + 1) * 4);
  if (n != new_n) {
    background(0);
    translate(width / 2, height / 2);
    rotate(theta0);

    n = new_n;
    divideHexagon(x, y, n);

    if (n == 0) {
      if (canChange) {
        theta0 += PI / 3;
        canChange = false;
      }
    } else {
      canChange = true;
    }
  }
}

function divideHexagon(x, y, k) {
  fill(map(k, 0, n + 1, 255, 0));

  if (k == 0) {
    beginShape();
    for (let i = 0; i < 6; i++) {
      vertex(x[i], y[i]);
    }
    endShape();
    return;
  }

  let xCenter = (x[0] + x[3]) / 2;
  let yCenter = (y[0] + y[3]) / 2;
  let x6 = (x[0] + x[1]) / 2;
  let y6 = (y[0] + y[1]) / 2;
  let x7 = (x[1] + x[2]) / 2;
  let y7 = (y[1] + y[2]) / 2;
  let x8 = (x[2] + x[3]) / 2;
  let y8 = (y[2] + y[3]) / 2;
  let x9 = (x[3] + x[4]) / 2;
  let y9 = (y[3] + y[4]) / 2;
  let x10 = (x[4] + x[5]) / 2;
  let y10 = (y[4] + y[5]) / 2;
  let x11 = (x[5] + x[0]) / 2;
  let y11 = (y[5] + y[0]) / 2;
  let x12 = (x[0] + xCenter) / 2;
  let y12 = (y[0] + yCenter) / 2;
  let x13 = (x[2] + xCenter) / 2;
  let y13 = (y[2] + yCenter) / 2;
  let x14 = (x[4] + xCenter) / 2;
  let y14 = (y[4] + yCenter) / 2;

  triangle(x[0], y[0], x12, y12, x6, y6);
  triangle(x[0], y[0], x12, y12, x11, y11);
  triangle(x[2], y[2], x13, y13, x7, y7);
  triangle(x[2], y[2], x13, y13, x8, y8);
  triangle(x[4], y[4], x14, y14, x9, y9);
  triangle(x[4], y[4], x14, y14, x10, y10);
}
