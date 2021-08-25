
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,lw,rw,paper
var options={
	restitution:0.8
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,680,800,10)
lw=new Ground(650,625,10,100)
rw=new Ground(780,625,10,100)
paper=Bodies.circle(50,300,20,options)

World.add(world,paper)

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  ground.display()
  lw.display()
  rw.display()
  drawSprites();
 ellipseMode(RADIUS)
 ellipse(paper.position.x,paper.position.y,20,20)


}
function keyPressed(){
	if (keyCode===DOWN_ARROW){
		Matter.Body.applyForce(paper,paper.position,{x:0,y:-12})
	}
}