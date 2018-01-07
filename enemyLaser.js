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

  this.hitsPlayer = function(player) {

  }

  this.offScreen = function() {
    if (this.posX - this.sideLength > width || this.posX + this.sideLength < 0) {
      return true;
    } else {
      return false;
    }
  }
}
