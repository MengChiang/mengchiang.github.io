function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(84, 118, 138);
    noStroke();

    fill(255, 238, 0);
    rect(100, 100, 200, 200);

    fill(255);
    ellipse(165, 180, 70, 70);
    fill(255);
    ellipse(235, 180, 70, 70);
    fill(0);
    rect(170, 131, 3, 15);
    fill(0);
    rect(160, 131, 3, 15);
    fill(0);
    rect(150, 131, 3, 15);

    push();
    rotate(0.3 + sin(frameCount / 20) / 3);
    fill(0);
    rect(220, 131, 3, 15);
    fill(0);
    rect(230, 131, 3, 15);
    fill(0);
    rect(240, 131, 3, 15);
    pop();

    fill(0, 203, 255);
    ellipse(165, 180, 30, 30 + random(-30, 30), 60 + random(-30, 30));
    fill(0);
    ellipse(165, 180, 15, 15 + random(-30, 30), 60 + random(-30, 30));

    fill(0, 203, 255);
    ellipse(235, 180, 30, 30);
    fill(0);
    ellipse(235, 180, 15, 15);

    fill(204, 121, 26);
    rect(100, 280, 200, 50);
    fill(255);
    rect(100, 280, 200, 20);
    rect(170, 230, 20, 20);
    rect(200, 230, 20, 20);

    fill(0);
    rect(130, 310, 20, 5);
    rect(170, 310, 20, 5);
    rect(210, 310, 20, 5);
    rect(250, 310, 20, 5);
    rect(150, 230, 100, 2);
}
