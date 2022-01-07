function setup() {
    createCanvas(windowWidth, 400);
}

function draw() {
    background(0);
    for (var i = 0; i < 20; i++) {
        translate(mouseX, mouseY);
        rect(0, 0, 60, 60);
        circle(35, 150, 70);
        triangle(0, 300, 40, 230, 80, 300);
    }
}