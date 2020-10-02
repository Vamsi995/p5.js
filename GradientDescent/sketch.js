var learning_rate = 0.5;
var gradient = new GradientDescent(0.05,1,2,3);

var historyState = []

function setup(){

    createCanvas(600,600)

}


function draw(){

    background(255);

	stroke(0,0,255);

	


	if(historyState.length == 0){
		let i=map(gradient.weight,-30,30,0,width);
		let j=map(gradient.quadratic(gradient.weight),height,0,0,height);
		fill(0,0,255);
		ellipse(i,j,8,8);
		historyState.push(gradient.weight);
		console.log(historyState);
	}
	else{

		for(let i=0;i<historyState.length;i++){
			let m=map(historyState[i],-30,30,0,width);
			let n=map(gradient.quadratic(historyState[i]),height,0,0,height);
			fill(0,0,255);
			ellipse(m,n,8,8);
		}
		historyState.push(gradient.weight);

	}



	




	beginShape();
	noFill();
	stroke(0);
	strokeWeight(2);

	for(let i=-50;i<50;i++) {
		let x=map(i,-30,30,0,width);
		// console.log(x)
		let y=map(gradient.quadratic(i),height,0,0,height);
		//   console.log(y)
		curveVertex(x,y);
	}


	endShape();

	gradient.weight -= gradient.lr * gradient.diff(gradient.weight);

	frameRate(20);

}