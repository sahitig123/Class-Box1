
var box1, box2

function setup() {
  createCanvas(600, 400);
  
  box1 = new Box(120,300,70,40);
  box2 = new Box(140,300,60,50);
}

function draw() {
  background(220);
box1.show();
box1.setspeed(2);
box2.show();
box2.setspeed(-2);
}

