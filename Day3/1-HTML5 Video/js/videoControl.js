var vid;

window.onload = function(){

	//link variable to the video
	vid = document.getElementById('vid');

};

//after create button in <body>
function clicked(){
	//property of HTML5 video
	//currentTime - current play time in seconds
	vid.currentTime+=2;
}

//after add onClick to video, create pause function
function pauseToggle(){
	//.paused is a boolean value
	if(vid.paused){
		vid.play();
	} else{
		vid.pause();
	}
}
