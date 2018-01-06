function terrainPoint(x, y) {
  this.posX = x;
  this.posY = y;
  this.velocity = 3;

  this.update = function() {
    this.posX -= this.velocity;
  }

  this.offScreen = function() {
    if (this.posX < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.needsRemoving = function() {
    if (this.posX < -50) {
      return true;
    } else {
      return false;
    }
  }

  this.hitsPlayer = function() {

  }
}
