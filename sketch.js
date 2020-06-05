var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;  
const Constraint= Matter.Constraint; 
var bob1,bob2,bob3,bob4,bob5,roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob3=new Bob(350,300,2); 
	bob1=new Bob(300,300,2); 
	bob2=new Bob(358,300,2); 
    bob4=new Bob(250,300,2); 
	bob5=new Bob(400,300,2); 

	console.log(bob4);

	roof=new Roof(350,0,400,50); 
	
	rope1=new Rope(bob1.body,roof.body,-50,0); 
	rope2=new Rope(bob2.body,roof.body,52,0);
	rope3=new Rope(bob3.body,roof.body,2,0); 
	rope4=new Rope(bob4.body,roof.body,-100,0);
	rope5=new Rope(bob5.body,roof.body,100,5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 

   bob1.display();  
   bob2.display();  
   bob3.display();
   bob4.display();
   bob5.display();

  
   roof.display();  
  
   rope1.display(); 
   rope2.display(); 
   rope3.display();
   rope4.display();
   rope5.display();

   
 
} 

function keyPressed(){ 
    if(keyCode===UP_ARROW){ 
   Matter.Body.setPosition(bob4.body, {x: -300 , y: 0});



	}
}



