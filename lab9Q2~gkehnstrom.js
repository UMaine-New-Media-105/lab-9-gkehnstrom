class Ball {
  constructor(x, y, speedX, speedY, color) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
  }

  drawSprite() {
    fill(this.color);
    ellipse(this.x, this.y, 50);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
    }
    
    if (this.y > height || this.y < 0) {
      this.speedY *= -1;
    }
  }
}

let listOfBalls = [];

function setup() {
  createCanvas(400, 400);
  someRandomBall = new Ball(45, 200, 5, 5, "blue");
  listOfBalls.push(someRandomBall);
}

function draw() {
  background(220);
  for (let i = 0; i < listOfBalls.length; i++) {
    listOfBalls[i].drawSprite();
    listOfBalls[i].update();
  }
}
