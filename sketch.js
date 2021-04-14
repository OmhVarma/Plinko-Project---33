var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var divisions = [];
var particles = [];
var plinkos = [];

var ball;

var divisionHeight=300;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  ball = new Particle(mouseX,0,0);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  textSize(30);
  text("500",15,540);
  text("500",95,540);
  text("500",175,540);
  text("500",255,540);
  text("100",335,540);
  text("100",415,540);
  text("100",495,540);
  text("200",575,540);
  text("200",655,540);
  text("200",735,540);
 
  text(mouseX +","+mouseY,mouseX,mouseY)

  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(ball!=null){
     ball.display();

     if(ball.body.position.y > 760){
       if(ball.body.position.x > 10 && ball.body.position.x < 320){
          score = score+500;
          ball = null;
       }
     }
   }

  if(ball!=null){
    ball.display();

    if(ball.body.position.y > 760){
      if(ball.body.position.x > 330 && ball.body.position.x < 560){
         score = score+100;
         ball = null;
      }
    }
  }

  if(ball!=null){
    ball.display();

    if(ball.body.position.y > 760){
      if(ball.body.position.x > 570 && ball.body.position.x < 790){
         score = score+200;
         ball = null;
      }
    }
  }
}

function mousePressed(){
  ball = new Particle(mouseX,10,10);
}