class Peg{
    constructor(x,y,radius,color){
        var options = {
            isStatic: true,
            restitution: 1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.hue = random(240);
        this.radius = radius;
        this.color = color;
        this.body.label = "peg";
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        colorMode(HSB);
        translate(pos.x,pos.y);
        fill(this.color, 255, 255);
        noStroke();
        ellipse(0,0,this.radius*2);
        pop();
    }
}
