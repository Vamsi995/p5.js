// X represents 1 and O represents 2 in the game array
let state = Array(9).fill(0)


function setup() {
    createCanvas(300, 300)
    console.log(state)
}

function draw() { // background(255)

    stroke(0)
    strokeWeight(2)

    for (let i = 100; i < height; i += 100) {
        line(i, 0, i, height)
        line(0, i, width, i)
    }

}

function evaluate(state) {

    let state_sum = [
        state[0] + state[1] + state[2],
        state[3] + state[4] + state[5],
        state[6] + state[7] + state[8],

        state[0] + state[3] + state[6],
        state[1] + state[4] + state[7],
        state[2] + state[5] + state[8],

        state[0] + state[4] + state[8],
        state[2] + state[4] + state[6]
    ]


    for (const sum of state_sum) {
        if (sum % 3 == 0 && sum != 0) {
            if (sum > 0) {
                console.log("X");
                return "X";
            } else {
                console.log("O");
                return "O"
            }
        }
    }

    return "None";

}


function ai_turn(state) {


    new_state = [... state];

    scores = []
    actions = []

    for (let i = 0; i < state.length; i++) {

        if (state[i] == 0) {
            new_state[i] = -1;
            scores.push(score_state(new_state))
            actions.push(i)
            new_state[i] = 0;
        }


    }

    max_score = max(scores)

    action = actions[scores.indexOf(max_score)]

    return action;
}


function score_state(state) {


    let score = 0;

    let game_board = []

    game_board.push(state[0] + state[1] + state[2], state[3] + state[4] + state[5], state[6] + state[7] + state[8], state[0] + state[3] + state[6], state[1] + state[4] + state[7], state[2] + state[5] + state[8], state[0] + state[4] + state[8], state[2] + state[4] + state[6])


    game_board.forEach((row) => {

        if (row == 3) {
            score -= 100
        } else if (row == 2) {
            score -= 13
        } else if (row == 1) {
            score += 12
        } else if (row == -1) {
            score += 7
        } else if (row == -2) {
            score += 14
        } else if (row == -3) {
            score += 100
        }

    })

    return score;
}


function mousePressed() {

    textSize(20)
    stroke(0)
    fill(0)

    user_action()

    fill_grid()

    if(evaluate(state) == "X"){
      console.log("X wins");
      return;
   }
   
   else{

      
    game_index = ai_turn(state)

    state[game_index] = -1;

    fill_grid()

    if(evaluate(state) == "O"){
      console.log("O wins")
      return;
   }


   }

    
}


function fill_grid() {

    if (state[0] == 1) {
        text("X", 50, 50)
    } else if (state[0] == -1) {
        text("O", 50, 50)
    }

    if (state[1] == 1) {
        text("X", 150, 50)
    } else if (state[1] == -1) {
        text("O", 150, 50)
    }

    if (state[3] == 1) {
        text("X", 50, 150)
    } else if (state[3] == -1) {
        text("O", 50, 150)
    }

    if (state[2] == 1) {
        text("X", 250, 50)
    } else if (state[2] == -1) {
        text("O", 250, 50)
    }

    if (state[4] == 1) {
        text("X", 150, 150)
    } else if (state[4] == -1) {
        text("O", 150, 150)
    }

    if (state[5] == 1) {
        text("X", 250, 150)
    } else if (state[5] == -1) {
        text("O", 250, 150)
    }

    if (state[6] == 1) {
        text("X", 50, 250)
    } else if (state[6] == -1) {
        text("O", 50, 250)
    }

    if (state[7] == 1) {
        text("X", 150, 250)
    } else if (state[7] == -1) {
        text("O", 150, 250)
    }


    if (state[8] == 1) {
        text("X", 250, 250)
    } else if (state[8] == -1) {
        text("O", 250, 250)
    }


}


function user_action() {


    if (mouseX < 100) {

        if (mouseY < 100) {
            state[0] = 1;
        } else if (mouseY > 100 && mouseY < 200) {
            state[3] = 1;
        } else if (mouseY > 200 && mouseY < 300) {
            state[6] = 1;
        }

    } else if (mouseX > 100 && mouseX < 200) {

        if (mouseY < 100) {
            state[1] = 1;
        } else if (mouseY > 100 && mouseY < 200) {
            state[4] = 1;
        } else if (mouseY > 200 && mouseY < 300) {
            state[7] = 1;
        }

    } else if (mouseX > 200) {
        if (mouseY < 100) {
            state[2] = 1;
        } else if (mouseY > 100 && mouseY < 200) {
            state[5] = 1;
        } else if (mouseY > 200 && mouseY < 300) {
            state[8] = 1;
        }
    }
}
