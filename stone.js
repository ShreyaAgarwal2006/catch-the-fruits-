class Stone{
    constructor(x,y,r){

        var options={
			isStatic:false,
			restitution :0.3,
            friction :0.5,
            density :0.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("stone.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);


    }

    display()
	{
		var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill("black")
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }

}