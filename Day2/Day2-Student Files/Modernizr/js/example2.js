//Load a different script based on wheter date picker is supported

Modernizr.load({
	test: Modernizr.inputtypes.date, 
	yep: "js/success.js", 
	nope: "js/fail.js",
	complete: function(){
		if(Modernizr.inputtypes.date){
			setMessage('This browser supports the new HTML5 date picker');
			} else {
				setMessage('This browser does not support the new HTML5 date picker');
				}
		
		
		}
	
	
	
	
	});
	
	function setMessage( message){
		var elem = document.getElementById('message');
		elem.innerHTML = message;
		
		}
	

