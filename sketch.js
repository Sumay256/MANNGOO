
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world,boy;


function preload(){
	boy=loadImage("boy.png");
//treeObj=loadImage("images/tree.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1090,100,30);
	mango2=new mango(1150,140,40);
	mango3=new mango(1000,160,25);
	mango4=new mango(1080,220,50);
	mango5=new mango(930,230,35);
	mango6=new mango(1200,220,35);
	treeObj=new tree(1050,570);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new stone(230,450);
	launcherObject=new rope(stoneObj.body,{x:235,y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
 // image(treeObj ,400,40,450,550);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
 // groundObject.display();
  stoneObj.display();
  groundObject.display();
  launcherObject.display();
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
 launcherObject.fly();
}
function keyPressed(){
	if(keyCode===32){
		Body.setPosition(stoneObj.body,{x:230,y:450});
		launcherObject.attach(stoneObj.body);
	}
}
function detectCollision(stone,mango){
mangoPos=mango.body.position;
stonePos=stone.body.position;
var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
if(distance<=mango.r+stone.r){
	Body.setStatic(mango.body,false);
}
}