class Boy{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.boy = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.boy);
    }
    display(){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            console.log(pointA);
            console.log(pointB);
            strokeWeight(4);
            fill("black");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}