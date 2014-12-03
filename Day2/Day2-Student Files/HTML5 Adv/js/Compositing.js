window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		
			// Let's create an array of all our compositing methods
			var compMethods = ["source-over", "source-in", "source-out", "source-atop", "lighter", "xor", "destination-over", "destination-in", "destination-out", "destination-atop", "darker", "copy" ];
			
			var rects = [
					{x:20, y:20, width:75, height:75},
					{x: 40, y:50, width: 75, height: 75}
			
			
			];
			
			
			// Create a variable to track which method
			var  method= 0;
			
			//for loop
			
			
			for(var i=0; i<compMethods.length; i++){
				
					// Get each canvas
					var cvsName = "Canvas" + (i+1);
					
					// Get link to canvas
					var curCanvas = document.getElementById(cvsName);
					
					//Get our context for that specific canvas
					
					var exampCtx = curCanvas.getContext("2d");
					
					//Sets up style
					
					exampCtx.fillStyle = "blue";
					exampCtx.fillRect(rects[0].x, rects[0].y, rects[0].width, rects[0].height);
					
					exampCtx.globalCompositeOperation = compMethods[method++];
					
					exampCtx.fillStyle = "green";
					exampCtx.fillRect(rects[1].x, rects[1].y, rects[1].width, rects[1].height);
					
					
								
				
				
				
				}
			
					
											
		}
	}
}