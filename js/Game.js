class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
plane1 = createSprite(400,displayHeight-100,20,20);
plane1.addImage(plane1_img);
plane1.scale = 0.3;
plane2 = createSprite(700,displayHeight-100,20,20);
plane2.addImage(plane2_img);
plane2.scale = 0.3;


  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
     image(universe, 0,0,displayWidth, displayHeight);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
       
        //cars[index-1].x = x;
        //cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          //stroke(10);
          //fill("red");
          //ellipse(x,y,60,60);
          //cars[index - 1].shapeColor = "red";
          //camera.position.x = displayWidth/2;
          //camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      //player.distance +=10
      player.update();
    }


    //if(player.distance > 3860){
      //gameState = 2;
      //player.rank +=1
      //Player.updateCarsAtEnd(player.rank)
    //}
if(keyIsDown(32)) {
  createBullet();
}
   
    drawSprites();
  }
   createBullet() {
    var bullets = createSprite(100,100,3,3);
    bullets.y=plane1.y;
    bullets.x=plane1.x;
    bullets.y=plane2.y;
    bullets.x=plane2.x;
    bullets.velocityX = -4;
  }

  end(){
    console.log("Game Ended"); 
  }
}
