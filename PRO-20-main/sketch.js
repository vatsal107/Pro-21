var bullet,wall;
var bullet,speed,weight;


bullet.velocityX= speed;

speed=random(223,321)
weight=random=(30,52)

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  bullet=createSprite(50,200,50,50)
wall=createSprite(1200,200,thickness,height/2)
bullet.velocityX=speed;

}

function draw() {
  background(255,255,255);

  drawSprites();
}

function hasCollided(bullet,wall)
{
bullet.velocity=0;
var damage=0.5*speed*speed/(thickness*thickness*thickness);
if (damage>10)
{

  wall.shapeColor=color(255,0,0);

}



if (damage<10)
{
wall.shapeColor=color(0,255,0);

}
}
