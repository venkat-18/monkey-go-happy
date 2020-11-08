//creating variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
function preload(){
  //loading the images and the animations
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  //creating groups
  FoodGroup=new Group();
  obstacleGroup=new Group();
 
}



function setup() {
  createCanvas(500,500);
//creating sprites for ground and monkey
  ground=createSprite(0,450,1000,10);
  ground.shapeColor="brown";
  ground.velocityX=-3;
  
  monkey=createSprite(100,420,40,40);
  monkey.addAnimation("monkeyrunning",monkey_running);
  monkey.scale=0.1;
  
  score=0;
 
}


function draw() {
background("green");
  
  //displaying score(survival time)
  text("SURVIVAL TIME:"+score,190,100);
  score=score+Math.round(getFrameRate()/60);
  if(ground.x<100){
    ground.x=0;
  }
  //making the monkey jump
  if(keyDown("SPACE") && monkey.y>=350){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.7;
  monkey.collide(ground);
  
    spawnBananas();
  spawnObstacles();
  drawSprites();
}
//creting functions for monkey
function spawnBananas(){
  if(frameCount % 100===0){
  bananas=createSprite(400,300,20,20);
  bananas.addImage("banana",bananaImage);
  bananas.scale=0.1;
  bananas.y=Math.round(random(250,300));
   // bananas.y=Math.round(random(300,300));
  bananas.velocityX=-3;
    bananas.lifetime=150;
    FoodGroup.add(bananas);
  }
}
//creating functions for obstacles
function spawnObstacles(){
  if(frameCount % 300===0){
   obstacle=createSprite(600,400,60,60);
  obstacle.addImage("rocks",obstacleImage);
  obstacle.scale=0.25;
    obstacle.x=Math.round(random(100,600));
    obstacle.velocityX=-4;
    obstacleGroup.add(obstacle);
  }
}





