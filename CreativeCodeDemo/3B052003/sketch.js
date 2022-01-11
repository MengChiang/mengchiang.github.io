let img, x, y;
let bounds = {};

function preload() {
  img1 = loadImage("20220108_170449.gif");
}

function setup() { 
  createCanvas(700, 700);
  background(221, 200, 221);
 
  // Top-left corner of the img is at (10, 10)
  // Width and height are 50 x 50
  image(img1, 150, 150, 300, 300);
  
  bounds.x = 150;
  bounds.y = 150;
  bounds.w = 300;
  bounds.h = 300;
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
 
}
function draw() {
  background(221, 200, 221);
  
    noFill()
  rect(200, 200, 280, 280);
 
  image(img1, x, y, 280, 280);
  
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-15, 15);
  }
}
  

