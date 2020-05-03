const set=[];



function setup(){
   createCanvas(640,360);
   for(let i=0;i<100;i++)
      set.push(new Boid());
}


function draw(){
   background(51);
   for(let boid of set){
      boid.edges();
      boid.flock(set);
      boid.show();
      boid.update();
   }


}