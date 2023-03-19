class Ground {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    var ground_options = {
      isStatic: true
    }

    this.body = Bodies.rectangle(x, y, w, h, ground_options);
    World.add(world, this.body);
  }
  show() {
    push();
    rectMode(CENTER);
    stroke("cyan");
    fill("cyan");
    rect(this.body.position.x, this.body.position.y, this.w, this.h)
  }
}