let defaultC1Y = 700;
let defaultC2Y = 600;
let defaultC3Y = 800;
let defaultC4Y = 500;
let defaultC5Y = 400;
let defaultC6Y = 700;
let defaultC7Y = 400;
let defaultC8Y = 600;
let defaultC9Y = 500;

let c1Y, c2Y, c3Y, c4Y, c5Y, c6Y, c7Y, c8Y, c9Y;

function resetY() {
  c1Y = defaultC1Y;
  c2Y = defaultC2Y;
  c3Y = defaultC3Y;
  c4Y = defaultC4Y;
  c5Y = defaultC5Y;
  c6Y = defaultC6Y;
  c7Y = defaultC7Y;
  c8Y = defaultC8Y;
  c9Y = defaultC9Y;
}

function setup() {
  createCanvas(600, 400);
  whale = loadImage("whale.png");
  resetY();
  
  ele = createAudio('Water Bubble Sound.mp3');

  // here we set the element to autoplay
  // The element will play as soon
  // as it is able to do so.
  ele.autoplay(true);
  
  ele = createAudio('Whale Sound.mp3');

  // here we set the element to autoplay
  // The element will play as soon
  // as it is able to do so.
  ele.autoplay(true);

}

function draw() {
  background(0, 50, 80);

  if (c1Y < 0) {
    resetY();
  }

  c1X = random(145, 150);
  //print(cloudX);
  c1Y -= 1;

  noFill();
  stroke(255);
  circle(c1X, c1Y, 60);

  c2X = random(495, 500);
  c2Y -= 1;
  circle(c2X, c2Y, 40);

  c3X = random(355, 360);
  c3Y -= 1;
  circle(c3X, c3Y, 40);

  c4X = random(240, 245);
  c4Y -= 1;
  circle(c4X, c4Y, 20);

  c5X = random(200, 205);
  c5Y -= 1;
  circle(c5X, c5Y, 20);

  c6X = random(400, 405);
  c6Y -= 1;
  circle(c6X, c6Y, 30);

  c7X = random(80, 85);
  c7Y -= 1;
  circle(c7X, c7Y, 50);

  c8X = random(570, 575);
  c8Y -= 1;
  circle(c8X, c8Y, 20);

  c9X = random(340, 345);
  c9Y -= 1;
  circle(c9X, c9Y, 20);

  rotate(0.15 + sin(frameCount / 60) / 8);
  image(whale, 150, 100);
}
