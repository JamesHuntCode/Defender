function enemyLaser(x, y, v) {
  this.posX = x;
  this.posY = y;
  this.velocity = v;
  this.size = 20;

  this.update = function() {
    this.posX += this.velocity;
  }

  this.show = function() {
    fill(255, 0, 0);
    noStroke();
    rect(this.posX, this.posY, this.size, this.size / 10);
  }

  this.hits = function(player) {
    if (this.posY >= player.posY - 10 && this.posY <= player.posY + 10) {
      if (this.posX >= player.posX - player.sideLength && this.posX <= player.posX + player.sideLength) {
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
