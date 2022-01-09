// By Roni Kaufman
// Inspired by Dylan Thomas' eponym 1951 poem
// and HAL 9000 from Stanley Kubrick's 1968 movie, "2001: A Space Odyssey"

let kMax;
let step;
let n = 50; // number of blobs
let radius = 0; // diameter of the circle
let inter = 2; // difference between the sizes of two blobs
let maxNoise = 50;

let noiseProg = (x) => x;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 1);
  angleMode(DEGREES);
  noFill();
  //noLoop();
  kMax = 2;
  step = 0.01;
  noStroke();
}

function draw() {
  background(0);
  let t = frameCount / 100;
  for (let i = 2 * n; i > 0; i--) {
    let alpha = 1 - i / (2 * n);
    fill((alpha / 5 + 0.95) % 1, 1, alpha * 1.7, 1);
    let size = radius + i * inter;
    let k, noisiness;
    if (i < n) {
      k = kMax * sqrt(i / n);
      noisiness = maxNoise * noiseProg(i / n);
    } else {
      k = kMax * sqrt(1 - (i - n) / n);
      noisiness = maxNoise * noiseProg(1 - (i - n) / n);
    }
    blob(size, width / 2, height / 2, k, t - i * step, noisiness);
  }
}

function blob(size, xCenter, yCenter, k, t, noisiness) {
  beginShape();
  let angleStep = 360 / 10;
  for (let theta = 0; theta <= 360 + 2 * angleStep; theta += angleStep) {
    let r1, r2;
    /*
    if (theta < PI / 2) {
      r1 = cos(theta);
      r2 = 1;
    } else if (theta < PI) {
      r1 = 0;
      r2 = sin(theta);
    } else if (theta < 3 * PI / 2) {
      r1 = sin(theta);
      r2 = 0;
    } else {
      r1 = 1;
      r2 = cos(theta);
    }
    */
    r1 = cos(theta) + 1;
    r2 = sin(theta) + 1;
    let r = size + noise(k * r1, k * r2, t) * noisiness;
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta);
    curveVertex(x, y);
  }
  endShape();
}
