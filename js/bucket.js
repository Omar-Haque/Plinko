class Bucket{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.hue = random(360);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        colorMode(HSB);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        noStroke();
        fill(this.hue, 255, 255);
        rect(0,0,this.width,this.height);
        pop();
    }
}
