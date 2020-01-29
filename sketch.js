const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies

var engine,world;
var particles = [];
var particle;
var peg;
var pegs = [];
var rows = 14;
var cols = 17;
var buckets = [];
var bucket;
var leftBound, rightBound, bottomBound;
var backupBoundary, backupBoundary2, backupBoundary3, backupBoundary4, backupBoundary5, backupBoundary6;

function setup() {
  createCanvas(700,700);
  background(20,36,82);
  engine = Engine.create();
  world = engine.world;
  var spacing = width /cols;


  for(var i = 0.25; i < cols; i++){
    for(var j = 0; j < rows; j++){
      var x = i*spacing;
      if(j % 2 === 1){
        x+= spacing/2;
      }
      var y = spacing/2 + j*spacing;
      peg = new Peg(x,y,5);
      pegs.push(peg);
    }
  }

  for(var x = 54; x<661;x = x + 59){
    bucket = new Bucket(x, 690, 15, 150);
    buckets.push(bucket);
  }

  leftBound = new Boundary(0, 350, 10, 700);
  rightBound = new Boundary(700, 350, 10, 700);
  bottomBound = new Boundary(350, 725, 700, 60);
}
function draw() {
    if(frameCount % 10 === 0){
      particle = new Particle(random(120, 500), 0, 7);
      particles.push(particle);
  }
  
  background(20,36,82);
  Engine.update(engine, 20);
  for(var i = 0; i < particles.length; i++){
      particles[i].display();

    if(particles[i].isOffScreen()){
      particles[i].remove();
      particles.splice(i, 1);
      i--;
    }
  }
  for(var i = 0; i < pegs.length; i++){
    pegs[i].display();
  }
  for(var i = 0; i < buckets.length; i++){
    buckets[i].display();
  }

  bottomBound.display();  
  if(particles.length > 50){
    World.remove(world, bottomBound.body);
    setTimeout(function(){
      backupBoundary = new Boundary(350, 725, 700, 60);
      backupBoundary.display();

    }, 1000);
  }

  if(particles.length > 50 && backupBoundary){
    World.remove(world, backupBoundary.body);
    setTimeout(function(){
      backupBoundary2 = new Boundary(350, 725, 700, 60);
      backupBoundary2.display();
    }, 1000);
  }
}

