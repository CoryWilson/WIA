window.onload = function() {


	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);


	//create a graphic
	var shape = new createjs.Shape();

	shape.graphics.beginStroke('purple');
	shape.graphics.setStrokeStyle(5,1,1); //5px width, round caps, round joint

	//drawpolystar(x,y,radius,sides,pointSize,angle)
	shape.graphics.drawPolyStar(75,75,50,5,.5,0);
	shape.graphics.drawCircle(75,75,50); //shows the radius

	//star burst
	shape.graphics.drawPolyStar(200,75,50,10,.5,0);

	stage.addChild(shape);
	stage.update();
}
