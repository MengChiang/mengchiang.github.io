function setup() {
  createCanvas(650, 400);
}

function draw() {
  background(0); //背景黑
  //第一個
  let a = color(255, 255, 255); //白
  noStroke();
  fill(a);
  rect(100, 3, 3, 100); //線

  let c = stroke(255, 255, 255); //白圈框
  noFill();
  strokeWeight(4);

  if (mouseX >= 80) fill(r, g, b);

  r = random(0);
  g = random(255);
  b = random(255);

  circle(100, 145, 80); //圈1

  //第二個
  let d = color(255, 255, 255); //白
  noStroke();
  fill(a);
  rect(250, 3, 3, 100); //線

  let e = stroke(255, 255, 255); //白圈框
  noFill();
  strokeWeight(4);

  if (mouseX >= 230) fill(r, g, b);

  r = random(255);
  g = random(0);
  b = random(255);

  circle(250, 145, 80); //圈2

  //第三個
  let f = color(255, 255, 255); //白
  noStroke();
  fill(a);
  rect(400, 3, 3, 100); //線

  let h = stroke(255, 255, 255); //白圈框
  noFill();
  strokeWeight(4);

  if (mouseX >= 380) fill(r, g, b);

  r = random(255);
  g = random(255);
  b = random(0);

  circle(400, 145, 80); //圈3

  //第四個
  let i = color(255, 255, 255); //白
  noStroke();
  fill(a);
  rect(550, 3, 3, 100); //線

  let j = stroke(255, 255, 255); //白圈框
  noFill();
  strokeWeight(4);

  if (mouseX >= 530) fill(r, g, b);

  r = random(255);
  g = random(255);
  b = random(255);

  circle(550, 145, 80); //圈4
}
