window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			
			ctx.save();
			
			ctx.fillStyle ="blue";
			ctx.fillRect(0,0,100,50);
			
			//Use transform to translate
			
			// transform( a,b,c,d,e,f);
			
			//A transform matrix looks like this:
			
			//1 0 x
			//0 1 y
			//0 0 1
			
			ctx.fillStyle = "red";
			
			var tx = ctx.canvas.width/2;
			var ty = ctx.canvas.height/2;
			
			ctx.transform(1, 0 , 0, 1, tx, ty);
			
			ctx.fillRect(0,0,100,50);
			
			ctx.transform(1, 0 , 0, 1, -tx, -ty);
			
			ctx.fillStyle = "yellow";
			ctx.fillRect(0,0,50,50);
			
			// Skew our x and y
			
			// A skewing matrix looks like this:
			
			// 1 sx 0
			// sy 1 0
			// 0 0 1
			
			ctx.fillStyle = "green";
			
			//Create variables to skew by:
			var sx = .4;
			var sy = 0;  // 0 is not skewing
			
			ctx.setTransform(1, sy, sx, 1, 0, 0);
			
			ctx.fillRect(250,20,50,50);
			
			// Reflections 
			
			//Matrix looks like this:
			
			// 1  0   0 
			// 0 - 1  0 
			// 0  0   1
			
			ctx.restore();
			
			ctx.fillStyle = "blue";
			// Write some text out
			ctx.font= "48pt Helvetica";
			ctx.fillText("Transform", 0, 100);
			
			//Use our reflection matrix transform
			ctx.setTransform(1, 0, 0, -1, 0, 0);
			
			//ctx.fillStyle = "red";
			
			//More standard 
			//Make it a gradient
			
			var grad = ctx.createLinearGradient(0, -50, 0, -140);
			
			
			//Add Color Stops
			grad.addColorStop( .5, "blue");
			grad.addColorStop(1, "rgba(255,255,255,0)" );
			
			ctx.fillStyle = grad;
			ctx.fillText("Transform", 0, - 110);
			
						
		}
	}
}