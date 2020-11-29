const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3, paper, ground, dustBinImage, dustBinSprite
var ball, ballImage
var world;

function preload(){
	dustbinImage = loadImage("dustBinGreen.png");
	// ballImage = loadImage("paper.png");
}

function setup() {
	createCanvas(1800, 700);
	//rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustBinSprite=createSprite(1080,570,50,50);
	dustBinSprite.addImage(dustbinImage);
	dustBinSprite.scale = 0.6;

	// ball = createSprite(100,5,60,60);
	// ball.addImage(ballImage);
	// ball.scale = 0.5;
	ground = new Ground(600, 670, 1800, 10);
	paper = new Paper(100, 150, 50);
	dustbin1 = new Dustbin(1000,570,20,180);
	dustbin2 = new Dustbin(1080,655,150,20);
	dustbin3 = new Dustbin(1160,570,20,180);


	// 	dustbin === ground(width/2,670,width,20);

// 	Create the Bodies Here.
// 	var render = Render.create((
// 	element: document.body,
// 	engine: engine,
// 	options: {
// 	width: 1200,
// 	height: 700,
// 	wireframes: false
// 	}
// ));

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);
  
  ground.display(); 
  paper.display();
//   dustbin1.display();
//   dustbin2.display();
//   dustbin3.display();


  
  keyPressed();
  
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10});
	}
}

