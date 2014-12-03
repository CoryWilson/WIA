window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				
				ctx.save();
					
				ctx.fillStyle ="blue";
				ctx.fillRect(150,30, 100, 50);
						
				ctx.rotate(.5);
					
				ctx.fillStyle ="blue";
				ctx.fillRect(150,30, 100, 50);
				
				ctx.restore();
				
				//Draw line in the middle of canvas
				/*
				ctx.beginPath()
				ctx.moveTo(ctx.canvas.width/2, ctx.canvas.height/2);
				ctx.lineTo(ctx.canvas.width/2 + 100, ctx.canvas.height/2);
				ctx.stroke();
				*/
				
				//translate to the center of the canvas
				//Angle to rotate
				var radian = (Math.PI/180) *20;
				
				ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);	
				
				for(var degrees = 0; degrees<360; degrees+=20){
					
					//Draw the line
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(100, 0);
					ctx.stroke();
					ctx.rotate(radian);
					
					
					}
		

						
		}
	}
}