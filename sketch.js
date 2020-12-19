var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var plane1,plane2, enemyPlane;

var universe, plane1_img, plane2_img, enemyPlane_img;

var bullets;

function preload(){
  bullets = loadImage("/images/bullets.png");
  universe = loadImage("/images/universe1.jpeg");
  plane1_img = loadImage("/images/p1.png");
  plane2_img = loadImage("/images/p2.png");
  enemyPlane_img = loadImage("/images/enemy.png");
  
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
