let game_array = []


function setup() {
    createCanvas(300, 300)
}

function draw() { // Drawing borders
    background(255)

    stroke(0)
    strokeWeight(2)

    for (let i = 100; i < height; i+=100) {
        line(i, 0, i, height)
        line(0, i, width, i)
    }

}

function mousePressed(){

   if(mouseX < 100){
      if(mouseY < 100){
         console.log(1)
      }
      else if(mouseY > 100 && mouseY < 200){
         console.log(4)
      }
      else if(mouseY > 200 && mouseY < 300){
         console.log(7)
      }
   }
   else if(mouseX > 100 && mouseX < 200){

      if(mouseY < 100){
         console.log(2)
      }
      else if(mouseY > 100 && mouseY < 200){
         console.log(5)
      }
      else if(mouseY > 200 && mouseY < 300){
         console.log(8)
      }

   }
   else if(mouseX > 200){
      if(mouseY < 100){
         console.log(3)
      }
      else if(mouseY > 100 && mouseY < 200){
         console.log(6)
      }
      else if(mouseY > 200 && mouseY < 300){
         console.log(9)
      }
   }
}
