var playerlookforward
var playerlookright
var playerlookleft
var groundimg
var evil
var win
var gamestate
function preload() {
  playerlookforward= loadImage("sprites/playermid.png")
  playerlookright= loadImage("sprites/playerright.png")
  playerlookleft= loadImage("sprites/playerleft.png")
  groundimg = loadImage("sprites/ground.png")
  evil = loadImage("sprites/evil.png")
  lazer = loadImage("sprites/lazer.png")
  win = loadImage("sprites/win.png")
  gamestate=0
}
function setup() {
  createCanvas(400,400);
  groundsprite = createSprite(100,200,200,200)
  groundsprite.addImage(groundimg)
  player=createSprite(50, 200, 50, 50);
  player.addImage(playerlookforward)
  evilman = createSprite(300,150, 50, 50)
  evilman.addImage(evil)
  laser = createSprite(300,player.y,10,10)
  laser.addImage(lazer)
  winDisplay = createSprite(200,2000,400, 400)
  winDisplay.addImage(win)
}

function draw() {
  background(55,55,55);  
  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+4
  }
  if(keyDown(DOWN_ARROW)){
    laser.x=player.x+200
    laser.y=player.y
  }else{
    laser.y=-500
  }
  if(keyDown(LEFT_ARROW)){
    player.x=player.x-4
  }
  if(keyDown(UP_ARROW) && player.y>199){
  player.velocityY=-10
  }
  player.velocityY=player.velocityY+0.5
  if(player.y>205){
    player.y=205
  }
  if(laser.y>205){
    laser.y=205
  }
  if(laser.y>evilman.y-10 && laser.y<evilman.y+10){
    gamestate=1
  }
  if(player.x>400){
    player.x=0
    groundsprite.x=groundsprite.x+40
    evilman.x=evilman.x-400
  }
  if(player.x<0){
    player.x=400
    groundsprite.x=groundsprite.x-40
    evilman.x=evilman.x+400
  }
  if(groundsprite.x>500){
    groundsprite.x=400
  }
  if(gamestate===1){
    winDisplay.y=200
  }
  if(groundsprite.x<0){
    groundsprite.x=400
  }
  ai()
  drawSprites();
}
function ai(){
  evilman.y=evilman.y+1
  if(evilman.y>205){
    evilman.y=205
  }
  if(player.x>evilman.x && evilman.y>204){
    evilman.x=evilman.x+3
  }
  if(player.x<evilman.x && evilman.y>204){
    evilman.x=evilman.x-3
  }
  if(player.x>evilman.x-20 && player.y>evilman.y+20 && player.x<evilman.x+20 && player.y<evilman.y-20){
    textSize(100)
    text("HI",200,200)
  }
}