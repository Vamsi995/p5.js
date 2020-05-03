const set=[];



function setup(){
   createCanvas(640,360);
   // for(let i=0;i<50;i++)
   //    set.push(new Boid());
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

function mousePressed(){
   set.push(new Boid(mouseX,mouseY));
}

