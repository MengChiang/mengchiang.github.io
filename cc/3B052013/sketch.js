function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);

let a = color(255, 204, 0); //黃
fill(a);
noStroke();
rect(0, 0, 100, 90); //左上黃
rect(200, 200, 200, 70); //右下黃

let d= color(255, 0,0); //紅
fill(d);
noStroke();
rect(110,0,100,200); //左上紅
rect(210,280,200,200); //右下紅

let e= color(0, 0, 255); //藍
fill(e);
noStroke();
rect(210, 0, 200, 170); //右上藍
rect(0, 360, 200, 70); //左下藍

let c = color(0, 0, 0); //黑線
fill(c);
noStroke();
rect(200, 0, 10, 400); //中心線
rect(0, 200, 400, 10); //平行線
rect(100, 0, 10, 200); //左上直線
rect(0, 350, 200, 10); //左下橫線
rect(0, 80, 100, 10); //左上橫線
rect(200, 160, 200, 10); //右上橫線
rect(200, 270, 200, 10); //右下橫線
}
