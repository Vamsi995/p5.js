
let particles;
function setup() {
  createCanvas(600, 400);
 particles=Array(100).fill().map(()=>new Particle());
}

function draw() {
  background(0);
  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }

  particles.sort((a,b)=>a.col-b.col);


 
   particles.forEach((p)=>{
      p.update();
      p.show()
   });
  
 particles  = particles.filter((p)=>p.alpha>0);

 let sumx=particles.reduce((x,p)=>x+p.x,0);
 let sumy=particles.reduce((y,p)=>y+p.y,0);

 let cx=sumx/particles.length;
 let cy=sumy/particles.length;



// let sumV=particles.reduce((v,p)=>v.add(p.x,p.y),createVector(0,0));
// sumV.div(particles.length);
//  fill(0);
//  ellipse(sumV.x,sumV.y,24,24);


//   for (let i = particles.length - 1; i >= 0; i--) {
//     particles[i].update();
//     particles[i].show();
//     if (particles[i].finished()) {
//       // remove this particle
//       particles.splice(i, 1);
//     }
//   }
}

class Particle {

  constructor() {
    this.x = 300;
    this.y = 380;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.col=random(256);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    noStroke();
    //stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, 16);
  }

}
