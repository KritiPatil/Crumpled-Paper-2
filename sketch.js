var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, image;
var db1, db2, db3, paper, wall;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  img = loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;


	packageBody = new Paper(100, 300, 50, 50);
	/*packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);*/
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 //db1 = new Dustbin(670, 640, 200, 180, {isStatic:false});

	 var wall = rect(670, 540, 200, 180);
	 

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("white");

  rect(670, 540, 180, 190);

  //db1.display();
  packageBody.display();

  imageMode(CENTER);
	 image(img, 670, 540, 200, 210);

  push ();
  fill ("yellow");
  rect(ground.position.x, ground.position.y, width, 10);
  pop ();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode 	=== UP_ARROW) {
       Matter.Body.applyForce(packageBody.body, packageBody.body.position, {x:150, y:-400});
	}
}