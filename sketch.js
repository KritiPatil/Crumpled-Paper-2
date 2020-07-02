var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var db1, db2, db3, paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	packageBody = new Paper(100, 640, 40);
	/*packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);*/
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground); 

	 db1 = new Dustbin(680, 640, 150, 10);
	 db2 = new Dustbin(630, 640, 10, 80);
	 db3 = new Dustbin(730, 640, 10, 80);

	 //paper = new Paper(100, 640, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  db1.display();
  db2.display();
  db3.display();

  packageBody.display();
  
  drawSprites();
 
}

function KeyPressed() {
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(packageBody.body, packageBody.body.position, {x:85, y:-85});
	}
}