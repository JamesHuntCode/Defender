var player;
var playerLasers = [];
var playerScore = 0;

var terrainPoints = [];

var enemies = [];
var enemyLasers = [];

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
    enemies[i] = new enemyShip(width + 20, randomY);
  }
}

function draw() {
  // Draw canvas and create score tracker
  background(51);
  stroke(255);
  var margin = 30;
  text("SCORE: " + playerScore, margin, margin);
  line(0, 50, width, 50);

  // Draw player
  player.show();
  player.updatePos();
  player.boundaries();

  // Draw player player's lasers
  for (let i = 0; i < playerLasers.length; i++) {
    playerLasers[i].update();
    playerLasers[i].show();
  }

  // Check if player laser is off the screen
  for (let i = 0; i < playerLasers.length; i++) {
    if (playerLasers[i].offScreen()) {
      playerLasers.splice(i, 1);
    }

    // Check if player laser has hit an enemy ship
    for (let j = 0; j < enemies.length; j++) {
      if (playerLasers[i].hits(enemies[j]) && playerLasers[i].active) {
        enemies.splice(j, 1);
        playerLasers[i].active = false;
        playerScore += 100;
      }
    }
  }

  // Draw enemies
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update();
    enemies[i].show();
    enemies[i].boundaries();
  }

  // Check if enemy can fire a shot at player
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].hasClearShotAt(player)) {
      var calculatedVel;
      if (enemies[i].velocity > 0) {
        calculatedVel = -10;
      } else {
        calculatedVel = 10;
      }
      // After calculation, add a level of chance
      if (Math.floor(Math.random() * 100) === 50) {
        // Make sure enemy is facing player
        if (enemies[i].velocity > 0) {
          if (enemies[i].posX > player.posX) {
            enemyLasers.push(new enemyLaser(enemies[i].posX, enemies[i].posY, calculatedVel));
          }
        } else {
          if (enemies[i].posX < player.posX) {
            enemyLasers.push(new enemyLaser(enemies[i].posX, enemies[i].posY, calculatedVel));
          }
        }
      }
    }

    // Check if the player has collided with an enemy ship
    if (enemies[i].touches(player)) {
      if (player.xVelocity > 0 || player.yVelocity > 0) {
        enemies.splice(i, 1);
        playerScore += 50;
      } else {
        location.reload();
      }
    }
  }

  // Add more spaceships over time
  if (enemies.length < 5) {
    if (Math.floor(Math.random() * 100) === 50) {
      enemies.push(new enemyShip(width + 20, random(60, height / 2)));
    }
  }

  // Draw enemy lasers
  for (let i = 0; i < enemyLasers.length; i++) {
    enemyLasers[i].update();
    enemyLasers[i].show();
  }

  // Check if enemy lasers are still on the screen
  for (let i = 0; i < enemyLasers.length; i++) {
    if (enemyLasers[i].offScreen()) {
      enemyLasers.splice(i, 1);
    }

    // Check if enemy laser has hit the player
    if (enemyLasers[i].hits(player)) {
      location.reload();
    }
  }

  // Draw terrain
  stroke(139, 69, 19);
  noFill();
  beginShape();
  for (let i = 0; i < terrainPoints.length; i++) {
    terrainPoint[i] = vertex(terrainPoints[i].posX, terrainPoints[i].posY);
  }
  endShape();
  noStroke();

  for (let i = 0; i < terrainPoints.length; i++) {
    terrainPoints[i].update();

    // When terrain point moves off the screen, remove it
    if (terrainPoints[i].needsRemoving()) {
      terrainPoints.splice(i, 1);
      terrainPoints.push(new terrainPoint(terrainPoints[terrainPoints.length - 1].posX + 50, random(height / 1.5, height)));
    }
  }
}

// Method handling player movements
// Player to move constantly until key is no longer being held down
function keyPressed() {
  if (key != ' ') {
    switch(keyCode) {
      case UP_ARROW:
        if (player.posY > 65) {
          player.yVelocity = -7;
        }
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
        if (player.facing === "right") {
          playerLasers.push(new playerLaser(player.posX, player.posY, 20));
        } else {
          playerLasers.push(new playerLaser(player.posX - 20, player.posY, -20));
        }
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
