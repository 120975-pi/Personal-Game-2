var canvas, backgroundImage;

var gameState = 0;
var distance = 0;
var database;

var player, ground

var playerImage, groundImage

function preload(){
  playerImage = loadImage("Player_Character_Level_1-removebg-preview.png");
  groundImage = loadImage("Level_1_ground-removebg-preview.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  var player = createSprite(200,200,40,40);
  player.addImage("playerImage", playerImage)
}

function draw(){
 

 if (keyDown(DOWN_ARROW)){
  player.velocity.x = 3
  player.velocity.y = -3
 }


  drawSprites();
  
}
