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

    human1 = createSprite(100,200);
    human1.addImage("running",human1Img);
    human2 = createSprite(300,200);
    human2.addImage("running",human2Img);
    human3 = createSprite(500,200);
    human3.addImage("running",human3Img);
    humans = [human1, human2, human3];
  }

  play(){
    form.hide();
    
    Player.getPlayerinfo();
    
    if(allPlayers !== undefined){
      background(backgroundImg);
      //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      for(var i=0;i>-displayHeight*4;i=i-1000){
            obstacle1 = createSprite(475,i);
            obstacle1.addImage("obstacle",obstacle1Img);
            obstacle1.scale=0.5;
            obstacle1.lifetime = 500
           if (obstacle1.isTouching(human1)) {
          alert("Game Over !!!!!")
          gameState = 2
        }
        if (obstacle1.isTouching(human2)) {
          alert("Game Over !!!!!")
          gameState = 2
        }
        if (obstacle1.isTouching(human3)) {
          alert("Game Over !!!!!")
          gameState = 2
        }
        if(keyDown("space")){
  Honk.play()
}
         
           // stoneGroup.add(stone)
      }
       for(var i=500;i>-displayHeight*4;i=i-1000){
            obstacle2 = createSprite(1175,i)
            obstacle2.addImage("obstacle",obstacle2Img);
            obstacle2.scale=0.5
            obstacle2.lifetime = 500
          if (obstacle2.isTouching(human1)) {
          alert("Game Over !!!!!")
          gameState = 2
        }
         if (obstacle2.isTouching(human2)) {
          alert("Game Over !!!!!")
          gameState = 2
        }
         if (obstacle2.isTouching(human3)) {
          alert("Game Over !!!!!")
          gameState = 2
        }
         var index = 0;

      //x and y position of the humans
      var x = 200 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the humans a little away from each other in x direction
        //x = x + 250;
        //use data form the database to display the humans in y direction
        y = displayHeight - allPlayers[plr].distance;
        //humans[index-1].x = x;
        humans[index-1].y = y;

        if (index === player.index){
          stroke(10)
          fill("red")
          ellipse(humans[player.index - 1].x,y,60,60)
          humans[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = humans[index-1].y;
        }
       
        
      }

    }



    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=75
      player.update(); 
    }
   if(keyIsDown(LEFT_ARROW) && player.index !== null){
      humans[player.index - 1].x -= 20
      //player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      humans[player.index-1].x += 20
      //player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=20
      player.update();
    }

    if(player.distance > 4400){
      gameState = 2;
      /*player.rank = player.rank+1
      Player.updateCarsAtEnd(player.rank)

      textSize(30)
    rectMode(CENTER)
    fill("white")
    strokeWeight(3)
    stroke("blue")
    rect(displayWidth/2, cars[player.index-1].y-300, 500, 250)
    fill("red")
    text("Your Rank is: "+ player.rank, displayWidth/2 - 70, cars[player.index-1].y - 300)*/
    }
   
    drawSprites();
     
    
  }
  }
  end(){
    console.log("Game Ended");
    
  }
}
