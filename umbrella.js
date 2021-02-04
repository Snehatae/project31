class Umbrella{
    constructor(x,y){
        var op = {
            isStatic:true
        }
     this.body=Bodies.circle(x,y,50,op)  ;
     World.add(world,this.body);
     this.umbrellaImg=loadImage("man.png");
    
    }

    display(){
        imageMode(CENTER);
        //image(variable that contains the image,posx,posy)
        image(this.umbrellaImg,this.body.position.x,this.body.position.y,100,300);
    }
}