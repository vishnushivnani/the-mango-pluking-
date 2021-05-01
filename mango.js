class Mangoes {
    constructor(x, y,radius) {
      var options = {
          isStatic:true,
          restitution:1,
          density:1.2,
          friction:1
      }
      this.image = loadImage("sprites/mango.png");
      this.body = Bodies.circle(x, y,radius,options);
      this.radius = radius
      this.Visiblity = 255;
      World.add(world, this.body);
      
      
    }
      
     
     
     
   
    display(){
      if(this.body.speed <= 23){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    imageMode(CENTER); fill("purple");
    image( this.image,0, 0, this.radius*2, this.radius*2);
     
      pop();}
        else {
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, this.radius,this.radius);
        pop();
      }
    }
}