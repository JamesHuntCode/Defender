function mountain(x, y, len, off) {
  this.posX = x;
  this.posY = y;
  this.sideLength = len;
  this.offset = off;
  this.velocity = 0.1;

  this.update = function() {
    this.posX -= this.velocity;
  }

  this.show = function() {
    noFill();
    stroke(0, 255, 0);
    triangle(this.posX, this.posY, this.posX - this.sideLength, this.posY + this.sideLength, this.posX + this.sideLength, this.posY + this.sideLength);
  }
}
