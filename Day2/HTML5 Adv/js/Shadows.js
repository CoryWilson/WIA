window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				
				var origShadow = ctx.shadowColor;
				var origShadowblur = ctx.shadowBlur;
				//ctx.save();
				
				//setup basic shadow
				ctx.shadowColor = "black"
				ctx.shadowOffsetX = 30;
				ctx.shadowOffsetY=10;
				ctx.shadowBlur=30;
				
				//Draw a simple rectangle
				ctx.fillStyle="rgba(0,0,255,1)";
				ctx.fillRect(20,20, 200, 100);
				
				//Create some text
				var theString = "Drawing on Canvas";
				ctx.fillStyle = "green";
				ctx.font="25pt Georgia";
				
				//Create a new shadow
				ctx.shadowColor = "purple"
				ctx.shadowOffsetX = 5;
				ctx.shadowOffsetY=5;
				ctx.shadowBlur=5;
				
				ctx.fillText(theString, 250, 75);
				
				
				//Create a red line green shadow
				ctx.lineCap="round";
				ctx.lineWidth = 25;
				ctx.strokeStyle = "red";
				
				//Create a 3rd Shadow
				ctx.shadowColor = "rgba(150,0,150,.5)"
				ctx.shadowOffsetX = -15;
				ctx.shadowOffsetY=-15;
				ctx.shadowBlur=15;
				
				ctx.beginPath();
				ctx.moveTo(50, 200);
				ctx.lineTo(450, 200);
				ctx.stroke(); 
				
				//ctx.restore();
				ctx.shadowColor = origShadow;
				ctx.fillStyle ="green";
				ctx.fillRect(20,225,200,50);

						
		}
	}
}