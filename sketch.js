const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    //level 1
    block1=new Box(130,235,30,40)
    block2=new Box(160,235,30,40)
    block3=new Box(190,235,30,40)
    block4=new Box(220,235,30,40)
    block5=new Box(250,235,30,40)
    block6=new Box(280,235,30,40)
    block7=new Box(300,235,30,40)

    //level 2
    block8=new Box(330,195,30,40)
    block9=new Box(360,195,30,40)
    block10=new Box(390,195,30,40)
    block11=new Box(410,195,30,40)
    block12=new Box(440,195,30,40)

    //level 3
    block13=new Box(470,155.30,40)
    block14=new Box(500,155,30,40)
    block15=new Box(530,155,30,40)

    //level 4
    block16=new Box(560,145,30,40)

    //level 5
    block17=new Box(760,100,30,40)
    block18=new Box(790,100,30,40)
    block19=new Box(820,100,30,40)
    block20=new Box(850,100,30,40)
    block21=new Box(880,100,30,40)

    //level 6
    block22=new Box(910,60,30,40)
    block23=new Box(940,60,30,40)
    block24=new Box(970,60,30,40)

    //level 7
    block25=new Box(800,20,30,40)

    polygon=Bodies.circle(50,200,20)
    World.add(world,polygon)

    SlingShot=new SlingShot(this.polygon,{x:100,y:200})
    imageMode(CENTER)
    image(polygon,polygon.position.x,polygon.position.y,40,40)
}

    function draw(){
        background(0);
        Engine.update(engine);
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        block13.display();
        block14.display();
        block15.display();
        block16.display();
        block17.display();
        block18.display();
        block19.display();
        block20.display();
        block21.display();
        block22.display();
        block23.display();
        block24.display();
        block25.display();
    }