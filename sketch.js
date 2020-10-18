
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,groundImage;
var paper,paperImage;
var dustbin,dustbinImage;
var log,log1,log2,log3,log4;
var wall,wall1,wall2;
function preload()
{
	groundImage=loadImage("ground.png");
	paperImage=loadImage("download.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground=createSprite(700,700,200,20);
	ground.shapeColor="red";
	ground.addImage(groundImage);

	paper=createSprite(170,550,200,200);
	paper.addImage(paperImage);
	paper.scale=0.2;
	

	dustbin=createSprite(650,550,200,200);
	dustbin.shapeColor="yellow";
	
	log1=createSprite(680,555,20,180);
	log1.shapeColor="green";

	log=createSprite(670,555,20,180);
	log.shapeColor="green";

	log2=createSprite(630,555,30,180);
	log2.shapeColor="green";

	log3=createSprite(580,555,30,180);
	log3.shapeColor="green";
	
	log4=createSprite(720,555,30,180);
	log4.shapeColor="green";

	wall=createSprite(550,548,10,200);
	wall.shapeColor="red";

	wall1=createSprite(650,655,200,10);
	wall1.shapeColor="red";

	wall2=createSprite(750,550,10,200);
	wall2.shapeColor="red";
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDown(RIGHT_ARROW)){
	paper.velocityX=5;
	paper.velocityY=-5;
	paper.velocityY=paper.velocityY+0.8;
  }
  if(keyDown(DOWN_ARROW)){
	paper.velocityY=paper.velocityY+0.8;
  }
  if(paper.isTouching(wall1)){
	  paper.velocityX=0;
	  paper.velocityY=0;
  }
 drawSprites();
}

function keyPressed(){
if(keyCode===RIGHT_ARROW){
	Matter.Body.applyForce(paper.Body,paper.Body.position,{x:85,y:-85});
}
}

