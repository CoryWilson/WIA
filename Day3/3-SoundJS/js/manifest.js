window.onload = function() {
	if(!createjs.Sound.initializeDefaultPlugins()){return;}

	//we store the relative path to our audio assets as a variable
	//this allows us to make a single change when moving files rather than trying to track down each one

	var audioPath='audio/';

	//SoundJS accepts an array of objects that represent each audio instance called a manifest
	//containing a src property that the URI of the audio file
	//id property as a best practice, it can make future (or feature?) interactions easier
	//use both mp3 and ogg for best and broadest playback

	var manifest = [
		{id:'Music',src:audioPath+'music.mp3|'+audioPath+'music.ogg'},
		{id:'Thunder',src:audioPath+'Thunder1.mp3|'+audioPath+'Thunder1.ogg'}
	];

	//create an addEventListener to listen for the file load event
	//pass in a function to play the sound after it loads
	createjs.Sound.addEventListener('fileload',handleLoad);

	//once this is ready, the audio can be kicked off using the registerManifest method
	createjs.Sound.registerManifest(manifest);
};

	//once everything is loaded, we'll run this function
	function handleLoad(event){
		createjs.Sound.play(event.src);
	}
	function playMusic(){
		createjs.Sound.play('Music');
	}
	function playThunder(){
		createjs.Sound.play('Thunder');
	}
