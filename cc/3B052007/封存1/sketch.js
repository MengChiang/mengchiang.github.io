function setup() {
createCanvas(400, 400);
}

function draw() {
background(220,40,39);
noStroke();
fill(50,20,159)
arc(280, 290, 170, 180, 0, PI + QUARTER_PI, CHORD);
fill(30,200,188)
circle(30, 30, 90);
circle(50, 50, 80);
circle(70, 70, 70);
circle(100, 100, 60);
circle(130,130, 50);
fill(250,200,188)
circle(30, 370, 90);
circle(50, 360, 80);
circle(70, 350, 70);
circle(90, 340, 60);
circle(110,330, 50);
}