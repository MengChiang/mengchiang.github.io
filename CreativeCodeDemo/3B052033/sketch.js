let cloudImg;
let cloudX = 0,
  cloudY = 0;
function setup() {
  createCanvas(700, 500);
  backgroundImg = loadImage("鳥.png");
  cloundImg = loadImage("雲.png");
}

function draw() {
  cloudX += 1;
  cloudY += 1;
  
  if(cloudX > width)
  cloudX = 0;
  
  if(cloudY > height)
  cloudY = 0;
  background(135, 206, 250);
  
  image(cloundImg, cloudX, cloudY, 100, 50);
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      image(backgroundImg, mouseX, mouseY);
    }
  }
  
}
