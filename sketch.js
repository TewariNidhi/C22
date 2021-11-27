const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var ground;
function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(400,400);
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);
 

  
}

function draw() {
  Engine.update(engine);
  background(0); 
  rectMode(CENTER)
  //rect (200, 200, 50, 50); 
  rect(ground.position.x, ground.position.y, 400, 20)
  
}