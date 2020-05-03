class Boid{
   constructor(){
      this.position=createVector(random(width),random(height));
      //creating a random velocity with unit magnitude
      this.velocity=p5.Vector.random2D();
      //Setting the magnitude of these vectors
      this.velocity.setMag(random(2,4));

      this.acceleration=createVector();
      this.maxForce=0.3;
      this.maxSpeed=3;
   }


   edges(){
      if(this.position.x>width){
         this.position.x=0;
      }
      else if(this.position.x<0){
         this.position.x=width;
      }

      if(this.position.y>height){
         this.position.y=0;
      }
      else if(this.position.y<0){
         this.position.y=height;
      }
   }


   align(boids){

      let fieldView=50; 

      let counter=0;




      let avg=createVector(0,0);
      for(let units of boids){

         let distance=dist(units.position.x,units.position.y,this.position.x,this.position.y);

         if(distance<=fieldView && units!=this){
            avg.add(units.velocity);
            counter++;
         }
            
      }
      if(counter>0){
         avg.div(counter);
         //scaling the vectors for more speed 
         avg.setMag(this.maxSpeed);

         //Calculating the error in the velocity
         avg.sub(this.velocity);
         avg.limit(this.maxForce);
         // avg.add(this.maxSpeed);
         // console.log(avg);
      }
      return avg;
   }


   flock(boids){
      //alignment is the error in the velocity
      // let alignment=this.align(boids);
      let cohesion=this.cohesion(boids);
      //acceleration is set to be alignment in order to change the velocity of each boid by that much
      this.acceleration=cohesion;
   }

   show(){
      strokeWeight(8);
      stroke(255);
      point(this.position.x,this.position.y);
   }

   update(){
      //Position is updated by adding velocity 
      this.position.add(this.velocity);
      //velocity is updated by adding acceleration
      this.velocity.add(this.acceleration);
   }




   
   cohesion(boids){

      let fieldView=50; 

      let counter=0;




      let avg=createVector(0,0);
      for(let units of boids){

         let distance=dist(units.position.x,units.position.y,this.position.x,this.position.y);

         if(distance<=fieldView && units!=this){
            avg.add(units.position);
            counter++;
         }
            
      }
      if(counter>0){
         avg.div(counter);
         avg.sub(this.position);

         avg.setMag(this.maxSpeed);
         //Calculating the error in the velocity
         avg.sub(this.velocity);
         avg.limit(this.maxForce);
         // avg.add(this.maxSpeed);
         // console.log(avg);
      }
      return avg;
   }



































}