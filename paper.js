class Paper extends BaseClass {
  constructor(x, y, radius) {
    this.radius = radius
    super(x, y, radius);
    this.image = loadImage("paper.png")
    }

    display() {
    ellipseMode(CENTER);
    fill("dark-pink");
    ellipse(0, 0, this.radius);
    }
};