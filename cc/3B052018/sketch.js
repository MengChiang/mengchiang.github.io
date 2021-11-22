function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  let c=color(255,215,0)//金飾閃耀的黃
  let a=color(255,0,0)//寶石般的紅(wink)
  let b=color(0,0,255)//夜色的寶藍
  fill(0,0,0);
  rect(20,0,10,400);//第一條直黑線
  rect(280,0,10,400);//第二條直黑線
  rect(0,100,400,10);//第一條橫黑線
  rect(280,150,120,10);//第二條橫黑線
  rect(0,350,400,10)//第三條橫黑線
  fill(c);
  rect(0,0,20,100);
  fill(a);
  rect(30,0,250,100);
  fill(b);
  rect(290,110,120,40);
  fill(c);
  rect(30,360,250,50);
  noStroke();
  
  
  
}