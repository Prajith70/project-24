
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var rubber,ground,hammer,stone;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	
     
	
	
  
	ground = new Ground(400,height,800,20);

	hammer = new Hammer(700,320);
    rubber = new Rubber(200,200);
    stone = new Stone(400,350,70,70);

	Engine.run(engine);



}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
    
    ground.display();
    hammer.display();
    stone.display();
    rubber.display();

}



