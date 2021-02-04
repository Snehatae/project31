class Rainfall{
    constructor(x,y){
    var options={
        friction:3
    }
    this.body= Bodies.rectangle(x,y,3,5,options);
    World.add(world, this.body);
    this.posy=y;
 
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x, pos.y,5,7);
}

reposition(){
    if(this.body.position.y>750){
    Matter.Body.setPosition(this.body,{x:random(5,690) ,y: random(0,500)})

    }
}

}
