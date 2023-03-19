const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var floor, rightSide, leftSide;

function preload() {

}

function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4);
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  var ball_options = {
    restitution: 0.3,
    densitity: 1
  }

  ball = Bodies.circle(200, 200, 20, ball_options);
  World.add(world, ball);

  floor = new Ground(width / 2, 955, width, 20);
  rightSide = new Ground(1200, 890, 20, 120);
  leftSide = new Ground(1450, 890, 20, 120);

  if (keyDown(UP_ARROW)) {
    keyPressed();
  }

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(0);
  Engine.update(engine);

  floor.show();
  rightSide.show();
  leftSide.show();



  push();
  fill("white");
  stroke("white")
  ellipse(ball.position.x, ball.position.y, 20);
  pop();

  drawSprites();
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball, {
      x: 0,
      y: 0
    }, {
      x: 0.027,
      y: 0.027
    })
  }
}