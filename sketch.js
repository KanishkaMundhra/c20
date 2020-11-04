var movingRect,fixedRect;
var rectangle1,rectangle2;



function setup() {
  createCanvas(800,400);
  movingRect = createSprite(30,40,50,50)
  fixedRect = createSprite(400,200,50,50)
  rectangle1 = createSprite(0,100,80,50)
  rectangle2 = createSprite(800,100,80,50)
  rectangle1.shapeColor = "yellow";
  rectangle2.shapeColor = "orange";
  rectangle1.velocityX = 4;
  rectangle2.velocityX = -5;
}

function draw() {
  background(0);
movingRect.x = mouseX;
movingRect.y = mouseY;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "pnk";

}
else{
movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";
}
if(rectangle1.x-rectangle2.x<rectangle1.width/2+rectangle2.width/2&&
  rectangle2.x-rectangle1.x<rectangle1.width/2+rectangle2.width/2){
    rectangle1.velocityX = rectangle1.velocityX*-1;
    rectangle2.velocityX = rectangle2.velocityX*-1;
  }
  drawSprites();
}
