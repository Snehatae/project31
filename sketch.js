const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var dropsArray =[];
var rand,thunder1;

function preload(){
    thunder1= loadImage("thunderbolt.png");
}

function setup(){
   var canvas= createCanvas(700,750);
   engine = Engine.create();
    world = engine.world;

    umbrellaMan = new Umbrella(350,600);
    for(var i =0;i<100;i++){
    //push() function of array - too add elements inside our array - arrayname.push(what we have to push)
    //when we write new - it creates an object - when we create an object the constructor is 
    //the 1st function that gets called
    dropsArray.push(new Rainfall(random(5,690),random(0,650)))
        
    }

    // drop1= new Rainfall(50,200,20,20);
    // drop2= new Rainfall(100,250,20,20);
    // drop3= new Rainfall(120,300,20,20);
    // drop4= new Rainfall(150,400,20,20);
    // drop5= new Rainfall(200,500,20,20)

    
    
}

function draw(){
    background("black");
    Engine.update(engine);

    for (var i=0; i<100; i=i+1){
        dropsArray[i].display();
        dropsArray[i].reposition();
    }

    umbrellaMan.display();

    rand= Math.round(random(1));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder= createSprite(50,100,10,10);

        switch(rand){
            case 1:thunder.addImage(thunder1);
            break;

            default:break;
        }   
        thunder.scale= random(1,3);
     } 

    // dropsArray[0].display();
    // dropsArray[1].display();
    // dropsArray[2].display();
    // dropsArray[3].display();
    // dropsArray[4].display();

    // drop1.reposition();
    // drop2.reposition();
    // drop3.reposition();
    // drop4.reposition();
    // drop5.reposition();
}   

