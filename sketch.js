const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ourEngine,ourWorld;
var box1, box2;
var ground;
function setup() {
  createCanvas(400,400);
  ourEngine=Engine.create();
  ourWorld=ourEngine.world;
  box1=new Box(220,100,40,60);
  box2=new Box(200,300,50,30)
  ground=new Ground(200, 390, 400, 20);
  console.log(box1);
}

function draw() {
  background("blue");  
 
  Engine.update(ourEngine);
  box1.display();
  box2.display();
  ground.display();
}