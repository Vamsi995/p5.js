//X represents 1 and O represents 2 in the game array
let state = Array(9).fill(0)


function setup() {
    createCanvas(300, 300)
    console.log(state)
}

function draw() { 
   //  background(255)

    stroke(0)
    strokeWeight(2)

    for (let i = 100; i < height; i+=100) {
        line(i, 0, i, height)
        line(0, i, width, i)
    }

}

function evaluate(state){

   let state_sum =[
      state[0] + state[1] + state[2],
      state[3] + state[4] + state[5],
      state[6] + state[7] + state[8],
      
      state[0] + state[3] + state[6],
      state[1] + state[4] + state[7],
      state[2] + state[5] + state[8],
      
      state[0] + state[4] + state[8],
      state[2] + state[4] + state[6]
   ]
   
   for(const sum of state_sum){
      if(sum % 3 == 0){
         if(sum > 0){
            console.log("X")
            return "X"
         }
         else{
            return "O"
         }
      }
   }

}

function mousePressed(){

   
   textSize(20)
   stroke(0)
   fill(0)

   if(mouseX < 100){
      if(mouseY < 100){
         text("X",50,50)
         state[0] = 1;
         console.log(1)
      }
      else if(mouseY > 100 && mouseY < 200){
         text("X",50,150)
         state[3] = 1;
         console.log(4)
      }
      else if(mouseY > 200 && mouseY < 300){
         text("X",50,250)
         state[6] = 1;
         console.log(7)
      }
   }
   else if(mouseX > 100 && mouseX < 200){

      if(mouseY < 100){
         text("X",150,50)
         state[1] = 1;
         console.log(2)
      }
      else if(mouseY > 100 && mouseY < 200){
         text("X",150,150)
         state[4] = 1;
         console.log(5)
      }
      else if(mouseY > 200 && mouseY < 300){
         text("X",150,250)
         state[7] = 1;
         console.log(8)
      }

   }
   else if(mouseX > 200){
      if(mouseY < 100){
         text("X",250,50)
         state[2] = 1;
         console.log(3)
      }
      else if(mouseY > 100 && mouseY < 200){
         text("X",250,150)
         state[5] = 1;
         console.log(6)
      }
      else if(mouseY > 200 && mouseY < 300){
         text("X",250,250)
         state[8] = 1;
         console.log(9)
      }
   }

   evaluate(state)
}
