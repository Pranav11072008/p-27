class Bob{
    constructor(x, y,radius) {
        var options={
        isStatic:false,
        friction:0.5,
        density:0.8,
        restitution:1
        }
    
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius
        World.add(world, this.body);
      
    }
    display(){
        var pos =this.body.position; 
        var angle = this.body.angle
        push ()
        translate(pos.x, pos.y)
        rotate (angle)
        ellipseMode(RADIUS);
        fill(255);
        ellipse(0, 0, this.radius,this.radius);
        pop();
      }
}