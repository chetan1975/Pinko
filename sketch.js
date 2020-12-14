const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions=[];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  

  ground1 = new Ground(600,height,1400,20);
  ground2 = new Ground(10,400,20,800);
  ground3 = new Ground(470,400,20,800);
  ground4 = new Ground(240,10,800,20);
}

function draw() {
  background(0);  

  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

}

for(var k = 0;k <= width ; k=k + 80) {

  divisions.push(new Division(k,height -divisionHeight/2,10,divisionHeight))
}