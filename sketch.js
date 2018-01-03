var mountains = [];
var mountainOffset;
var player;

function setup() {
  createCanvas(600, 400);

  // Add initial terrain
  mountainOffset = 0;
  for (let i = 0; i < 30; i++) {
    addNewMountain();
  }

  // Initialize player icon
  player = new playerIcon(width / 2, height / 3);
}

function draw() {
  background(51);

  // Draw player
  player.show();
  player.updatePos();
  player.teleport();

  // Draw terrain
  for (let i = 0; i < mountains.length; i++) {
    mountains[i].update();
    mountains[i].show();
  }

  // Dynamically add more mountains as they leave the screen
  for (let i = 0; i < mountains.length; i++) {
    if (mountains[i].offScreen()) {
      mountains.splice(i, 1);
      if (mountains.length < 300) {
        for (let j = 0; j < 5; j++) {
          addNewMountain();
        }
      }
    }
  }
}

// Method handling player movements
function keyPressed() {
  if (key != ' ') {
    switch(keyCode) {
      case UP_ARROW:
        player.yVelocity = -5;
      break;
      case DOWN_ARROW:
        player.yVelocity = 5;
      break;
      case LEFT_ARROW:
        player.xVelocity = -5;
      break;
      case RIGHT_ARROW:
        player.xVelocity = 5;
      break;
    }
  } else {
      if (key === ' ') {
        console.log("Shot fired");
    }
  }
}

function keyReleased() {
  switch(keyCode) {
    case UP_ARROW:
      player.yVelocity = 0;
    break;
    case DOWN_ARROW:
      player.yVelocity = 0;
    break;
    case LEFT_ARROW:
      player.xVelocity = 0;
    break;
    case RIGHT_ARROW:
      player.xVelocity = 0;
    break;
  }
  return false;
}

// Method to add a new mountain at a specified x and y location
function addNewMountain() {
  var peak = random(height / 3, height);
  var slope = random(1, 4);
  var length = height - peak;
  mountains.push(new mountain(mountainOffset, peak, length, slope));
  mountainOffset += length / slope;
}
