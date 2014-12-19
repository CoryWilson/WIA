window.onload = function() {
			
			//Canvas & Stage
			var canvas=document.getElementById("canvas");
			
			var stage= new createjs.Stage(canvas);
			
			//Get the image 
			var img = new Image();
			img.src = "images/ship.svg";
			img.onload = updateStage;
			
			function updateStage(e){
				
				var bmp = new createjs.Bitmap(e.target);
				
				//Center of the canvas
				var centerX = canvas.width/2;
				var centerY = canvas.height/2;
				
				// Set our images x & y
				bmp.x = centerX;
				bmp.y = centerY;
				
				//Change reg points
				bmp.regX = 50;
				bmp.regY = 50;
				
				//Scale it up
				//bmp.scaleX = 4;
				//bmp.scaleY = 4;
				
				stage.addChild(bmp);
				
				//stage.update();
				
				// Add event listener for our "tick"
				createjs.Ticker.addEventListener("tick", ticker);
				
		function ticker(){
			//Anything in here will run default of 20 fps
			//bmp.rotation +=2;
			//bmp.x +=2;

			//Lets shake the ship
			//bmp.x = centerX + Math.random()*50;
			
			//bmp.x = centerX + (Math.random() - .5 )* 100;

			// Wave Motion by using sin & cos
			//sin needs a number to do anything
			//bmp.x = centerX + Math.sin(createjs.Ticker.getTicks())* 100 ;
			//bmp.y= centerY + Math.sin(createjs.Ticker.getTicks())* 100 ;
			
			// Get a circle motion
			
			//dividing # controls speed
			// * number is the aplitude - or size of circle
			bmp.x = centerX + Math.sin(createjs.Ticker.getTicks()/7)* 10 ;
			bmp.y= centerY + Math.cos(createjs.Ticker.getTicks()/7)* 100 ;
					
	

			stage.update();
			
			}
				
				
				}
				
				
		
			
}