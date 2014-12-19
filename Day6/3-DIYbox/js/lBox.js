window.onload = function() {

	$('.lightbox_trigger').click(function(e){
		//prevent default action
		e.preventDefault();

		//get clicked link href
		var image_href = $(this).attr("href");

		if($('.lightbox').length>0){//$lightbox exists
			//place href as img src value
			$('#content').html('<img src="'+image_href+'"/>')
		}else{
			//#lightbox doesn't exist - create and insert
			//create HTML markup for lightbox window
			var lightbox =
				'<div id="lightbox">'+
					'<p>Click to close</p>'+
					'<div id="content">'+
						'<img src="'+image_href+'"/>'+
					'</div>'+
				'</div>';

				//insert lightbox HTML into page
				$('body').append(lightbox);

		}
	});//end click

	//click anywhere on the page to get rid of the lightbox window
	$('#lightbox').live('click', function(){
		$(this).hide();
	});

}
