const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var particles = [];
var plinkos = [];
var divisons = [];
var divisonheight=300;
var engine,world;
var score=0;
function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  Ground1=new Ground(width/2,height,width,20);

  for(var k = 0;k <=width; k  = k+80){
    divisons.push(new divison(k, height-divisonheight/2, 10, divisonheight));
  }
  for(var j = 40;  j  <=width; j=j+50)
{
  plinkos.push(new Pinko(j,75));
}
for(var  j  = 15; j  <=width-10;j=j+50)
{
  plinkos.push(new Pinko(j,175));
}
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) ;
  Ground1.display();
  for(var j=0; j<particles.length;j++){
    particles[j].display();
  }
  for(var  k=0; k<divisons.length;k++){
    divisons[k].display();
  }
  for(var l=0;l<particles.length;l++){
    plinkos[l].display();
  }
  if(frameCount%60===0){ particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); score++; }
  drawSprites();
}