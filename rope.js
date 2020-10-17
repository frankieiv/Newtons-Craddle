class Rope{
    constructor(body1, body2, offsetX, offsetY)
    {
        var option = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
            
        }
        this.rope = Constraint.create(option)
        World.add(world,option)
        this.offsetX = offsetX
        this.offsetY = offsetY
    }
     display(){
         var pointA = this.rope.bodyA.position
         var pointB = this.rope.bodyB.position
         strokeWeight(5)
         fill("yellow")
         line(pointA.x,pointA.y,pointB.x + this.offsetX,pointB.y + this.offsetY)
     }   

    
}