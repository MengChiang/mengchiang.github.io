function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220, 40, 39);
    noStroke();
    fill(50, 20, 159)
    arc(280, 290, 170, 180, 0, PI + QUARTER_PI, CHORD);
    fill(30, 200, 188)
    circle(30, 30, 90);
    circle(50, 50, 80);
    circle(70, 70, 70);
    circle(100, 100, 60);
    circle(130, 130, 50);
    fill(250, 200, 188)
    circle(30, 370, 90);
    circle(50, 360, 80);
    circle(70, 350, 70);
    circle(90, 340, 60);
    circle(110, 330, 50);

    three();

    four();
}

function three() {
    background(67, 23, 24);
    noStroke();
    fill(273, 155, 0)
    rect(0, 0, 200)
    fill(97, 59, 23)
    rect(0, 200, 200)
    fill(127, 99, 43)
    rect(0, 260, 200)
    fill(137, 59, 23)
    rect(200, 200, 160)
    fill(97, 89, 23)
    rect(200, 0, 200)
}

function four() {
    background(67, 23, 24);
    circle(0, 0, 100)

    circle(0, 400, 50)
    circle(50, 400, 50)
    circle(100, 400, 90)
    circle(160, 400, 50)
    circle(260, 400, 50)
    circle(310, 400, 60)
    circle(400, 400, 100)
    circle(400, 320, 70)
    circle(400, 0, 70)
    rect(180, 350, 58)

}