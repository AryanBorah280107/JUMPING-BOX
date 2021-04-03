var surface1, surface2, surface3, surface4;
var movingball;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(830,600);

    movingball = createSprite(random(20,750));
    movingball.velocityX = -3;
    movingball.velocityY = 5;
    movingball.scale = 0.2;
    movingball.shapeColor = "white"

    surface1 = createSprite(105,590,200,20);
    surface1.shapeColor = "red";

    surface2 = createSprite(310,590,200,20);
    surface2.shapeColor = "green";

    surface3 = createSprite(515,590,200,20);
    surface3.shapeColor = "pink";

    surface4 = createSprite(720,590,200,20);
    surface4.shapeColor = "orange";

}

function draw() {
    background("black");
    //create edgeSprite

    if(movingball.x < 0)    {
        movingball.velocityX = 3;

    }
      else if(movingball.x > 830)   {
        movingball.velocityX = -3;

    }

    if(movingball.y < 0) {  
        movingball.velocityY = 5;

    }

    if(movingball.isTouching(surface1)){
        movingball.shapeColor = "red"
        movingball.bounceOff(surface1);

    }

    if(movingball.isTouching(surface2)) {
        music.play();
        movingball.shapeColor = "green"
        movingball.bounceOff(surface2);

    }
    
    if(movingball.isTouching(surface3)) {
        music.play();
        movingball.shapeColor = "pink"
        movingball.bounceOff(surface3);

    }
    
    if(movingball.isTouching(surface4)) {
        movingball.shapeColor = "orange"
        movingball.bounceOff(surface4);
        movingball.velocityY = 0;
        movingball.velocityX = 0;
        music.stop();

    }

    drawSprites();
}
