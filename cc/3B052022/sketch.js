//3B052022吳書安
//運用10個矩形和紅黃藍三原色進行組合
//在特定線條有加粗以達到視覺的平衡
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
strokeWeight(7)
fill(255, 204, 0);  
rect(0, 0, 300,300);
  
fill(255,255,255);
rect(0, 300, 100,50);

fill('rgb(100%,0%,10%)');
rect(0, 350, 50,50);
fill(255, 204, 0);
rect(50, 350, 50,50);
  
fill(color(0, 0, 255));
rect(100,300, 150,100);

fill(color(255, 255, 255));
rect(250,300, 50,100);

fill('rgb(100%,0%,10%)');
rect(300,200,100,200);

fill(color(0, 0, 255));
rect(300,0, 50,200);

fill('rgb(100%,0%,10%)'); 
rect(350,0, 50,100); 
fill(255, 255,255);
rect(350,100, 50,100)
  

strokeWeight(9);
line(300, 300, 0, 300);
  
strokeWeight(12);
line(300, 0, 300, 400);
  
strokeWeight(10);
line(100, 300, 100, 400);}
