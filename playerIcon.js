function playerIcon(x, y) {
  this.posX = x;
  this.posY = y;
  this.sideLength = 20;

  this.show = function() {
    stroke(0, 255, 0)
    strokeWeight(1);
    noFill();
    triangle(this.posX, this.posY, this.posX - this.sideLength * 1.5, this.posY - this.sideLength / 2, this.posX - this.sideLength * 1.5, this.posY + this.sideLength / 2);
  }

  this.move = function(direction) {
    switch(direction) {
      case "up":
        this.posY -= 20;
      break;
      case "down":
        this.posY += 20;
      break;
      case "left":
        this.posX -= 20;
      break;
      case "right":
        this.posX += 20;
      break;
    }
  }

  this.rotate = function(direction) {
    if (direction === "left") {
      // Rotate left
    } else {
      // Rotate right
    }
  }
}
