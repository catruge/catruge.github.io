class Balloon {
  constructor(x, y, size, colour) {
    Balloon.instances.push(this);
    this.x = x;
    this.y = y;
    this.size = size;
    this.colour = colour;
  }

  accelerate(accX, accY) {
    this.x += accX;
    this.y += accY;
  }

  update() {
    fill(this.colour);
    ellipse(this.x, $(window).height() - this.y, this.size);
  }

  destroyMe() {
    for (var i = 0; i < Balloon.instances.length; i ++) {
      if (this === Balloon.instances[i]) {
        Balloon.instances.splice(i, 1);
      }
    }
  }
}

Balloon.instances = [];
