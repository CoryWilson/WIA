window.onload = function() {
	console.log('test');
	//get canvas element
	var canvas = document.getElementById("canvas1");
	
	//Create our stage wrapped around our canvas
	var stage = new createjs.Stage(canvas);
	
	//create a graphic 
	var shape = new createjs.Shape();
	
	//Draw The Shape
	
	shape.graphics.f("rgba(76,216,255,254)").p("EBLoARMYAAAKAAAKAAAKYAAEijcFAmGAAYh4AAh4gehag8YAUAAAKAAAUAAYBkAABageBQg8YhkAAhQhGgUhQYAKAAAKAAAUAAYAUAAAUAAAKAAYhagUhQhaAAhuIAAAAYAeAUAeAKAoAAYg8gogohGAAhGYAAgoAKgoAUgeYBuCCCgBaCqAKYAAgUAAgUAAgKYAAh4BkhkBuAAYBGAAAyAeAoAoYAygKAygUAogUYgUAygeAogyAeYAygKAogKAogUYgeAygoAegoAe").cp().ef();

		
	

	stage.addChild(shape);
	// Then we update the stage to draw it up
	stage.update();

}