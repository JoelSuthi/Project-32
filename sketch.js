var ground,ground2,polygon,sling,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,backgroundImg;
var score = 0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload() {
    getBackgroundImg();
}

function setup() {
createCanvas(800, 500);

engine = Engine.create();
world = engine.world;
box1 = new Box(275,320,50,50);
box2 = new Box(325,320,50,50);
box3 = new Box(375,320,50,50);
box4 = new Box(425,320,50,50);
box5 = new Box(475,320,50,50);
box6 = new Box(300,270,50,50);
box7 = new Box(350,270,50,50);
box8 = new Box(400,270,50,50);
box9 = new Box(450,270,50,50);
box10 = new Box(325,220,50,50);
box11 = new Box(375,220,50,50);
box12 = new Box(425,220,50,50);
box13 = new Box(350,170,50,50);
box14 = new Box(400,170,50,50);
box15 = new Box(375,120,50,50);
ground = new Ground(395,380,310,15);
ground2 = new Ground(400,490,900,10);
polygon = new Polygon(50,200,50);
sling = new SlingShot(polygon.body,{x:100,y:200});
Engine.run(engine);
}


function draw() {
rectMode(CENTER);

if(backgroundImg)
background(backgroundImg);
noStroke();
textSize(35)
fill("white")
text("Score  " + score, width-300, 50)

drawSprites();
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
ground.display();
ground2.display(); 
polygon.display();
sling.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();

     
}
function mouseDragged(){
     Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
 }
 
 
 function mouseReleased(){
     sling.fly();
 }
 function keyPressed(){
    if (keyCode === 32) {
        sling.attach(polygon.body);
    } 
 }
 async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(hour);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13); 
    if(hour>=06 && hour<=18){ 
        bg = "BG2.png"; 
    }else{ bg = "bg.png"; 
    } 

    backgroundImg = loadImage(bg);
}