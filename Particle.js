class Particles{
    constructor(x,y){
        var options = {
            density:1
        }
        this.r=10;
        this.body = Bodies.circle(x,y,this.r,options)
        
        
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        push();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }
}