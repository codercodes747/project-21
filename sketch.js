const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground,left_wall,right_wall

function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution:0.3 ,
		friction: 0 ,
		density:1.2
	}

	ground = new Ground(500,890,1000,20)
	left_wall = new Ground(600,870,20,100)
	right_wall = new Ground(700,870,20,100)

	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {

	rectMode(CENTER);
	background(0);

	ground.show()
	left_wall.show()
	right_wall.show()

 	ellipse(ball.position.x, ball.position.y, 20);
  	drawSprites();
  
}

function keyPressed() {
		if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,  { x : 50, y : -50});
	}
}