class Fruit{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("banana.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
		this.visibility = 255;
	}

	display()
	{
		var Pos=this.body.position;	
		push()
		if(this.body.speed === 0){
			
			translate(Pos.x, Pos.y);
			// rectMode(CENTER);
			rotate(this.body.angle)
			//fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2)
		}
		else {

			World.remove(world,this.body);
			this.visibility = this.visibility -8;
			tint(255,this.visibility);
			image(this.image,Pos.x,Pos.y,this.r*2,this.r*2);
		}
		pop()
	}
		
 	score(){
		if (this.visibility<255 && this.visibility>0){
			score++
		}
	}	

}