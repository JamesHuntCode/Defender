function playerIcon(x, y) {
  this.posX = x;
  this.posY = y;
  this.sideLength = 20;
  this.xVelocity = 0;
  this.yVelocity = 0;
  this.facing = "right"

  this.show = function() {
    stroke(0, 255, 0);
    strokeWeight(1);
    noFill();

    if (this.facing === "right") {
      triangle(this.posX, this.posY, this.posX - this.sideLength * 1.5, this.posY - this.sideLength / 2, this.posX - this.sideLength * 1.5, this.posY + this.sideLength / 2);
    } else {
      triangle(this.posX, this.posY, this.posX + this.sideLength * 1.5, this.posY + this.sideLength / 2, this.posX + this.sideLength * 1.5, this.posY - this.sideLength / 2);
    }
  }

  this.updatePos = function() {
    this.posX += this.xVelocity;
    this.posY += this.yVelocity;
  }

  this.rotate = function(direction) {
    if (direction === "left") {
      if (this.facing != "left") {
        this.facing = "left";
        this.posX = this.posX - (this.sideLength * 2);
      }
    } else {
      if (this.facing != "right") {
        this.facing = "right";
        this.posX = this.posX + (this.sideLength * 2);
      }
    }
  }
}
