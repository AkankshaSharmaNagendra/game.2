var bg, backimg
var spacecraft1, spacecraft1img
var spacecraft2, spacecraft2img 
var lazerBeam, lazerBeamimg


function preload(){
  backimg = loadImage('assets/space background.png')
  spacecraft1img = loadImage('assets/spacecraft_image_1.png')
  spacecraft2img = loadImage('assets/opposing_spacecraft_image.png')
  lazerBeamimg = loadImage('assets/laser_image.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(0,150)
  bg.addImage(backimg)
  bg.scale = 3
  
  spacecraft1 = createSprite(width/2,height-100)
  spacecraft1.addImage(spacecraft1img)
  spacecraft1.scale = 0.4

  spacecraft2 = createSprite(width/2,100)
  spacecraft2.addImage(spacecraft2img)
  spacecraft2.scale = 0.4
  spacecraft2.rotation = 180


}

function draw() {
  background(255,255,255);  
  bg.velocityY = 3
  console.log(bg.y)
  if (bg.y > 800){
    bg.y=0
  }
  if (keyDown(RIGHT_ARROW)){
    spacecraft1.x += 5
  }
  if (keyDown(LEFT_ARROW)){
    spacecraft1.x -= 5
  }
  if (keyDown(DOWN_ARROW)){
    spacecraft1.y += 5
  }
  if (keyDown(UP_ARROW)){
    spacecraft1.y -= 5
  }
  oposite()
  drawSprites();
}

function oposite(){
  if(frameCount%30==0){
    var r = (random(-7,7))
    spacecraft2.velocityX=r 
  if(frameCount%10==0){
    lazerBeam = createSprite(spacecraft2.x, spacecraft2.y)

    lazerBeam.addImage(lazerBeamimg)
    lazerBeam.scale = 0.2
    lazerBeam.rotation = -30
  }
  }
 
}


