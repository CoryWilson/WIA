window.onload = function() {


	var canvas = document.getElementById('canvas1');
	var stage = new createjs.Stage(canvas);

	var rect1 = new createjs.Shape();

	//draw a rectangle
	rect1.graphics.beginFill('red').drawRect(0,0,100,100);

	//change its registration point
	rect1.regX = 50;
	rect1.regY = 50;

	//move it to (100,100)
	rect1.x = 100;
	rect1.y = 100;

	//add stages display list
	stage.addChild(rect1);

	stage.update();

	createjs.Ticker.setFPS(30);

	createjs.Ticker.addEventListener('tick',tick);

	function tick(){
		rect1.rotation += 8;
		stage.update();
	}
}
