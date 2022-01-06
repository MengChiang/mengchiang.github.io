let img1;
let img2;
let img3;

let isDaytime = false;
let cloudX = 0;

let width = 502;

function preload() {
  img1 = loadImage("白天.png");
  img2 = loadImage("黑夜.png");
  img3 = loadImage("雲.png");
}

function setup() {
  createCanvas(width, 325);
  createNight();
}

function draw() {
  cloudX += 1;
  if (cloudX > (width + 100)) {
    cloudX = 0;
  }

  if (isDaytime)
    createDaytime();
  else
    createNight();
}

function mousePressed() {
  if (isDaytime)
    isDaytime = false;
  else
    isDaytime = true;
}

function createDaytime() {
  image(img1, 0, 0);
  image(img3, cloudX, 50);
}

function createNight() {
  image(img2, 0, 0);
  image(img3, cloudX, 50);
}