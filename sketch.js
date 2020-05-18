var fixedRect, movingRect,mouserect;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  mouserect = createSprite(400, 100, 50, 80);
  mouserect.shapeColor = "green";
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  mouserect.x=World.mouseX;
  mouserect.y=World.mouseY;

  if(isTouching(mouserect, gameObject1)){
    mouserect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else {
    mouserect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  bounceOff(movingRect,fixedRect);


  drawSprites();
}

