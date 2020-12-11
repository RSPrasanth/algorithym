var car
var wall
var speed,weight


function setup() {
  createCanvas(1500,400);
  car =createSprite(50, 200, 20, 20);
  car .shapeColor = 'orange'
  wall =createSprite(1300,200,30,height/2)
  wall.shapeColor='green'
  car.velocityX=10
}

function draw() {
  background('black');  
  speed=random(55,90)
  weight=random(400,1500)
  
  
  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0.2
    wall.shapeColor='blue'
  }
  if (wall.x-car.x<(car.width+wall.width)/3){
    car.velocityX=0.2
    wall.shapeColor='yellow'
  }
  if (wall.x-car.x<(car.width+wall.width)/4){
    car.velocityX=0.2
    wall.shapeColor='purple'
  }
  if (wall.x-car.x<(car.width+wall.width)/5){
    car.velocityX=0.1
    wall.shapeColor='orange'
  }
  if (wall.x-car.x<(car.width+wall.width)/6){
    car.velocityX=0
    wall.shapeColor='red'
  }
  drawSprites() 
} 