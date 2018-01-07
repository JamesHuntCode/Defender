function obstacle(x, y) {
  this.posX = x;
  this.posY = y;
  this.sideLength = random(30, 50);
  this.health = 500;

  this.update = function() {

  }

  this.show = function() {

  }

  this.reachesLeftSide = function() {
    if (this.posX + this.sideLength < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.hitsPlayer = function(player) {

  }
}
