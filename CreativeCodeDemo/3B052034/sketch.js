
function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    fill(255, 200, mouseX);
    stroke(mouseX);
    strokeWeight(5);
    rect(100, 200, 50, 60);

    fill(255, mouseY, 0);
    stroke(mouseX);
    strokeWeight(5);
    rect(198, 100, 80, 100);

    fill(mouseX, 255, 255);
    stroke(mouseX);
    strokeWeight(5);
    rect(10, 10, 140, 60);

    fill(205, 215, mouseX);
    stroke(mouseX);
    strokeWeight(5);
    rect(270, 250, 120, 140);

    fill(0, 62, mouseY);
    stroke(mouseX);
    strokeWeight(5);
    rect(10, 200, 90, 140);

    fill(mouseY, 62, 107);
    stroke(mouseX);
    strokeWeight(5);
    rect(200, 200, 190, 100);

    fill(205, mouseX, 231);
    stroke(mouseX);
    strokeWeight(5);
    rect(50, 70, 148, 80);

    fill(0, mouseY, 107);
    stroke(mouseX);
    strokeWeight(5);
    rect(140, 10, 58, 60);

    fill(mouseY, 200, 0);
    stroke(mouseX);
    strokeWeight(5);
    rect(180, 300, 90, 90);

    fill(180, mouseX, 0);
    stroke(mouseX);
    strokeWeight(5);
    rect(278, 10, 112, 110);

    fill(mouseY, 0, 0);
    stroke(mouseX);
    strokeWeight(5);
    rect(100, 260, 80, 80);

    fill(180, mouseX, 0);
    stroke(mouseX);
    strokeWeight(5);
    rect(10, 70, 40, 130);

    fill(255, 255, mouseX);
    stroke(mouseX);
    strokeWeight(5);
    rect(150, 150, 48, 110);

    fill(mouseY, 255, 255);
    stroke(mouseX);
    strokeWeight(5);
    rect(278, 120, 112, 80);

    fill(255, 255, mouseX);
    stroke(mouseX);
    strokeWeight(5);
    rect(140, 340, 40, 50);
}
