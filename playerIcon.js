function playerIcon(x, y) {
  this.posX = x;
  this.posY = y;
  this.sideLength = 20;
  this.velocity = 0;

  this.show = function() {
    stroke(0, 255, 0)
    strokeWeight(1);
    noFill();
    triangle(this.posX, this.posY, this.posX - this.sideLength * 1.5, this.posY - this.sideLength / 2, this.posX - this.sideLength * 1.5, this.posY + this.sideLength / 2);
  }

  this.updatePos = function() {
    this.posX += this.velocity;
  }

  this.rotate = function(direction) {
    if (direction === "left") {
      // Rotate left
    } else {
      // Rotate right
    }
  }
}
