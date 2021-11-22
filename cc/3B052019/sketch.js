//3B052019
//陳學廷
//被害妄想、躁動、情慾流動、不安感、逃避、專屬兩人的狂喜(左上1至右下6)

function setup() {
  frameRate(10);
  createCanvas(600, 400);
  bubble = {
    x: 175,
    y: 175,
    jiggle: function() {
      this.x += random(-1, 1);
      this.y += random(-1, 1);
    },
    display: function() {
      ellipse(this.x, this.y, 30);
      {
      frameRate(10);
     }
    }
  }
}

function draw() {
  background(255);
  //background6-lunatically happy
    noStroke();
  fill('rgb(50,0,200)');
  rect(400, 200, 200, 200);
  noStroke();
  fill('rgb(255,70,130)');
  rect(400, 225, 200, 5);
  fill('rgb(255,70,130)');
  rect(400, 260, 200, 10);
  fill('rgb(255,70,130)');
  rect(400, 295, 200, 5);
  fill('rgb(255,70,130)');
  rect(400, 330, 200, 10);
  fill('rgb(255,70,130)');
  rect(400, 365, 200, 5);
  noStroke();
  fill('rgb(250,250,50)')
  ellipse(mouseX, mouseY, 30, 30);
  //furry purple
  noStroke();
  fill('rgb(250,250,250)');
  rect(0, 0, 200, 200);
  noStroke();
  fill('#5f4b8b');
  circle(30, 30, 20);
  noStroke();
  fill('#5f4b8b');
  circle(50, 50, 20);
  noStroke();
  fill('#5f4b8b');
  circle(60, 90, 20);
  noStroke();
  fill('#5f4b8b');
  circle(60, 120, 20);
  noStroke();
  fill('#5f4b8b');
  circle(160, 20, 20);
  noStroke();
  fill('#5f4b8b');
  circle(165, 70, 20);
  noStroke();
  fill('#5f4b8b');
  circle(130, 40, 20);
  noStroke();
  fill('#5f4b8b');
  circle(60, 20, 20);
  noStroke();
  fill('#5f4b8b');
  circle(90, 60, 20);
  noStroke();
  fill('#5f4b8b');
  circle(10, 70, 20);
  noStroke();
  fill('#5f4b8b');
  circle(20, 130, 20);
  noStroke();
  fill('#5f4b8b');
  circle(30, 150, 20);
  noStroke();
  fill('#5f4b8b');
  circle(50, 170, 20);
  noStroke();
  fill('#5f4b8b');
  circle(90, 150, 20);
  noStroke();
  fill('#5f4b8b');
  circle(35, 190, 20);
  noStroke();
  fill('#5f4b8b');
  circle(95, 10, 20);
  noStroke();
  fill('#5f4b8b');
  circle(110, 85, 20);
  stroke(0);
  fill('rgb(150,150,100)');
    bubble.jiggle();//Persecutory Type
  bubble.display();
  //background2-impassioned
  noStroke();
  fill('rgb(250,250,0)');
  rect(200, 0, 200, 200);
  //triangle
  noStroke();
  fill('rgb(255,0,0)');
  triangle(240, 75, 260, 200, 290, 200);
  noStroke();
  fill('rgb(255,0,0)');
  triangle(277, 30, 220, 200, 260, 200);
  noStroke();
  fill('rgb(255,0,0)');
  triangle(240, 75, 315, 200, 320, 200);
  noStroke();
  fill('rgb(255,0,0)');
  triangle(387, 11, 364, 200, 390, 200);
  noStroke();
  fill('rgb(255,0,0)');
  triangle(277, 30, 204, 200, 211, 200);
  noStroke();
  fill('rgb(255,0,0)');
  triangle(387, 11, 278, 200, 299, 200);
  noStroke();
  fill('rgb(255,0,0)');
  triangle(312, 7, 334, 200, 365, 200);
  noStroke();
  fill('rgb(255,0,0)');
  triangle(312, 7, 389, 200, 396, 200);
  //background3-horny
  noStroke();
  fill('rgb(255,70,130)');
  rect(400, 0, 200, 200);
  //pattern
  noFill();
  stroke(255)
  ellipse(456, 146, 55, 55);
  stroke(255)
  fill('rgb(255,255,255)');
  ellipse(500, 120, 69, 69);
  stroke(255)
  fill('rgb(255,255,255)');
  ellipse(430, 60, 30, 30);
  noFill();
  stroke(255)
  ellipse(470, 40, 90, 90);
  noFill();
  stroke(255)
  ellipse(560, 30, 30, 30);
  stroke(255)
  fill('rgb(255,255,255)');
  ellipse(560, 65, 45, 45);
  stroke(255)
  fill('rgb(255,255,255)');
  ellipse(570, 180, 100, 100);
  stroke(255)
  fill('rgb(255,70,130)');
  ellipse(585, 190, 55, 55);
  //background4-unsecurity
  noStroke();
  fill('rgb(150,150,200)');
  rect(0, 200, 200, 200);
  //content
  noStroke();
  fill('rgb(50,50,100)');
  rect(0, 350, 200, 200);
  noStroke();
  fill('rgb(50,50,100)');
  rect(65, 230, 60, 30);
  noStroke();
  fill('rgb(250,50,50)');
  ellipse(100, 250, 20, 20);
  noStroke();
  fill('rgb(230,200,0)');
  ellipse(100, 340, 55, 45);
  noStroke();
  fill('rgb(255,255,255)');
  rect(15, 200, 10, 200);
  noStroke();
  fill('rgb(255,255,255)');
  rect(65, 200, 10, 200);
  noStroke();
  fill('rgb(255,255,255)');
  rect(125, 200, 10, 200);
  noStroke();
  fill('rgb(255,255,255)');
  rect(175, 200, 10, 200);
  noStroke();
  fill('rgb(255,255,255)');
  rect(65, 360, 60, 200);
  noStroke();
  fill('rgb(250,50,50)');
  ellipse(85, 375, 10, 10);
  //background5-Escapism
  noStroke();
  fill('rgb(230,230,255)');
  rect(200, 200, 200, 200);
  noStroke();
  fill('rgb(150,150,200)');
  triangle(300, 350, 250, 200, 350, 200);
  //pattern
  noStroke();
  fill('rgb(200,200,255)');
  rect(200, 330, 200, 100);
  noStroke();
  fill('rgb(250,250,250)');
  ellipse(300, 375, 30, 30);
}