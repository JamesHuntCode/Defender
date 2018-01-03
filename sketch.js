var mountains = [];
var mountainOffset;

function setup() {
  createCanvas(600, 400);
  mountainOffset = 0;
  for (let i = 0; i < 50; i++) {
    addNewMountain();
  }
}

function draw() {
  background(51);

  for (let i = 0; i < mountains.length; i++) {
    mountains[i].update();
    mountains[i].show();
  }

  for (let i = 0; i < mountains.length; i++) {
    if (mountains[i].offScreen()) {
      mountains.splice(i, 1);
      for (let j = 0; j < 10; j++) {
        addNewMountain();
      }
    }
  }
}

function addNewMountain() {
  var peak = random(height / 2, height / 1.1);
  var slope = random(1, 4);
  var length = height - peak;
  mountains.push(new mountain(mountainOffset, peak + 10, length, slope));
  mountainOffset += length / slope;
}
