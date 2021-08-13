
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bob1,bob2,bob3,bob4,bob5
var rope1

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bob1 = new Bob(200,400,30)
   bob2 = new Bob(260,400,30)
   bob3 = new Bob(320,400,30)
   bob4 = new Bob(380,400,30)
   bob5 = new Bob(440,400,30)
  ground = new Roof(400,200,300,20)

   rope1 = new Rope(bob1.body,ground.body,-100,0)
   rope2 = new Rope(bob2.body,ground.body,-50,0)
   rope3 = new Rope(bob3.body,ground.body,0,0)
   rope4 = new Rope(bob4.body,ground.body,50,0)
   rope5 = new Rope(bob5.body,ground.body,100,0)

	Engine.run(engine);
}


function draw() {
  background("blue");
  rectMode(CENTER);
  Engine.update(engine)
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-55,y:-85})
   }
  }


