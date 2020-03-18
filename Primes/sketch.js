let flag = 0;
let prime = 0;

let prev_x = 0;
let prev_y = 0;

function setup() {
   createCanvas(3000, 1000);

   background(0)
}


function draw() {

   translate(width / 2, height / 2)
   stroke(255)

   flag = 0


   for (let j = 2; j <= prime / 2; j++) {

      if (prime % j == 0) {
         flag = 1;
         break;
      }
   }

   if (flag == 0) {
      let x = prime * cos(prime) * 0.1
      let y = prime * sin(prime) * 0.1

      stroke(255)

      ellipse(x, y, 4, 4)

      // line(0, 0, x, y)
      // prev_x = x;
      // prev_y = y
   }


   prime++;


}