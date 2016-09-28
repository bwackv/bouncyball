var x = 10; //all variables are var in p5
var y = 50;
var speed = 3;

function setup() {
    createCanvas(600,400);
}

function draw() {
  background(100);
  text("X Position of my circle: " + x, 20, 30);
  noStroke();
  fill(255,0,0);
  ellipse(x, y, 50,50)
  
  x = (-x)*-2;
  y = (-y + 1)*-2;

  
  
  if(x>=width){
    speed = -3;
  }
  if(x<=0){
    speed = 3;
  }
}