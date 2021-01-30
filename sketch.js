
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

	//Create the Bodies Here.
	paper = new Circle(200,695,10);
	ground = new box(400,700,800,10);
	boxBottom = new box(400,690,100,10);
	boxLeft = new box(350,675,10,75);
	boxRight = new box(450,675,10,75);
	
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  paper.display();
  boxBottom.display(240,230,140);
  boxLeft.display(240,230,140);
  boxRight.display(240,230,140);
  ground.display(178,34,34);
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-45});
		setTimeout(() => {  Matter.Body.setDensity(paper.body, 500); }, 2000);
	}
}

