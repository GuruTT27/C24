const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2,pig3;
var log1,log2,log3,log4,log5;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,325,70,70);
    pig1 = new pig(810,350)
    box2 = new Box(920,325,70,70);
    log1 = new Log(810,260,300,PI/2);

    box3 = new Box(700,235,70,70);
    pig2 = new pig(810,240)
    box4 = new Box(920,235,70,70);
    log2 = new Log(810,200,300,PI/2);

    box5 = new Box(810,200,70,70);
    log3 = new Log(760,120,150,PI/7)

    log4 = new Log(870,120,150,-PI/7)

    bird1 = new bird(100,100);

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    pig1.display();
    box2.display();
    log1.display();

    box3.display();
    pig2.display();
    box4.display();
    log2.display();

    box5.display();
    log3.display();

    log4.display();

    bird1.display();

    ground.display();
}