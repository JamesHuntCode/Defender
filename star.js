function star(x, y) {
  this.posX = x;
  this.posY = y;
  this.size = 2;
  this.velocity  = random(1, 4);

  this.update = function() {
    this.posX -= this.velocity;
  }

  this.show = function() {
    noStroke();
    fill('rgba(255, 255, 255, 0.5)');
    ellipse(this.posX, this.posY, this.size, this.size);
  }

  this.boundaries = function() {
    if ((this.posX + this.size / 2) < 0) {
      this.posX = width + this.size / 2;
    }
  }
}
