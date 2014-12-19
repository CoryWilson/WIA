window.onload = function() {

	//First we will get our canvas and create a stage
	var canvas = document.getElementById('canvas1');
	var stage = new createjs.Stage('canvas1');

	//drawing a rectangle - create a new shape
	var rect1 = new createjs.Shape();

	//create a fill
	//rect1.graphics.beginFill('purple');
	//rect1.graphics.beginFill(createjs.Graphics.getRGB(162,216,255));
	//rect1.graphics.beginFill('rgb(162,216,255)');

	//Line Gradient
	//rect1.graphics.beginLinearGradientFill(['yellow','red'], [0,1], 50,50,150,150);
	//horizontal
	//rect1.graphics.beginLinearGradientFill(['yellow','red'], [0,1], 50,50,150,150);
	//vertical
	//rect1.graphics.beginLinearGradientFill(['yellow','red'], [0,1], 50,50,150,150);
	//adding another color stop
	//rect1.graphics.beginLinearGradientFill(['yellow', 'purple', 'red'], [0,.5,1], 50,50,150,150);

	//radial gradient
	rect1.graphics.beginRadialGradientFill(['yellow','red'], [0,1], 100,100,0,150,150,100)

	//fill rect
	rect1.graphics.rect(50,50,100,100);

	//add child to stage
	stage.addChild(rect1);

	stage.update();
}
