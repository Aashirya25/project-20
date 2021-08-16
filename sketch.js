var brush,gym,gym2,eat,bath,moving,sleep,drink
var bg,bgImg
var astronaut
var edges

function preload(){
brush = loadImage("brush.png")
gym = loadAnimation("gym1.png","gym2.png")
gym2 = loadAnimation("gym11.png","gym12.png")
eat = loadAnimation("eat1.png","eat2.png")
drink = loadAnimation("drink1.png","drink2.png")
bath = loadAnimation("bath1.png","bath2.png")
sleep = loadImage("sleep.png")
bgImg = loadImage("iss.png")
moving = loadAnimation("move1.png","move.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(650,250)
  bg.addImage(bgImg)
  bg.scale = 0.2

  astronaut = createSprite(670,400)
  astronaut.addAnimation("sleep",sleep)
  astronaut.scale = 0.1

  edges = createEdgeSprites() 
}

function draw() {
  astronaut.collide(edges)
  background(0); 


  if(keyDown("1")){
    astronaut.addAnimation("brush",brush)
    astronaut.changeAnimation("brush")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    text("He brushes first",20,20)
  }

  if(keyDown("2")){
    astronaut.addAnimation("eat",eat)
    astronaut.changeAnimation("eat")
    astronaut.y = 350
    astronaut.velocityX = 0.5
    astronaut.velocityY = -0.5
    text("Then he eats",20,20)
  }

  if(keyDown("3")){
    astronaut.addAnimation("gym",gym)
    astronaut.changeAnimation("gym")
    astronaut.y = 400
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    text("Then he works out",20,20)
  }

  if(keyDown("4")){
    astronaut.addAnimation("gym2",gym2)
    astronaut.changeAnimation("gym2")
    astronaut.y = 400
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    text("Then he works out more",20,20)
  }

  if(keyDown("5")){
    astronaut.addAnimation("bath",bath)
    astronaut.changeAnimation("bath")
    astronaut.y = 400
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    text("Then he has a bath",20,20)
  }

  if(keyDown("6")){
    astronaut.addAnimation("drink",drink)
    astronaut.changeAnimation("drink")
    astronaut.y = 400
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    text("Then he has a drink",20,20)
    text("of water",20,40)
  }
  
  if(keyDown("7")){
    astronaut.addAnimation("sleep",sleep)
    astronaut.changeAnimation("sleep")
    astronaut.y = 400
    astronaut.x = 400
    astronaut.velocityX = 0.4
    astronaut.velocityY = -0.5
    text("Then the cycle ",20,60)
    text("starts again",20,80)
  }
  
  drawSprites();
  textSize(30)
  text("Press the number keys 1 to 7 to see the life of an astronaut",155,30)
}




























