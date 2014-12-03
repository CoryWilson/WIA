window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas) {
		var ctx = theCanvas.getContext("2d");
		if (ctx) {

			ctx.strokeStyle = "blue";
			ctx.lineWidth = 5;

			//stroke a simple bezier curve
			ctx.beginPath();
			ctx.moveTo(50,200); //starting point
			ctx.bezierCurveTo(50,100,200,100,200,150);
			ctx.stroke();

			//show control points
			ctx.strokeStyle = "rgba(0,0,0,.25)";
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(50,200);
			ctx.lineTo(50,100);
			ctx.lineTo(200,100);
			ctx.lineTo(200,150);
			ctx.stroke();

			//stroke quadratic curve
			ctx.strokeStyle = "green";
			ctx.lineWidth = 5;
			ctx.beginPath();
			ctx.moveTo(400,200);
			ctx.quadraticCurveTo(400,100,600,150);
			ctx.stroke();

			//add control points
			ctx.strokeStyle = "rgba(0,0,0,.25)";
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(400,200);
			ctx.lineTo(400,100);
			ctx.lineTo(600,150);
			ctx.stroke();

		}
	}
};
