function setup() {
    createCanvas(720, 400);
    noStroke();
    rectMode(CENTER);
}

function draw() {
    background(230);
    fill(800, 100, 200);
    ellipse(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
    fill(5, 100, 50);
    let inverseX = width - mouseX;
    let inverseY = height - mouseY;
    ellipse(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);
}