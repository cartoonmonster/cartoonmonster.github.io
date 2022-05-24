function setup() {
createCanvas(800, 800);
//angleMode(DEGREES);
background(191, 163, 214);
}


function draw() {
  background(191, 163, 214);
  //(Sideways,Up/Down,Width,Height)
  
  //body
  push();
  stroke(134, 87, 150);
  fill(134, 87, 150);
ellipse(400, 730, 300, 500);
pop();
  //back of hair
ellipse(400, 350, 300, 300);
 //top of hair
ellipse(400, 260, 300, 300);
 //NECK
 push();
 fill(209, 184, 151);//neck color
 stroke(166, 135, 94);
 rect(365,400,80,100);//neck
 pop();
 
  //(Sideways,Up/Down,Width,Height) :)
 fill(201, 162, 109);//Ear color for now

 //LEFT EAR
 push();
fill(209, 184, 151);
stroke(166, 135, 94);
 ellipse(250,330,90,90);//Left Ear
 pop();
 
 //left ear inside
 push();
 stroke(181, 145, 98);
 fill(181, 145, 98);
 ellipse(257, 330, 50, 50);
 pop();
 
 //RIGHT EAR
push();
 fill(209, 184, 151);
stroke(166, 135, 94);
 ellipse(550,330,90,90);//Right Ear
 pop();
 //right ear inside
 push();
 stroke(181, 145, 98);
 fill(181, 145, 98);
 ellipse(543,330,50,50);
 pop();
 
 //HEAD
 push();
 fill(209, 184, 151);
 stroke(166, 135, 94);
 ellipse(400,300,280,350);//head
 pop();
 
 //LEFT EYE - EYEBAG
 push();
 translate(276, 233);
 fill(173, 157, 137);
 stroke(173, 157, 137);
 arc(50, 50, 93, 115, 0, PI);
pop();

//FRECKLES

//L CHEEK FR L1
push();
stroke(166, 135, 94);
fill(166, 135, 94);
translate(250, 298);
ellipse(50, 50, 10, 5);
pop();

//L CHEEK FR R1
push();
stroke(166, 135, 94);
fill(166, 135, 94);
translate(295, 296);
ellipse(50, 50, 10, 5);
pop();

//L CHEEK FR MI1
push();
stroke(166, 135, 94);
fill(166, 135, 94);
translate(273, 307);
ellipse(50, 50, 10, 5);
pop();

//FRECKLES RIGHT CHEEK

//R CHEEK FR L1
push();
stroke(166, 135, 94);
fill(166, 135, 94);
translate(415, 298);
ellipse(50, 50, 10, 5);
pop();

//R CHEEK FR R1
//R CHEEK FR L1
push();
stroke(166, 135, 94);
fill(166, 135, 94);
translate(455, 296);
ellipse(50, 50, 10, 5);
pop();

//R CHEEK FR MI1
push();
stroke(166, 135, 94);
fill(166, 135, 94);
translate(437, 307);
ellipse(50, 50, 10, 5);
pop();

//NOSE
push();
stroke(201, 162, 109);
fill(201, 162, 109);
translate(352, 280);
 arc(50, 50, 50, 50, 0, PI);
pop();

//RIGHT EYE - EYEBAG
push();
 translate(427, 233);
 fill(173, 157, 137);
 stroke(173, 157, 137);
 arc(50, 50, 93, 115, 0, PI);
pop();

 //WHITE OF EYE BEHIND LEFT
push();
translate(276, 233);
fill(255, 255, 255);
arc(50, 50, 93, 90, 0, PI);
pop();

//WHITE OF EYE BEHIND RIGHT
push();
translate(427, 233);
fill(255, 255, 255);
arc(50, 50, 93, 90, 0, PI);
pop();

//RIGHT EYE COLOR
push();
translate(429, 227);
rotate(50.36);
fill(89, 60, 20);
arc(50, 50, 80, 80, 0, PI);
pop();
 
  //(Sideways,Up/Down,Width,Height) :)
 //LEFT EYE COLOR
 push();
 translate(278, 233);
 rotate(50.23);
 fill(89, 60, 20);
 arc(50, 50, 80, 80, 0, PI);
 pop();

 //LEFT EYE UPPER LINE
 rotate(-PI/50.0);
 fill(0,0,0);
 rect(260,300,95,10);//Left Eye Upper Line

 //RIGHT EYE UPPER LINE
 push();
 rotate(PI/25.0);
 fill(0,0,0);
 rect(446,250,95,10);//Right Eye Upper Line
 pop();
 
 push();
 beginShape();
 fill(0, 0, 0);
 strokeWeight(4);
stroke(161, 157, 122);
curveVertex(100, 150);
curveVertex(40, 40);
curveVertex(500, 300);
endShape();
pop();

  //(Sideways,Up/Down,Width,Height)

//top of hair
push();
ellipse(330, 200, 100, 100);
ellipse(326, 210, 100, 100);
ellipse(320, 220, 100, 100);
ellipse(315, 230, 100, 100);
ellipse(305, 240, 100, 100);
ellipse(350, 200, 100, 100);
ellipse(370, 200, 100, 100);
ellipse(390, 190, 100, 100);
ellipse(400, 200, 100, 100);
ellipse(420, 200, 100, 100);
ellipse(370, 225, 100, 100);
pop();

//mouth
push();
rect(350,450, 50, 5);
pop();
 
 //lines of arms
 push();
 stroke(85, 51, 102);
 fill(85, 51, 102);
 rect(280, 680, 5, 300);
 rect(430, 680, 5, 300);
 pop();
}
 
