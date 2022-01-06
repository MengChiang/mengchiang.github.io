let actionOneX = 80;
let actionTwoX = 190;
let actionThreeX = 310;
let width = 400;
let height = 400;
let runningX = 0;

let speed = 7;

function setup() {
  createCanvas(width, height);
  background(255, 255, 0);
  strokeWeight(5);
}

function draw() {
  background(255, 255, 0);
  runningX += speed;

  line(100, 250, 30, 250);
  line(350, 250, 270, 250);

  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      createTakeoffMan(random(5));
    } else if (mouseButton === RIGHT) {
      createFlyingMan(random(5));
    } else if (mouseButton === CENTER) {
      createLandingMan(random(5));
    }
  } else {
    if (runningX < actionOneX) {
      createTakeoffMan(0);
    } else if (runningX >= actionOneX && runningX < actionTwoX) {
      createFlyingMan(0);
    } else {
      createLandingMan(0);
    }
  }

  if (runningX > width) {
    runningX = 0;
  }
}

function createTakeoffMan(randomNum) {
  fill(0);
  circle(actionOneX, 180 + randomNum, 30);
  line(actionOneX, 230 + randomNum, 80, 180);
  line(actionOneX, 210 + randomNum, 100, 210);
  line(actionOneX, 210 + randomNum, 100, 215);
  line(actionOneX, 230 + randomNum, 95, 235);
  line(95, 250 + randomNum, 95, 235);
}

function createFlyingMan(randomNum) {
  fill(0);
  circle(actionTwoX, 130 + randomNum, 30);
  line(actionTwoX, 180 + randomNum, 190, 145);
  line(actionTwoX, 160 + randomNum, 170, 180);
  line(actionTwoX, 160 + randomNum, 215, 135);
  line(actionTwoX, 180 + randomNum, 210, 170);
  line(210, 190 + randomNum, 210, 170);
  line(actionTwoX, 180 + randomNum, 170, 200);
}

function createLandingMan(randomNum) {
  fill(0);
  circle(actionThreeX, 180 + randomNum, 30);
  line(actionThreeX, 230 + randomNum, 310, 180);
  line(actionThreeX, 210 + randomNum, 330, 220);
  line(actionThreeX, 210 + randomNum, 290, 220);
  line(actionThreeX, 230 + randomNum, 330, 250);
  line(actionThreeX, 230 + randomNum, 290, 250);
}