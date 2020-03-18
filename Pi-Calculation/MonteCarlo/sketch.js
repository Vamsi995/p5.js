var r = 200;
var total = 0;
var circle = 0;


function setup() {

   createCanvas(600, 600);
   background(0);

   div = createDiv('').size(200, 100)
   d = createDiv('').size(200, 100)

   pi = Math.PI

}



function draw() {
   translate(width / 2, height / 2);

   stroke(255)
   strokeWeight(2);
   noFill()
   ellipse(0, 0, r * 2, r * 2);
   rectMode(CENTER)
   rect(0, 0, r * 2, r * 2)



   for (let i = 0; i < 100; i++) {
      let x = random(-r, r)
      let y = random(-r, r)
      total++;
      let dist = x * x + y * y;
      if (dist < r * r) {
         circle++;
         stroke(220, 100, 20, 50)
      } else {
         stroke(100, 100, 150, 120)
      }
      point(x, y)

   }


   let pie = 4 * (circle / total)

   // console.log(String(pie))

   // stroke(255)
   // strokeWeight(1)
   // text(String(pie), 100, 250)



   d.html(String(abs(pi - pie)))
   div.html(String(pie))

   // background();


}