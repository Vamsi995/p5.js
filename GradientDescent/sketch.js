var learning_rate = 0.5;

function setup(){

    createCanvas(600,600)

    plot = new GPlot(new p5());
		plot.setPos(25, 25);
		plot.setDim(300, 300);
}


function draw(){

    background(255);

	plot.beginDraw();
		plot.drawBackground();
		plot.drawBox();
		plot.drawXAxis();
		plot.drawYAxis();
		plot.drawTopAxis();


   
}