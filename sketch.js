var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect2 = createSprite(400, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect3 = createSprite(800, 400, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    fixedRect2.shapeColor = "green";
    fixedRect3.shapeColor = "green";
  }
  else if(isTouching(movingRect, fixedRect2)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "green";
    fixedRect2.shapeColor = "red";
    fixedRect3.shapeColor = "green";
  }
  else if(isTouching(movingRect, fixedRect3)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
    fixedRect3.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
    fixedRect3.shapeColor = "green";
  }
  drawSprites();
}