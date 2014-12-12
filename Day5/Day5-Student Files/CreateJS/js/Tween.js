window.onload = function() {

	var canvas = document.getElementById('canvas1');

	var stage = new createjs.Stage(canvas);

	//create the ball
	var ball = new createjs.Shape();

	ball.graphics.setStrokeStyle(5, 'round', 'round');
	ball.graphics.beginStroke('black');
	ball.graphics.beginFill('red');
	ball.graphics.drawCircle(0,0,50);
	ball.graphics.endStroke();
	ball.graphics.endFill();

	//draw line on the ball
	ball.graphics.setStrokeStyle(1,'round','round');
	ball.graphics.beginStroke('black');
	ball.graphics.moveTo(0,0);
	ball.graphics.lineTo(0,50);
	ball.graphics.endStroke();

	//move ball
	ball.x = 100;
	ball.y = 100;

	//create tween
	var tween = createjs.Tween.get(ball,{loop:true})
		.to({x:ball.x,y:canvas.height-55,rotation:-360},1500,createjs.Ease.bounceOut)
		.wait(1000)
		.to({x:canvas.width-55, rotation:360},2500,createjs.Ease.bounceOut)
		.wait(1000)
		.to({scaleX:.5,scaleY:.5, x:30, rotation:-360, y:canvas.height-30,alpha:0},2500,createjs.Ease.bounceOut);

	stage.addChild(ball);
	createjs.Ticker.addEventListener('tick', stage);
	stage.update();
}
