
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(225)


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 150, width, 10 , {isStatic:true} );
	World.add(world, ground);

	ground = new Ground(600,665,1200,20);
	paper = new paper(50,320,50);

	dustbin1 = new dustbin(450,650,200,20);
	dustbin2 = new dustbin(360,620,20,100);
	dustbin3 = new dustbin(560,620,20,100);
   
	Engine.run(engine);
  
}


function draw() {
  ellipseMode(RADIUS);
ellipse(700,320,20,20);
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
  
	
}
function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		paper = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false});
	   //World.add(world, paperBody);
	
	 }
	}
