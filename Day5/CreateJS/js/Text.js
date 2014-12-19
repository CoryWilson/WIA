window.onload = function() {

	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);

	//first create variable and invoke Text()
	var sentence = new createjs.Text();

	sentence.text = "This is a sentence!";

	//font property - take most css string
	sentence.font = "bold 40px Times";

	//change the color
	sentence.color = "blue";

	sentence.x = 150;
	sentence.y = 50;
	//sentence.rotation = 30;

	//text align - left, center, right
	sentence.textAlign = "left";

	//lineheight
	sentence.lineHeight = 50;

	//add stroke to the outside
	sentence.outline = true;

	stage.addChild(sentence);
	stage.update();

}
