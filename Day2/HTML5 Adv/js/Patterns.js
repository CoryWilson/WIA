window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

				//Create pattern from an image
				var patImg = new Image();



				//Onload function, that will wait until the image is loaded
				// patImg.onload = function(){
				// 	console.log("test");
				// 	//repeat, no-repeat, repeat-x, repeat-y
				// 	ctx.fillStyle = ctx.createPattern(patImg, "no-repeat");
				// 	ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
				//
				// 	}
				//
				// patImg.src = "images/desert_desc_bug.gif";



				//Create a pattern from a canvas

				var patCanvas = document.getElementById('patCan');

				var patCtx = patCanvas.getContext("2d");


				//Draw a line in the pattern canvas
				patCtx.strokeStyle = "red";
				patCtx.lineWidth= 1;

				patCtx.beginPath();
				patCtx.moveTo(0,0);
				patCtx.lineTo(25,25);
				patCtx.stroke();

				//Use the canvas as a pattern
				var strokePat = ctx.createPattern(patCanvas, "repeat");
				ctx.strokeStyle = strokePat;
				ctx.lineWidth = 25;
				ctx.strokeRect(50,50, 200, 200);



		}
	}
}
