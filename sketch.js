const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies

var engine,world;
var particles = [];
var particle;
var peg;
var pegs = [];
var rows = 13;
var cols = 16;
var buckets = [];
var bucket;
var leftBound, rightBound, bottomBound;

function setup() {
  createCanvas(700,700);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  var spacing = width /cols;
  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      var x = i*spacing;
      if(j % 2 === 1){
        x+= spacing/2;
      }
      var y = spacing/2 + j*spacing;
      peg = new Peg(x,y,4);
      pegs.push(peg);
    }
  }

  for(var x = 54; x<661;x = x + 59){
    bucket = new Bucket(x, 690, 15, 150);
    buckets.push(bucket);
  }

  leftBound = new Boundary(0, 350, 10, 700);
  rightBound = new Boundary(700, 350, 10, 700);
  bottomBound = new Boundary(350, 705, 700, 10);
}
function draw() {
  if(frameCount % 1 === 0){
    particle = new Particle(random(120, 500), 0, 7);
    particles.push(particle);
  }
  background(30);
  Engine.update(engine, 20);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  for(var i = 0; i < pegs.length; i++){
    pegs[i].display();
  }
  for(var i = 0; i < buckets.length; i++){
    buckets[i].display();
  }
  if(particles.length > 200){
    World.remove(world, bottomBound.body);
  }

  // if(particles.length === 20){
  //   World.add(world, bottomBound.body);
  // }
  leftBound.display();
  rightBound.display();
  bottomBound.display();
  
}
// function keyPressed(){
//   if(keyCode === 32){
//     World.add(world,bottomBound.body);
//     console.log("k");
//   }
// }