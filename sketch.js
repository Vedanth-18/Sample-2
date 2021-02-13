const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2;
var world,boy;
var stoneBody;
var sling;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	stoneBody = new Stone(240, 415);

  sling = new Boy(stoneBody.body, {x: 235, y:410});
  // var options={
  //    bodyA: stoneBody.body,
  //    bodyB: mango2.body,
  //    stiffness: 0.04,
  //    length: 10
  // }
  // sling = Constraint.create(options);
  // World.add(world, sling);

	Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(230);

  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();

  stoneBody.display();
  groundObject.display();
  //line(stoneBody.body.position.x, stoneBody.body.position.y, mango2.body.position.x, mango2.body.position.y);
  sling.display();
}
