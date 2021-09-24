class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0,
             length:10,
             friction:0.02
        


        }

        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA =null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        console.log(this.sling)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(3);
            stroke(64,224,208)
            line(pointA.x,pointA.y, pointB.x,pointB.y);

        }
    }
    
}