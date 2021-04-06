const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var ground_options;
var maxSnowfall = 100;
var Snowfall = [];

function preload(){

  snow1 = loadImage("snow1.jpg");
  snow2 = loadImage("snow2.jpg");
  snow3 = loadImage("snow3.jpg");
  snow4 = loadImage("snow4.webp");
  snow5 = loadImage("snow5.webp");

}

function setup() {
  createCanvas(300,500);

  engine = Engine.create();
  world  = engine.world;

  if(frameCount%100===0){
    for(var i=0; i<maxSnowfall;i++){
      snowfall.push(new Snowfall(random(0,400),random(0,400),3,10));
     }
    }
  
}

function draw() {
  background(255,255,255); 
  background.addImage("snow3.jpg");
  
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount%80===0){
    snowfallCreatedFrame = frameCount;
   snowfall = createSprite(random(10,370),random(10,30),10,10);
   switch(rand){
     case 1 : snow4.addImage(snow4.webp);
     break;
     case 2 : snow5.addImage(snow5.webp);
     break;
     default : break;
   }
   console.log(thunderCreatedFrame);
  }
  
  if(snowfallCreatedFrame + 20 === frameCount && snowfall){
    snowfall.destroy();
 }

  
  for(var i=0; i<maxSnowfall;i++){
    snowfall[i].display();
    snowfall[i].update();
  }
  camera.position.x = mouseX;

  drawSprites();
}
