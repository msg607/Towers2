
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;

function preload()
{
	polyimage=loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
  world = engine.world;
  
  
  
  stand1 = new Stand(550,600,300,30);
  stand2 = new Stand(850,400,300,30);
//bottom row 1
  box1 = new Box(450,550,30,40);
  box2= new Box(480,550,30,40);
  box3= new Box(510,550,30,40);
  box4= new Box(540,550,30,40);
  box5= new Box(570,550,30,40);
  box6= new Box(600,550,30,40);
  box7= new Box(630,550,30,40);
  box8= new Box(660,550,30,40);
//second row 1
  box9= new Box(480,510,30,40);
  box10= new Box(510,510,30,40);
  box11= new Box(540,510,30,40);
  box12= new Box(570,510,30,40);
  box13= new Box(600,510,30,40);
  box14= new Box(630,510,30,40);
//third row 1
  box15= new Box(510,470,30,40);
  box16= new Box(540,470,30,40);
  box17= new Box(570,470,30,40);
  box18= new Box(600,470,30,40);

//last row 1
  box19= new Box(540,440,30,40);
  box20= new Box(570,440,30,40);
  
//bottom row 2
  box22= new Box(780,390,30,40);
  box23= new Box(810,390,30,40);
  box24= new Box(840,390,30,40);
  box25= new Box(870,390,30,40);
  box26= new Box(900,390,30,40);
  box27= new Box(930,390,30,40);

//second row 2
  box28= new Box(750,350,30,40);
  box28= new Box(810,350,30,40);
  box29= new Box(840,350,30,40);
  box30= new Box(870,350,30,40);
  box31= new Box(900,350,30,40);

//third row 2
  box32= new Box(840,310,30,40);
  box33= new Box(870,310,30,40);

  
  polygon= Bodies.circle(50,200,20);
  World.add(world,polygon);


  rope= new Rope(this.polygon, {x:200, y:500});


  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(145,202,216);
  
  stand1.display();
  stand2.display();
  rope.display();
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
  //i accidentally skipped the number 21
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  
  imageMode(CENTER);
  image(polyimage,polygon.position.x,polygon.position.y,40,40);
 
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}


function keyPressed(){
  if(keyCode === 32){
    rope.attach(this.polygon);
  }
}



