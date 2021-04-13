class Bird1 extends Fruit{
    constructor(x,y,r){
        super(x,y,r);
        this.image = loadImage("bird1.png");
    }
    display(){
        super.display();
    }
}