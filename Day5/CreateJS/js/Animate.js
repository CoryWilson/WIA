window.onload = function() {

	var canvas = document.getElementById('canvas');
	var stage = new createjs.Stage(canvas);

	//bitmap class used for working with external graphics
	//gif,jpg,png,svg etc...

	var ship = new createjs.Bitmap('images/ship.png');

	//find the center of the canvas
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;

	//set X & Y to place image in the middle of the canvas
	ship.x = centerX;
	ship.y = centerY;
	ship.regX = 50;
	ship.regY = 50;

	//add to stage
	stage.addChild(ship);

	//set the frame rate using a class called Ticker
	createjs.Ticker.setFPS(30);

	createjs.Ticker.addEventListener('tick',tick);

	function tick(){
		//ship.x = centerX + Math.random()*5;
		//ship.y = centerY + Math.random()*5;

		//ship.x = centerX+Math.sin(3);
		//ship.x = centerX+Math.sin(createjs.Ticker.getTicks());

		ship.x = centerX+(Math.sin(createjs.Ticker.getTicks()/7)*50);
		ship.y = centerY+(Math.cos(createjs.Ticker.getTicks()/7)*50);

		stage.update();
	}
}
