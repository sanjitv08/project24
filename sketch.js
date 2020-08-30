
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1=new Paper(100,300,10);
	ground=new Ground(width/2,690,2000,20);
	dustbinleft=new Dustbin(750,620,20,120);
	dustbinright=new Dustbin(940,620,20,120);
	dustbinbottom=new Dustbin(840,670,200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper1.display();
  dustbinleft.display();
  dustbinright.display();
  dustbinbottom.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		
		Matter.Body.setStatic(paper1.body,false);
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:4,y:-1.5});
	   	  
	   if(paper1.body.position.x>=800){
	    paper1.body.position.y=650;
	   Matter.Body.setStatic(paper1.body,true);
	   }
	}	
}



