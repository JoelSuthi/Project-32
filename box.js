class Box{
     constructor(x, y, width, height) {
         var options = {
              isStatic:false,
             'restitution':0.100,
             'friction':1.0,
             'density':1.0
         }
         this.body = Bodies.rectangle(x, y, width, height, options);
         this.width = width;
         this.height = height;
         this.visibility = 255;
         this.image = loadImage("blocks.png");
         World.add(world, this.body);
       }
       display(){
        if (this.body.speed < 7) {
          var pos =this.body.position;
          rectMode(CENTER);
          image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
          
        }else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility-5;
          tint(255,this.visibility);
          image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
          pop();
          }
    
      }
      score(){
        if (this.visibility < 0 && this.visibility > -105){
          score++;
        }
      }
    
 }