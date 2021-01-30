class Circle{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:100
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        fill(0,191,255);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}