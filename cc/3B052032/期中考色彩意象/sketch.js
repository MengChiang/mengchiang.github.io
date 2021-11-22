//學號:3B052032
//姓名:蔡亞築
//色彩意象
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(256);
  //外框粉紅Pink
  strokeWeight(2)
  fill(256)
  stroke(255,192,203)
  circle(200,200,350);
   //大圓嬰兒粉藍Powder Blue
  fill(176,224,230)
  stroke(176,224,230)
  circle(200,200,300);
  //右下圓粉紅Pink
  fill(255,192,203)
  stroke(255,192,203)
  circle(300,280,175);
 //左上大圓薰衣草色 lavender
  fill(230,230,250)
  stroke(230,230,250)
  circle(85,100,150);
  //左上小圓鮭肉色 salmon
  fill(255,140,105)
  stroke(255,140,105)
  circle(85,100,120);
  //上正方藍綠色 Aquamarine
  fill(127,255,212)
  stroke(127,255,212)
  rect(320,120,50,50);
  //中正方藍綠色 Aquamarine
  fill(127,255,212)
  stroke(127,255,212)
  rect(320,180,50,50);
  //下正方藍綠色 Aquamarine
  fill(127,255,212)
  stroke(127,255,212)
  rect(320,240,50,50);
  textStyle(NORMAL);
  text('淺色調',230,55)
  textSize(48)
  noFill();
}