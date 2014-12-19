window.onload = function() {

	//First we canvas and stage

	var canvas = document.getElementById('canvas1');
	var stage = new createjs.Stage('canvas1');

	//Create a shape
	var shape = new createjs.Shape();

	//start with a beginStroke() to define the color of the stroke
	shape.graphics.beginStroke('purple');

	//linear gradients
	shape.graphics.beginLinearGradientStroke(['yellow','purple','red'],[0,.5,1],50,50,250,250);

	//after we set color and style read to draw the line
	shape.graphics.moveTo(25,25);

	shape.graphics.lineTo(250,25);

	stage.addChild(shape);

	stage.update();
}
