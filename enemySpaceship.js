function enemyShip(x, y) {
  this.posX = x;
  this.posY = y;
  this.sideLength = 20;
  this.velocity = random(2, 4);

  this.update = function() {
    this.posX -= this.velocity;
  }

  this.hitsLeftSide = function() {
    
  }

  this.show = function() {
    stroke(255, 0, 0);
    strokeWeight(1);
    noFill();
    triangle(this.posX, this.posY, this.posX + this.sideLength * 1.5, this.posY + this.sideLength / 2, this.posX + this.sideLength * 1.5, this.posY - this.sideLength / 2);
  }
}
