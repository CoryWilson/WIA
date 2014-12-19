window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
  				ctx.save();
				
				//Create some variables
				var x = theCanvas.width/2;
				var y = theCanvas.height/2;
				var radius = 75;
				var offset = 50;
				
				//Create a clip path
				ctx.beginPath();
				ctx.arc(x,y, radius, 0, 2*Math.PI);
				ctx.clip();
				
				
				//Draw a blue Circle
				ctx.beginPath();
				ctx.arc( x-offset, y-offset, radius, 0, 2*Math.PI);
				ctx.fillStyle = "blue";
				ctx.fill();
				
				
				//Draw a yellow circle inside of our clipping path
				
				ctx.beginPath();
				ctx.arc(x+offset, y, radius, 0, 2*Math.PI);
				ctx.fillStyle="yellow";
				ctx.fill();
				
				//Draw a red circle inside of our clipping path
				
				ctx.beginPath();
				ctx.arc(x, y+offset, radius, 0, 2*Math.PI);
				ctx.fillStyle="red";
				ctx.fill();
				
				//Stroke the whole circle
				
				//Restore our clipping path to the whole canvas
				ctx.restore();
				
				ctx.beginPath();
				ctx.arc(x,y, radius, 0, 2*Math.PI);
				ctx.lineWidth = 10;
				ctx.strokeStyle = "blue";
				ctx.stroke();
     						
		}
	}
}