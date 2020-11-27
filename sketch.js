const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  
  //create an engine
  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic:true
  }

  //creating a rectangular body
  ground = Bodies.rectangle(200,390,200,20,options);

  //add it to the world
  World.add(world,ground);

var ballOptions={
  restitution:1.0
}

 ball=Bodies.circle(200,100,20,ballOptions);
World.add(world,ball)
}

function draw() {
  background(0); 
  
  Engine.update(engine);

  var groundpos = ground.position;

  //It helps to take coordinates in the center of the shape
  rectMode(CENTER);
  rect(groundpos.x,groundpos.y,400,20);

var ballpos=ball.position;
ellipseMode(CENTER);
ellipse(ballpos.x,ballpos.y,20,20);

}