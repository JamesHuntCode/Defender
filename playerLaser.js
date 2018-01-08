function playerLaser(x, y, v) {
  this.posX = x;
  this.posY = y;
  this.velocity = v;
  this.size = 20;
  this.active = true;

  this.update = function() {
    this.posX += this.velocity;
  }

  this.show = function() {
    if (this.active) {
      fill(255);
      noStroke();
      rect(this.posX, this.posY, this.size, this.size / 10);
    }
  }

  this.hits = function(enemy) {
    if (this.posY >= enemy.posY - 10 && this.posY <= enemy.posY + 10) {
      if (this.posX >= enemy.posX - enemy.sideLength && this.posX <= enemy.posX + enemy.sideLength) {
        return true;
      } else
      return false;
    } else {
      return false;
    }
  }

  this.offScreen = function() {
    if (this.posX - this.sideLength > width || this.posX + this.sideLength < 0) {
      return true;
    } else {
      return false;
    }
  }
}
