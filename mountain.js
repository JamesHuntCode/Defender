function mountain(x, y, len, off) {
  this.posX = x;
  this.posY = y;
  this.sideLength = len;
  this.offset = off;
  this.velocity = 2;

  this.update = function() {
    this.posX -= this.velocity;
  }

  this.show = function() {
    noFill();
    stroke(139, 69, 19);
    strokeWeight(1);
    triangle(this.posX, this.posY, this.posX - this.sideLength / this.offset, this.posY + this.sideLength, this.posX + this.sideLength / this.offset, this.posY + this.sideLength);
  }

  this.offScreen = function() {
    if ((this.posX + this.sideLength / this.offset) < 0) {
      return true;
    } else {
      return false;
    }
  }
}
