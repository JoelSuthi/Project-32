class Polygon {
     constructor(x,y,R){ 
      var options = { 
      isStatic:false, 
      restitution:0.3, 
      friction:0.5,
      density:1.2
      }
     this.body = Bodies.circle(x,y,R,options); 
     this.R = R; 
     this.x = x; 
     this.y = y; 
     this.image = loadImage("polygon.png");
     World.add(world, this.body); 
     } 
     display(){ 
      var pos =this.body.position; 
      var angle = this.body.angle;
      fill("white");
      imageMode (CENTER);
      image(this.image,pos.x,pos.y,this.R,this.R); 

      } 
      };