
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var rope1,rope2,rope3,rope4,rope5
function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 roof = new Roof(width/2, 50, width/2, 20)
	 
	 bobObject1 = new Bob(550,300,50);
	 bobObject2 = new Bob(150,300,50);
	 bobObject3 = new Bob(250,300,50);
	 bobObject4 = new Bob(350,300,50);
	 bobObject5 = new Bob(450,300,50);

	 rope1 = new Rope(bobObject1.body, roof.body,-25,-12);
	 rope2 = new Rope(bobObject2.body, roof.body,-25,-12);
	 rope3 = new Rope(bobObject3.body, roof.body,-25,-12);
	 rope4 = new Rope(bobObject4.body, roof.body,-25,-12);
	 rope5 = new Rope(bobObject5.body, roof.body,-25,-12);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(160);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



