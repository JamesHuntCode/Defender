function enemyShip(x, y) {
  this.posX = x;
  this.posY = y;
  this.sideLength = 15;
  this.velocity = random(-5, 5);

  if (this.velocity === 0) {
    this.velocity = 3;
  }

  if (this.velocity > 0) {
    this.facing = "left"
  } else {
    this.facing = "right"
  }

  this.update = function() {
    this.posX -= this.velocity;
  }

  this.boundaries = function() {
    if (this.posX + this.sideLength < 0) {
      this.posX = width + this.sideLength;
    } else if (this.posX - this.sideLength > width) {
      this.posX = 0 - this.sideLength;
    }
  }

  this.show = function() {
    stroke(255, 0, 0);
    strokeWeight(1);
    noFill();
    if (this.facing === "left") {
      triangle(this.posX, this.posY, this.posX + this.sideLength * 1.5, this.posY + this.sideLength / 2, this.posX + this.sideLength * 1.5, this.posY - this.sideLength / 2);
    } else {
      triangle(this.posX, this.posY, this.posX - this.sideLength * 1.5, this.posY - this.sideLength / 2, this.posX - this.sideLength * 1.5, this.posY + this.sideLength / 2);
    }
  }

  this.hasClearShotAt = function(player) {
    if ((this.posY > (player.posY - 20)) && (this.posY < player.posY + 20)) {
      return true;
    } else {
      return false;
    }
  }
}
