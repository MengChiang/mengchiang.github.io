//學號:3B052031
//姓名:林憶筠
//色彩的意象(淺色調，少女，童話，輕鬆的)
function setup() {
  createCanvas(500, 500);
}

function draw() {
  //左上長方形
  fill(255,253,208);
  strokeWeight(0);
  rect(40,90,175,105);
  //左下長方形
  fill(255,229,180);
  strokeWeight(0);
  rect(40,195,175,105);
  //右上長方形
  fill(245,245,220);
  strokeWeight(0);
  rect(215,90,175,105);
  //右下長方形
  fill(255,192,203);
  strokeWeight(0);
  rect(215,195,175,105);
  //右下圓
  fill(218,112,214);
  ellipse(256,256,65,65);
  //左上圓
  fill(230,230,250);
  ellipse(175,150,65,65);
  //左下圓
  fill(255,140,105);
  ellipse(90,256,65,65);
  //右上圓
  fill(224,255,255);
  ellipse(350,150,65,65);
}