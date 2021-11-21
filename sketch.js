const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
let engine;
let world;
var ground;
var leftSide;
var rightSide;




function setup() {
 createCanvas(1000, 1100);

	var ball_options={
		isStastic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//groundObj = new Ground(width/2,670,width,20)
	groundObj = new Ground(200,390,400,20)
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1100,600,20,120)
	engine = Engine.create();
	world = Engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200, 100, 20, ball_options);
	World.add(world, ball);

	//Engine.run(Engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


groundObj.show();
leftSide.show();
rightSide.show();
Engine.update(engine);
keyPressed();

//drawSprites();


}

function keyPressed(){
	if (keyCode === UP_ARROW)
	Matter.Body.applyForce(ball);
	}