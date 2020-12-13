const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var box;
var polygon;
var slingshot;

function preload(){

  polygon_img = loadImage("polygon.png")


}



function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;


  ground1 = new Ground(600,height,1200,40);
  ground2 = new Ground(600,300,200,20);
  ground3 = new Ground(900,200,130,20);

 
box1 = new Box (520,275,20,30);
box2 = new Box (542,275,20,30);
box3 = new Box (564,275,20,30);
box4 = new Box (586,275,20,30);
box5 = new Box (608,275,20,30);
box6 = new Box (630,275,20,30);
box7 = new Box (652,275,20,30);
box8 = new Box (674,275,20,30);
box9 = new Box (542,243,20,30);
box10 = new Box (564,243,20,30);
box11 = new Box (586,243,20,30);
box12 = new Box (608,243,20,30);
box13 = new Box (630,243,20,30);
box14 = new Box (652,243,20,30);
box15 = new Box (564,211,20,30);
box16 = new Box (586,211,20,30);
box17 = new Box (608,211,20,30);
box18 = new Box (630,211,20,30);
box19 = new Box (586,179,20,30);
box20 = new Box (608,179,20,30);
box21 = new Box (596,147,20,30);
box22 = new Box (864,173,20,30);
box23 = new Box (886,173,20,30);
box24 = new Box (908,173,20,30);
box25 = new Box (930,173,20,30);
box26 = new Box (886,143,20,30);
box27 = new Box (908,143,20,30);
box28 = new Box (896,112,20,30);

polygon = Bodies.circle(50,200,50);
World.add(world,polygon);

slingshot = new Slingshot(polygon.body,{x:200, y:50});


}
function draw(){
background(0);

imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,50,50);


  ground1.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();  
  box24.display();  
  box25.display();  
  box26.display();  
  box27.display();
  box28.display();

  slingshot.display();

}

//function mouseDragged(){

//	Matter.Body.setPosition(polygon.body,{x:mouseX , y:mouseY});
	
	//}

	//function mouseReleased(){
	//	slingshot.release();
	//	}

//function keyPressed(){
	//if(keyCode === 32){
//			slingshot.attach(polygon.body);
//	}
//}
