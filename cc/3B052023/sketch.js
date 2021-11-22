///3B052023 詹珮偵
///運用7個矩形來組合，配合紅、黃、藍加以點綴，再以黑線框起矩形周圍。
function setup() {
  createCanvas(400, 400);
}

function draw() {
  
fill(255, 0, 0)
square(120,0,280)
fill(255, 255, 255)
rect(0,0,120,130) 
  
fill(255, 255, 255);
rect(0,120,120,160)
  
fill(color(0, 0, 255));
rect(0,280,120,120)
  
fill(255, 255, 255);
rect(120,280,250,120)
  
fill(255, 255, 0);
rect(370,340,30,60)
  
  
  fill(255, 255, 255);
  rect(370,280,30,60)
  strokeWeight(15);
  stroke(51);
}