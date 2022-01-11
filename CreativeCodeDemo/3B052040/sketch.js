function setup() {
    createCanvas(400, 400);
  }
  function draw() {
    background(100);
     //外框
    noFill(256,256,256);
    square(25, 25, 350);
    
    
    //第一列
    fill(256,256,256);
    square(25,25, 35);
    square(25,60, 35);
    square(25,95, 35);
    square(25,130, 35);
    square(25,165, 35);
    square(25,200, 35);
    square(25,235, 35);
    square(25,270, 35);
    square(25,305, 35);
    square(25,340, 35);
    
  //地雷
    fill(256,0,0);
    circle(43, 43, 25);
    circle(43, 253, 25);
  //數字
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 35, 85);
    
   fill(0);
    textSize(24);
    textFont('1');
    text('1', 35, 225);
    
   fill(0);
   textSize(24);
   textFont('2');
   text('2', 35, 296);
    
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 35, 330);
  
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 35, 365);
  
   fill(220)
   square(25,95, 35);
   square(25,130, 35);
   square(25,165, 35);
  //第二列
    fill(256,256,256)
    square(60,25, 35);
    square(60,60, 35);
    square(60,95, 35);
    square(60,130, 35);
    square(60,165, 35);
    square(60,200, 35);
    square(60,235, 35);
    square(60,270, 35);
    square(60,305, 35);
    square(60,340, 35);
  //數字
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 70, 50);
    
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 70, 85);
    
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 70, 190);
    
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 70,225);
    
   fill(0);
   textSize(24);
   textFont('3');
   text('3', 70, 260);
    
   fill(0);
   textSize(24);
   textFont('3');
   text('3', 70, 295);
    
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 70, 365);
    
   fill(220)
   square(60,95, 35);
   square(60,130, 35);
  //地雷
   fill(256,0,0)
   circle(78, 323, 25);
   
  //第三列
  fill(256,256,256)
    square(95,25, 35);
    square(95,60, 35);
    square(95,95, 35);
    square(95,130, 35);
    square(95,165, 35);
    square(95,200, 35);
    square(95,235, 35);
    square(95,270, 35);
    square(95,305, 35);
    square(95,340, 35);
    
  fill(0);
   textSize(24);
   textFont('1');
   text('1', 105, 85);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 105, 120);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 105, 155);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 105, 190);
    
    fill(0);
   textSize(24);
   textFont('2');
   text('2', 105, 260);
    
    fill(0);
   textSize(24);
   textFont('2');
   text('2', 105, 330);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 105, 365);
    
    fill(220)
   square(95,25, 35);
   
  //地雷
   fill(256,0,0)
   circle(113, 288, 25);
    fill(0,256,0)
  circle(113, 217, 25);
    
    //第四列
  fill(256,256,256)
    square(130,25, 35);
    square(130,60, 35);
    square(130,95, 35);
    square(130,130, 35);
    square(130,165, 35);
    square(130,200, 35);
    square(130,235, 35);
    square(130,270, 35);
    square(130,305, 35);
    square(130,340, 35);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 140, 85);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 140, 155);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 140, 190);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 140, 225);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 140, 260);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 140, 295);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 140, 330);
    
    fill(220)
   square(130,25, 35);
   square(130,340, 35);
    //地雷
   fill(256,0,0)
   circle(148, 113, 25);
    
     //第五列
  fill(256,256,256)
    square(165,25, 35);
    square(165,60, 35);
    square(165,95, 35);
    square(165,130, 35);
    square(165,165, 35);
    square(165,200, 35);
    square(165,235, 35);
    square(165,270, 35);
    square(165,305, 35);
    square(165,340, 35);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 175, 85);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 175, 120);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 175, 155);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 175, 190);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 175, 225);
    
    fill(220)
   square(165,25, 35);
    square(165,235, 35);
    square(165,270, 35);
    square(165,305, 35);
    square(165,340, 35);
    
    //第六列
  fill(256,256,256)
    square(200,25, 35);
    square(200,60, 35);
    square(200,95, 35);
    square(200,130, 35);
    square(200,165, 35);
    square(200,200, 35);
    square(200,235, 35);
    square(200,270, 35);
    square(200,305, 35);
    square(200,340, 35);
    
  fill(0);
   textSize(24);
   textFont('1');
   text('1', 210, 85);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 210, 120);
    
    fill(0);
   textSize(24);
   textFont('2');
   text('2', 210, 155);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 210, 225);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 210, 260);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 210, 295);
    
    fill(0);
   textSize(24);
   textFont('2');
   text('2', 210, 330);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 210, 365);
    
    fill(220)
   square(200,25, 35);
   
  //地雷
   fill(256,0,0)
   circle(218, 183, 25);
    
    //第七列
  fill(256,256,256)
    square(235,25, 35);
    square(235,60, 35);
    square(235,95, 35);
    square(235,130, 35);
    square(235,165, 35);
    square(235,200, 35);
    square(235,235, 35);
    square(235,270, 35);
    square(235,305, 35);
    square(235,340, 35);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 245, 85);
    
    fill(0);
   textSize(24);
   textFont('2');
   text('2', 245, 155);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 245, 190);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 245, 225);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 245, 260);
    
    fill(0);
   textSize(24);
   textFont('2');
   text('2', 245, 330);
    
    fill(220)
   square(235,25, 35);
  
    //地雷
   fill(256,0,0)
   circle(253, 113, 25);
    circle(253, 288, 25);
    circle(253, 358, 25);
    
     //第八列
  fill(256,256,256)
    square(270,25, 35);
    square(270,60, 35);
    square(270,95, 35);
    square(270,130, 35);
    square(270,165, 35);
    square(270,200, 35);
    square(270,235, 35);
    square(270,270, 35);
    square(270,305, 35);
    square(270,340, 35);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 280, 50);
    
    fill(0);
   textSize(24);
   textFont('2');
   text('2', 280, 85);
    
    fill(0);
   textSize(24);
   textFont('2');
   text('2', 280, 120);
    
    fill(0);
   textSize(24);
   textFont('2');
   text('2', 280, 155);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 280, 260);
    
    fill(0);
   textSize(24);
   textFont('2');
   text('2', 280, 295);
    
    fill(0);
   textSize(24);
   textFont('3');
   text('3', 280, 330);
    
    fill(0);
   textSize(24);
   textFont('2');
   text('2', 280, 365);
    
    fill(220)
   square(270,165, 35);
    square(270,200, 35);
    
    //第九列
    fill(256,256,256)
    square(305,25, 35);
    square(305,60, 35);
    square(305,95, 35);
    square(305,130, 35);
    square(305,165, 35);
    square(305,200, 35);
    square(305,235, 35);
    square(305,270, 35);
    square(305,305, 35);
    square(305,340, 35);
  //數字
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 315, 50);
    
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 315, 120);
    
    
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 315, 295);
    
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 315, 365);
    
   fill(220)
   square(305,130, 35);
    square(305,165, 35);
    square(305,200, 35);
      square(305,235, 35);
  //地雷
   fill(256,0,0)
   circle(323, 323, 25);
     circle(323, 78, 25);
    
    //第十列
     fill(256,256,256)
    square(340,25, 35);
    square(340,60, 35);
    square(340,95, 35);
    square(340,130, 35);
    square(340,165, 35);
    square(340,200, 35);
    square(340,235, 35);
    square(340,270, 35);
    square(340,305, 35);
    square(340,340,35);
  //數字
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 350, 50);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 350, 85);
    
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 350, 120);
    
    
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 350, 295);
    
    fill(0);
   textSize(24);
   textFont('1');
   text('1', 350, 330);
    
   fill(0);
   textSize(24);
   textFont('1');
   text('1', 350, 365);
    
   fill(220)
   square(340,130, 35);
  square(340,165, 35);
  square(340,200, 35);
  square(340,235, 35);
  
   //第一列
    fill(256,256,256,255);
    square(25,25, 35);
    square(25,235, 35);
    //第二列
    square(60,305, 35);
    //第三列
    square(95,270, 35);
    //第四列
    square(130,95, 35);
    //第六列
    square(200,165, 35);
    //第七列
    square(235,95, 35);
    square(235,270, 35);
    square(235,340, 35);
    //第九列
    square(305,60, 35);
    square(305,305, 35);
  if (mouseButton === LEFT) {
  fill(256,256,256,100);
    square(340,340,35)
    square(25,60, 35);
    square(25,200, 35);
    square(25,270, 35);
    square(25,305, 35);
    square(25,340, 35);
    square(60,25, 35);
    square(60,60, 35);
    square(60,165, 35);
    square(60,200, 35);
    square(60,235, 35);
    square(60,270, 35);
    square(60,340, 35);
    square(95,60, 35);
    square(95,95, 35);
    square(95,130, 35);
    square(95,165, 35);
    square(95,235, 35);
    square(95,305, 35);
    square(95,340, 35);
    square(130,60, 35);
    square(130,130, 35);
    square(130,165, 35);
    square(130,200, 35);
    square(130,235, 35);
    square(130,270, 35);
    square(130,305, 35);
    square(165,60, 35);
    square(165,95, 35);
    square(165,130, 35);
    square(165,165, 35);
    square(165,200, 35);
    square(200,60, 35);
    square(200,95, 35);
    square(200,130, 35);
    square(200,200, 35);
    square(200,235, 35);
    square(200,270, 35);
    square(200,305, 35);
    square(200,340, 35);
    square(235,60, 35);
    square(235,130, 35);
    square(235,165, 35);
    square(235,200, 35);
    square(235,235, 35);
    square(235,305, 35);
    square(270,25, 35);
    square(270,60, 35);
    square(270,95, 35);
    square(270,130, 35);
    square(270,235, 35);
    square(270,270, 35);
    square(270,305, 35);
    square(270,340, 35);
    square(305,25, 35);
    square(305,95, 35);
    square(305,270, 35);
    square(305,340, 35);
    square(340,25, 35);
    square(340,60, 35);
    square(340,95, 35);
    square(340,270,35);
    square(340,305,35);
      } else {
  fill(256,256,256,255);
    square(340,340,35)
    square(25,60, 35);
    square(25,200, 35);
    square(25,270, 35);
    square(25,305, 35);
    square(25,340, 35);
    square(60,25, 35);
    square(60,60, 35);
    square(60,165, 35);
    square(60,200, 35);
    square(60,235, 35);
    square(60,270, 35);
    square(60,340, 35);
    square(95,60, 35);
    square(95,95, 35);
    square(95,130, 35);
    square(95,165, 35);
    square(95,235, 35);
    square(95,305, 35);
    square(95,340, 35);
    square(130,60, 35);
    square(130,130, 35);
    square(130,165, 35);
    square(130,200, 35);
    square(130,235, 35);
    square(130,270, 35);
    square(130,305, 35);
    square(165,60, 35);
    square(165,95, 35);
    square(165,130, 35);
    square(165,165, 35);
    square(165,200, 35);
    square(200,60, 35);
    square(200,95, 35);
    square(200,130, 35);
    square(200,200, 35);
    square(200,235, 35);
    square(200,270, 35);
    square(200,305, 35);
    square(200,340, 35);
    square(235,60, 35);
    square(235,130, 35);
    square(235,165, 35);
    square(235,200, 35);
    square(235,235, 35);
    square(235,305, 35);
    square(270,25, 35);
    square(270,60, 35);
    square(270,95, 35);
    square(270,130, 35);
    square(270,235, 35);
    square(270,270, 35);
    square(270,305, 35);
    square(270,340, 35);
    square(305,25, 35);
    square(305,95, 35);
    square(305,270, 35);
    square(305,340, 35);
    square(340,25, 35);
    square(340,60, 35);
    square(340,95, 35);
    square(340,270,35);
    square(340,305,35); }
        
  if (mouseButton === RIGHT) {
  fill(256,256,256,100);
    square(25,95, 35);
    square(25,130, 35);
    square(25,165, 35);
    square(60,95, 35);
    square(60,130, 35);
    square(95,25, 35);
    square(130,25, 35);
    square(130,340, 35);
    square(165,25, 35);
    square(165,235, 35);
    square(165,270, 35);
    square(165,305, 35);
    square(165,340, 35);
    square(200,25, 35);
    square(235,25, 35);
    square(270,165, 35);
    square(270,200, 35);
    square(305,130, 35);
    square(305,165, 35);
    square(305,200, 35);
    square(305,235, 35);
    square(340,130,35);
    square(340,165,35);
    square(340,200,35);
    square(340,235,35);
      } else {
  fill(256,256,256,255);
    square(25,95, 35);
    square(25,130, 35);
    square(25,165, 35);
    square(60,95, 35);
    square(60,130, 35);
    square(95,25, 35);
    square(130,25, 35);
    square(130,340, 35);
    square(165,25, 35);
    square(165,235, 35);
    square(165,270, 35);
    square(165,305, 35);
    square(165,340, 35);
    square(200,25, 35);
    square(235,25, 35);
    square(270,165, 35);
    square(270,200, 35);
    square(305,130, 35);
    square(305,165, 35);
    square(305,200, 35);
    square(305,235, 35);
    square(340,130,35);
    square(340,165,35);
    square(340,200,35);
    square(340,235,35); }
        
  if (mouseButton ===CENTER) {
  fill(256,256,256,100);
    square(95,200, 35);
     } else {
    fill(256,256,256,255);
    square(95,200, 35);
    
  fill(220);
   textSize(12);
   textFont('找到');
   text('找到',25, 20);
     
    fill(0,256,0)    
    circle(60,15,15)
     }}