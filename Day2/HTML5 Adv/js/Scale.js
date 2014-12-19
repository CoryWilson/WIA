window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		
			ctx.save();
			//Draw a simple rect
			ctx.fillStyle ="blue";
			ctx.fillRect(0,0,100,50);
			
			//Scale it
			ctx.scale(1.5, 2);
			
			ctx.fillStyle ="red";
			ctx.fillRect(0,50,100,50);
			
			
			ctx.restore();
			//Another Scale
			ctx.scale(.5,.5);
			
			ctx.fillStyle ="purple";
			ctx.fillRect(0,225,100,50);
					
		
	
						
		}
	}
}