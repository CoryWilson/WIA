window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas) {
		var ctx = theCanvas.getContext("2d");
		if (ctx) {

			var theString = 'Drawing Text on a Canvas';

			//draw a simple text string on canvas using default settings
			ctx.fillText(theString,20,20);

			//draw the string with some font info
			ctx.font = "25pt Georgia";
			ctx.fillText(theString,20,60);

			//draw the string with a fillStyle color
			ctx.fillStyle = "blue";
			ctx.fillText(theString,20,100);

			//draw the string with a stroke and a fill with some opacity
			ctx.font = "32pt Verdana";
			ctx.fillStyle = "yellow";
			ctx.strokeStyle = "rgba(0,255,0,.8)";
			ctx.fillText(theString,20,160);
			ctx.strokeText(theString,20,160);

		}
	}
};
