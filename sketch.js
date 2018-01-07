var player;
var playerLasers = [];
var playerScore = 0;

var terrainPoints = [];

var enemies = [];
var enemyLasers = [];

var obstacles = [];

function setup() {
  createCanvas(600, 400);

  // Add initial terrain
  var gap = 0;
  for (let i = 0; i < 50; i++) {
    terrainPoints[i] = new terrainPoint(gap, random(height / 1.5, height));
    gap += 50;
  }

  // Initialize player icon
  player = new playerIcon(width / 2, height / 3);

  // Initialize enemy ships
  for (let i = 0; i < 3; i++) {
    var randomY = random(60, height / 2);
    enemies[i] = new enemyShip(width - 10, randomY);
  }
}

function draw() {
  background(51);
  stroke(255);
  var margin = 30;
  text("SCORE: " + playerScore, margin, margin);
  line(0, 50, width, 50);

  // Draw player
  player.show();
  player.updatePos();
  player.boundaries();

  // Draw enemies
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update();
    enemies[i].show();
    enemies[i].boundaries();
  }

  for (let i = 0; i < enemies.length; i++) {
    
  }

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
      terrainPoints.push(new terrainPoint(terrainPoints[terrainPoints.length - 1].posX + 50, random(height / 1.5, height)));
    }
  }
}

// Method handling player movements
function keyPressed() {
  if (key != ' ') {
    switch(keyCode) {
      case UP_ARROW:
        player.yVelocity = -7;
      break;
      case DOWN_ARROW:
        player.yVelocity = 7;
      break;
      case LEFT_ARROW:
        player.xVelocity = -7;
        player.rotate("left");
      break;
      case RIGHT_ARROW:
        player.xVelocity = 7;
        player.rotate("right");
      break;
    }
  } else {
      if (key === ' ') {
        // create bullet moving towards enemy ship
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
