let a1=0;
let a2=0;
let a3=0;
let a4=0;
let a5=0;
let a6=0;
let a7=0;
let a8=0;
let a9=0;
let a10=0;
let a11=0;
let a12=0;
let a13=0;
let a14=0;
let a15=0;
let a16=0;
let a17=0;
let a18=0;
let a19=0;
let a20=0;

function preload(){
  
  //Hair Choices!!
  bangs1=loadImage ("https://cartoonmonster.github.io/bangs1.png");
  curlsback=loadImage ("https://cartoonmonster.github.io/curlsback.png");
  basehair=loadImage ("https://cartoonmonster.github.io/basehair.png");
  hair1=loadImage ("https://cartoonmonster.github.io/pinkhair1.png");
hair2=loadImage ("https://cartoonmonster.github.io/pinkhair2.png");
  
  //The Outline
outline=loadImage ("https://cartoonmonster.github.io/outlinelayer.png");
nails=loadImage ("https://cartoonmonster.github.io/nailcolor.png");

//Face Choices!!
face1=loadImage ("https://cartoonmonster.github.io/pinkeyes1.png");
face2=loadImage ("https://cartoonmonster.github.io/pinkeyes2.png");
face3=loadImage ("https://cartoonmonster.github.io/pinkeyes3.png");

//Mouth Choices!!
mouth1=loadImage ("https://cartoonmonster.github.io/smile1.png");
mouth2=loadImage ("https://cartoonmonster.github.io/smile2.png");
mouth3=loadImage ("https://cartoonmonster.github.io/smile3.png");
mouth4=loadImage ("https://cartoonmonster.github.io/smile4.png");

//Clothing  Choices!!
clothing=loadImage ("https://cartoonmonster.github.io/clothing1.png");

//Skin Choices!
skin1=loadImage ("https://cartoonmonster.github.io/skin1.png");
skin2=loadImage ("https://cartoonmonster.github.io/skin2.png");
skin3=loadImage ("https://cartoonmonster.github.io/skin3.png");
skin4=loadImage ("https://cartoonmonster.github.io/skin4.png");
  
}

function setup() {
  createCanvas(1040, 1053);
}

function draw() {
  background(220);
  fill (255);
  noStroke();
//  rect (0,0,300,300);
  
 
  image (curlsback);
  tint(255,a4);
  image (skin1, 50, 10);
    tint(255,a16);
  image (skin2, 50, 10);
    tint(255,a17);
  image (skin3, 50, 10);
    tint(255,a18);
  image (skin4, 50, 10);
    tint(255,a19);
  //image (skin5, 50, 10);
  tint(255,a1);
  image (outline, 50, 10);
   tint(255,a2);
  image (bangs1);
  tint(255,a3);
  image (basehair, 50, 10);
  tint(255,a5);
  image (hair1);
  tint(255,a6);
  image (hair2);
  tint(255,a7);
  image (nails);
  tint(255,a8);
  image (face1);
  tint(255,a9);
  image (face2);
  tint(255,a10);
  image (face3);
  tint(255,a11);
  image (mouth1);
  tint(255,a12);
  image (mouth2);
  tint(255,a13);
  image (mouth3);
    tint(255,a14);
  image (mouth4);
    tint(255,a15);
  image (clothing, 50, 10);
  tint(255,a20);
  

  button = createButton ('Outline');
  button.position (310,10);
  button.mousePressed(h1);
  
  button = createButton ('Skin 1');
  button.position (375,10);
  button.mousePressed(h2);
  
  button = createButton ('Skin 2');
  button.position (440,10);
  button.mousePressed(h3);
  
  button = createButton ('Skin 3');
  button.position (310,50);
  button.mousePressed(t1);
  
  button = createButton ('Skin 4');
  button.position (375,50);
  button.mousePressed(t2);
  
  button = createButton ('Clothing');
  button.position (440,50);
  button.mousePressed(t3);

  button = createButton ('Base Hair');
  button.position (310,90);
  button.mousePressed(b1);
  
  button = createButton ('bottom 2');
  button.position (410,90);
  button.mousePressed(b2);
  
  button = createButton ('shoe 1');
  button.position (310,130);
  button.mousePressed(s1);
  
  button = createButton ('shoe 2');
  button.position (410,130);
  button.mousePressed(s2);
  
  button = createButton ('tambourine 1');
  button.position (310,170);
  button.mousePressed(tb1);
  
  button = createButton ('tambourine 2');
  button.position (410,170);
  button.mousePressed(tb2);
  
  button = createButton ('shades on');
  button.position (310,210);
  button.mousePressed(shadesOn);
  
  button = createButton ('shades off');
  button.position (410,210);
  button.mousePressed(shadesOff);
  
  button = createButton ('reset');
  button.position (310,250);
  button.mousePressed(reset);
}
//Outline
function h1(){
a1=255;
}
//SKIN 1
function h2(){
//a1=0;
  a16=255;
  a17=0;
  a18=0;
  a19=0;
//  a3=0;
}
//SKIN 2
function h3(){
//a1=0;
  a16=0;
  a17=255;
  a18=0;
  a19=0;
}
//Skin 3
function t1(){
a16=0;
a18=0;
a18=255;
a19=0;
}
//Skin 4
function t2(){
  a16=0;
  a17=0;
  a18=0;
  a19=255;
}
//Clothing v

function t3(){
a20=255;
a1=255;
}

function b1(){
a5=255;
}

function b2(){
a4=0;
  a5=255;
}

function s1(){
a9=255;
  a10=0;
}

function s2(){
a9=0;
  a10=255;
}

function tb1(){
a12=255;
  a13=0;
}

function tb2(){
a12=0;
  a13=255;
}

function shadesOn(){
a11=255;
}

function shadesOff(){
a11=0;
}

function reset(){
a1=0;
a2=0;
a3=0;
a4=0;
a5=0;
a6=0;
a7=0;
a8=0;
a9=0;
a10=0;
a11=0;
a12=0;
a13=0;
a14=0;
a15=0;
a16=0;
a17=0;
a18=0;
a19=0;
a20=0;
}
