let coins=[]
function preload()
{
  coin1=loadImage("head.PNG");
  coin2=loadImage("tail.PNG");
  
  coins=random([coin1,coin2]);
}
function setup() {  
  createCanvas(windowWidth,windowHeight)
}
function draw(){
image(coins,width/2,height/2);
}