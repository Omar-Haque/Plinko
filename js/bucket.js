class Bucket{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height, {isStatic:true});
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        noStroke();
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}