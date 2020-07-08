var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var db1, db2, db3, db4, paper;

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


	packageBody = new Paper(100, 300, 40);
	/*packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);*/
	

	//Create a Ground
	 

	 db1 = new Dustbin(670, 640, 150, 10);
	 db2 = new Dustbin(620, 640, 10, 80);
	 db3 = new Dustbin(720, 640, 10, 80);
	 db4 = createSprite(770, 640, 10, 1400);

	 packageBody.collide("db4");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  db1.display();
  db2.display();
  db3.display();
  db4.display();

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground.shapeColor = "yellow";
	 World.add(world, ground);

  packageBody.display();

  KeyPressed();
  
  drawSprites();
 
}

function KeyPressed() {
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(packageBody.body, packageBody.body.position, {x:10, y:-18});
	}
}