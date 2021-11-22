//學號:3B052041
//姓名:林瑀辰
//蒙德里安


function setup() {
  createCanvas(480, 360);
}

function draw() {
  background(256 );
  
  fill(255,255,0)
  square(0, 0, 60); square(270, 60, 30);rect(270, 90, 30, 210);
  rect(420, 0, 60, 90)
  
  fill(255,0,0)
  square(60,60, 180);rect(240, 0, 30, 60);rect(300, 300, 360, 180)
  
  fill(0,0,255)
   square(0, 240, 60);square(0, 300, 60);rect(300, 60, 120,30)
  
  
  strokeWeight(2)
  line(0, 60, 420,60);line(0, 240, 270,240);line(270, 90, 480,90);
  line(270, 300, 480,300); line(0, 300, 60,300)
  line(60, 0, 60,480);line(240, 0, 240,360);line(270, 0, 270,480);
  line(300, 0, 300,480);line(420, 0, 420,300)
}