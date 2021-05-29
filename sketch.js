var canvas, backgroundImg;
var allPlayers;
var gameState = 0;
var playerCount;
var database;
var form, player, game;
var human1,human2,human3,humans;
var human1Img, human2Img, human3Img;
var obstacle1,obstacle2;
var obstacle1Img, obstacle2Img;

function preload(){
  human1Img= loadImage("human1.png");
  human2Img= loadImage("human2.png");
  human3Img= loadImage("human3.png");
  backgroundImg= loadImage("background.jpg");
  obstacle1Img= loadImage("obstacle1.png");
  obstacle2Img= loadImage("obstacle2.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount===3){
    game.update(1);
  }
  if (gameState===1){
    clear  ()
    game.play()
  }
}
