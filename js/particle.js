class Particle{
    constructor(x,y,radius){
        var options = {
            restitution: 0.5,
            friction: 0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.hue = random(360);
        this.radius = radius;
        World.add(world, this.body);
    }

    isOffScreen(){
        var pos = this.body.position;
        return(pos.y > 800)
    }

    remove(){
        World.remove(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        colorMode(HSB);
        noStroke();
        translate(pos.x,pos.y);
        //fill(this.hue, saturation, brightness)
        fill(this.hue, 255, 255);
        ellipse(0,0,this.radius*2);
        pop();
    }
}
