// Test if canvas works on our browser

if (Modernizr.canvas){
	//Draw inside of here
	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext("2d");
	
	//Draw text on the screen
	ctx.font = "25pt Georgia";
	ctx.fillText("Canvas is working", 20, 60);


}else{
	
	//Fallback 
	//Polyfill
	//Shiv
	
	}
	
//Test 

if(Modernizr.draganddrop){
	//Draw a string that says it supported
	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext("2d");
	
	//Draw text on the screen
	ctx.font = "25pt Georgia";
	ctx.fillText("Drag and Drop Works", 20, 120);
	
	
	} else {
		//Fall Back or Polyfill
		
		}	
		
console.log(Modernizr);		