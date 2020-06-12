var thickness, wall;

var bullet, speed, weight;

function setup() 
{
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(100, 200, 60, 30);
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, 800);
  wall.shapeColor = color(80,80,80);
}

function draw() 
{
  background(0);  

  bullet.velocityX = speed;

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(damage > 0)
    {
      wall.shapeColor = color(255, 0, 0);
    }

    if(damage < 0)
    {
      wall.shapeColor = color(0 ,255, 0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  else
  {
    return false;
  }
}