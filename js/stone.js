class Stone{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0.6,
            friction: 1,
            density:0.6
        }
      this.stone = Matter.Bodies.circle(x, y, 20, options);
      this.image = loadImage("stone.png");
      World.add(world, this.stone);
    }
    display(){
        var pos = this.stone.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 60, 60);
        pop();
    }
}
