let pi = 0;
let iterations = 0.1 * Math.PI
let history = []


let minY = -1;
let maxY = 1;


function setup() {
   createCanvas(600, 400)
   // for(let i=0;i<10000;i++){
   //    let den = i*2 + 3;
   //    let frac = 1 / den;
   //    if(i%2 == 0){
   //       pi -= frac
   //    }
   //    else{
   //       pi += frac
   //    } 
   // }
   // pi *= 4

   div = createDiv(pi)
   // frameRate(10)
}


function draw() {
   background(0)
   let den = iterations;

   // if (iterations % 2 == 0) {
   //    pi -= (4 / den)
   // } else {
   //    pi += (4 / den)
   // }
   pi = Math.sin(den) / den;



   history.push(pi)

   let piY = map(1, minY, maxY, height, 0)
   stroke(255)
   line(0, 1, width, piY);


   let spacing = width / history.length;

   // let k = pi - Math.PI
   // console.log(Math.round(k * 255))
   // stroke(Math.round(k * 255));
   noFill();

   beginShape();
   for (let i = 0; i < history.length; i++) {
      let x = i * spacing;
      let y = map(history[i], minY, maxY, height, 0);
      vertex(x, y)
   }
   endShape();
   iterations += 0.1 * (Math.PI);
   div.html(pi);
}