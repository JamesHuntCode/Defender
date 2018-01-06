var player;
var terrainPoints = [];

function setup() {
  createCanvas(600, 400);

  // Add initial terrain
  var off = 0;
  for (let i = 0; i < 50; i++) {
    terrainPoints[i] = new terrainPoint(off, random(height / 2, height));
    off += 50;
  }

  // Initialize player icon
  player = new playerIcon(width / 2, height / 3);
}

function draw() {
  background(51);

  // Draw player
  player.show();
  player.updatePos();

  // Draw terrain
  stroke(139, 69, 19);
  beginShape();
  for (let i = 0; i < terrainPoints.length; i++) {
    terrainPoint[i] = vertex(terrainPoints[i].posX, terrainPoints[i].posY);
  }
  endShape();
  noStroke();

  for (let i = 0; i < terrainPoints.length; i++) {
    terrainPoints[i].update();

    if (terrainPoints[i].needsRemoving()) {
      terrainPoints.splice(i, 1);
      terrainPoints.push(new terrainPoint(terrainPoints[terrainPoints.length - 1].posX + 50, random(height / 2, height)));
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
