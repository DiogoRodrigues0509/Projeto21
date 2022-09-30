
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_option={
		isStatic:false,
		resititution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,700,10,plane_options);
	World.add(world,ball);

	ground = Bodies.rectangle(400,650,800,10,plane_options);
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  drawSprites();
 
}



