let img1;
let img2;
let imgx;

function preload() {
  img1 = loadImage("S__9035863.png");
  img2 = loadImage("S__9043989.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  imgx = img1;
}

function draw() {
  image(imgx, mouseX, mouseY, 150, 150);
}

function mouseClicked() {
  if (img1 ==imgx) imgx = img2;
  else imgx = img1;
}
