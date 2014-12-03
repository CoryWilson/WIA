window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				
				//Creat a linear gradient
				//createLinearGradient(x0,y0, x1, y1);
				var linGrd = ctx.createLinearGradient(0,0, 200, 0);
				
				//Add Color stops
				linGrd.addColorStop(0, "#f00"); //Start at red
				linGrd.addColorStop(.5 ,"#00f");//Halfway blue
				linGrd.addColorStop(1, "#0f0");//End with green
				
				//Creat a rectangle and fill it with our gradient
				ctx.fillStyle = linGrd;
				ctx.fillRect(0,0, 200, 260);
				
				
				//Create a radial Gradient
				//ctx.createRadialGradient(x0,y0,r0, x1,y1,r1);
				var radGrd = ctx.createRadialGradient(500, 100, 20, 525, 150, 100);
				
				//Add Color stops
				radGrd.addColorStop(0, "red");
				radGrd.addColorStop(.5, "blue");
				radGrd.addColorStop(1, "green");
				
				
				// Draw a circle and fill with gradient
				ctx.fillStyle = radGrd;
				
				//Begin path
				
				ctx.beginPath();
				ctx.arc(525, 150, 100, 0, 2*Math.PI);
				ctx.fill();
				
				

						
		}
	}
}