const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var gameState = "start";
var launcherObject;
var bg1Image,bg2Image;
var b1,b2,b3,b4;
var w1,w2,w3,w4;
var a1,a2,a3,a4;
var m1,m2,m3,m4;
var g1,g2,g3,g4;
var bi1,bi2,bi3,bi4,bi5,bi6;
var stoneObj;
var attach;
var launcherObject;
var ground;
var world;
var backgroundImg,platform;
var score = 0;
var subplayState = "attached";

function preload() {

 
  getBackgroundImage()
  

}

function setup(){
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  b1 = new Fruit(115,95,50);
  b2 = new Fruit(700,100,50)
  b3 = new Fruit(500,150,50);
  b4 = new Fruit(200,30,50);
  
  w1 = new Watermelon(200,400,50);
  w2 = new Watermelon(312,206,50);
  w3 = new Watermelon(806,213,50);
  w4 = new Watermelon(433,16,50);

  a1 = new Apple(68,236,50);
  a2 = new Apple(390,362,50);
  a3 = new Apple(812,65,50);
  a4 = new Apple(741,388,50);

  m1 = new Mango(1035,341,50);
  m2 = new Mango(845,517,50);
  m3 = new Mango(534,338,50);
  m4 = new Mango(176,50,50);

  g1 = new Grapes(1014,93,50);
  g2 = new Grapes(865,388,50);
  g3 = new Grapes(1014,513,50);
  g4 = new Grapes(92,466,50);

  bi1 = new Bird1(982,198,50);
  bi2 = new Bird2(350,120,50);
  bi3 = new Bird2(42,42,50);
  bi4 = new Bird1(940,17,50);
  bi5 = new Bird1(652,467,50);
  bi6 = new Bird2(162,312,50);

  ground = new Ground(600,780,1200,20);

  stoneObj = new Stone(949,641,40);
  attach = new Sling(stoneObj.body,{x :949,y :641})
 
}
function draw(){
  //console.log(mouseX,mouseY);
  if(gameState === "start"){
    
   background(0);

   fill("yellow");
   textSize(30);
   noStroke();
   text("INSTRUCTIONS",500,100);
   text("1. Press Space to start the game",100,200);
   text("2. Drag the mouse pointer to release the stone",100,250);
   text("3. Press Space to hold the stone again for next shot",100,300);
   text("4. Make the fruits fall to earn points",100,350);
  // text("4. You will earn 10 points on each fruit",100,350);
  // text("5. Beware of the bids ",100,400);
  // text("6. If by mistake you hit a bird you will lose the game",100,450);
   text("5. Your goal is to earn 400 points",100,400);
   //text("8. Press  R  to restart",100,550);

}else if(gameState==="play"){

  if(backgroundImg){
    background(backgroundImg);
}

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  
  w1.display();
  w2.display();
  w3.display();
  w4.display();

  a1.display();
  a2.display();
  a3.display();
  a4.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();

  g1.display();
  g2.display();
  g3.display();
  g4.display();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  
  w1.score();
  w2.score();
  w3.score();
  w4.score();

  a1.score();
  a2.score();
  a3.score();
  a4.score();

  m1.score();
  m2.score();
  m3.score();
  m4.score();

  g1.score();
  g2.score();
  g3.score();
  g4.score();

 
  stoneObj.display();
 attach.display();
 
 ground.display();

 textSize(35);
    fill("white");
    noStroke();
    text("score :" + score,width - 300,50);

 detectollision(stoneObj,m1);
 detectollision(stoneObj,m2);
 detectollision(stoneObj,m3);
 detectollision(stoneObj,m4);
 detectollision(stoneObj,b1);
 detectollision(stoneObj,b2);
 detectollision(stoneObj,b3);
 detectollision(stoneObj,b4);
 detectollision(stoneObj,a1);
 detectollision(stoneObj,a2);
 detectollision(stoneObj,a3);
 detectollision(stoneObj,a4);
 detectollision(stoneObj,w1);
 detectollision(stoneObj,w2);
 detectollision(stoneObj,w3);
 detectollision(stoneObj,w4);
 detectollision(stoneObj,g1);
 detectollision(stoneObj,g2);
 detectollision(stoneObj,g3);
 detectollision(stoneObj,g4);

 if(score >= 400){
  gameState = "Win";
 }
  
}

if(gameState === "Win"){
  background("yellow");

  fill("black");
   textSize(30);
   noStroke();
   text("You Win",500,400);


}



    
   Engine.update(engine);


   drawSprites();
   

}
function mouseDragged(){
  if(subplayState === "attached"){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
  }
  
}

function mouseReleased(){
  attach.fly();
  subplayState = "launched"
}
function detectollision(lstone,lfruit){

   mBodyPosition = lfruit.body.position;
	stoneObjBodyPosition = lstone.body.position

	var distance = dist(stoneObjBodyPosition.x,stoneObjBodyPosition.y,mBodyPosition.x,mBodyPosition.y)
	if(distance<=lfruit.r+lstone.r){

		Matter.Body.setStatic(lfruit.body,false)

	}
}


function keyPressed(){
  if(keyCode === 32 && gameState === "start"){

    gameState = "play";
  }

  
   
     
      if(keyCode === 32 && gameState === "play"){
        subplayState = "attached";  
        Matter.Body.setPosition(stoneObj.body,{x :949,y :641})
        attach.attach(stoneObj.body);
      }
    
  
  
}

//API = Application Programming Interface
//Javascript is a synchronous programming language
//Keyword "async" for declaring a function as asynchronous
async function getBackgroundImage(){
  //Calling an API called as worldtimeapi using the function fetch()
  //Keyword "await" is used to wait for the line to get executed
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  //Extracting only the JSON information
  //JSON = Javascript Object Notation
  var responseJSON = await response.json();

  //Only extracting datetime
  var responseTime = responseJSON.datetime;
  //Slicing out hour info from the string
  var hour = responseTime.slice(11,13);
  console.log(hour);

  

  if(hour >= 6 && hour <=19){
      //Day Time
      backgroundImg = loadImage("bg1.jpg");
  }
  else{
      //Night time
      backgroundImg = loadImage("b2.jpg");
  }
}
