var mountain;

function setup() {
  createCanvas(600, 400);
   mountain = new mountain(width/2, height/2, 50, 2);
}

function draw() {
  background(51);
  //mountain.update();
  mountain.show();
}
