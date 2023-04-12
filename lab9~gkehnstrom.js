let ball1, ball2;

let speedX, speedY;

let listOfBalls = [];
let listOfColors = [];

function setup() {
  createCanvas(400, 400);

  listOfBalls = [];
  listOfColors = ['red', 'lightBlue', 'purple', 'green'];
  
  for(let ballsCreated = 0; ballsCreated < 20; ballsCreated++){
    listOfBalls.push({
      x: random(50, 350),
      y: random(50, 350),
      speedX: random(7, 10),
      speedY: random(7, 10),
      color: random(listOfColors)
  });
  }
}

function draw() {
  background('gray');

  for (let ballsDrawn = 0; ballsDrawn < listOfBalls.length; ballsDrawn++) {
    let randomBall = listOfBalls[ballsDrawn];

    drawSprite(randomBall.x, randomBall.y, randomBall.color);

    if (randomBall.x > width - 20 || randomBall.x < 20) {
      randomBall.speedX *= -1;
    }
    if (randomBall.y > height - 20 || randomBall.y < 20) {
      randomBall.speedY *= -1;
    }

    randomBall.x += randomBall.speedX;
    randomBall.y += randomBall.speedY;
  }
}

function drawSprite(x, y, color) {
  fill(color);
  ellipse(x, y, 50);
}
