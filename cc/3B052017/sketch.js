function setup() {
  createCanvas(400, 400);
  background(500); 
}

function draw() {
  strokeWeight(10);
  
  fill(color(255, 255, 0));
  rect(170, 378, 108, 30);//黃
  
  fill(color(0, 0, 255));
  rect(368, 215, 40, 85);//藍
  
  fill(color( 255, 0, 0));
  rect( -5, -5, 175, 220);//紅

  fill(color( 0, 0, 0));
  rect( 278, 378, 90, 30);//黑
  
 
  
  line(170, 400, 170, 0); //縱1
  line(0, 215, 400, 215); //橫1
  line(368, 215, 368, 400);//縱2
  }