let sunX;
let sunY;

let moonX;
let moonY;

let width = 400;
let height = 400;

let isDay = false;

let cloudX;
let cloudY;

let value = 150;

function setup() {
    createCanvas(width, height);

    resetSun();
    resetMoon();

    resetcloud();
}

function draw() {
    //白天的時候
    if (isDay) {
        background(255);
        moveSun();
        createSun();
        moveCloud();
        createMoutain();
        //晚上的時候
    } else {
        background(0);
        moveMoon();
        createMoon();
        moveNightCloud();
        createMoutain();
    }

    // 當日落或日出時
    if ((sunX > width && sunY < 0) || (moonX > width && moonY > height)) {
        crossDay();
    }
    //雲飄移
    if (cloudX > width) {
        resetcloud();
    }
}
//滑鼠點一下
function mouseClicked() {
    if (value === 150) {
        value = 210;
    } else {
        value = 150;
    }
}

function createMoutain() {
    //mountain
    noStroke();
    fill(value);
    triangle(150, 300, 250, 300, 202, 266);

    noStroke();
    fill(60, 113, 127);
    quad(400, 400, 0, 400, 150, 300, 250, 300);
    //print("createMontain");
}

function createMoon() {
    //moon
    fill(255, 255, 97);
    noStroke();
    circle(moonX, moonY, 125);
    //print("createMoon");
}

function createSun() {
    //sun
    fill(209, 125, 125);
    noStroke();
    circle(sunX, sunY, 125);
    //print("createSun");
}

function resetSun() {
    sunX = -100;
    sunY = 500;
    //print('resetSun');
}

function resetMoon() {
    moonX = -100;
    moonY = -100;
    //print('resetMoon');
}

function moveSun() {
    sunY -= 1;
    sunX += 1;
    //print(`moveSun: x:${sunX} y:${sunY}`);
}

function moveMoon() {
    moonX += 1;
    moonY += 1;
    //print(`moveMoon: x:${moonX} y:${moonY}`);
}

function crossDay() {
    if (isDay) {
        isDay = false;
    } else {
        isDay = true;
    }
    resetSun();
    resetMoon();
    //print('crossDay');
}

function createcloud() {
    background(220);
    noStroke();

    circle(20, 80, 30);
    circle(60, 60, 40);
    circle(40, 70, 50);
    circle(70, 80, 60);
    circle(40, 80, 45);
    print("createcloud");
}

function resetcloud() {
    cloudX = -100;
    cloudY = 40;
}

function moveCloud() {
    fill(51, 177, 245);
    cloudX += 1;
    circle(cloudX + 20, 80, 30);
    circle(cloudX + 60, 60, 40);
    circle(cloudX + 40, 70, 50);
    circle(cloudX + 70, 80, 60);
    circle(cloudX + 40, 80, 45);
}

function moveNightCloud() {
    fill(205, 205, 180);
    cloudX += 1;
    circle(cloudX + 20, 80, 30);
    circle(cloudX + 60, 60, 40);
    circle(cloudX + 40, 70, 50);
    circle(cloudX + 70, 80, 60);
    circle(cloudX + 40, 80, 45);
}