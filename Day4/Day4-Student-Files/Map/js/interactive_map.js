$(document).ready(function() {
  //when the form changes
  $('#mapForm').change(function(){
    //create a variable to hold selected
    var selectedContinent = $('#mapForm option:selected').val();

    //if statement - test if it is all - show ALL dots
    if(selectedContinent == 'ALL'){
      //show all dots
      $('a.dot').slideDown(1000);
    } else{
      //show the dots that are on the selectedContinent
      //hide all the others
      $('a.dot[continent = "'+selectedContinent+'"]').slideDown(1000);
      $('a.dot[continent != "'+selectedContinent+'"]').slideUp(1000);
    }
  });

  //dot code
  //when dot clicked
  $('a.dot').click(function(){
    //remove the selected class from all dots
    $('a.dot').removeClass('selected');
    //add selected class on to the clicked anchor
    $(this).addClass('selected');
    //create a variable to hold the path of the matching div
    var country = '.country_detail#'+$(this).attr('country');
    //variable to hold the html code
    var htmlCode = $(country).html();
    //animate the container - fade in and out
    $('.detail_container').fadeOut(500,function(){
      //the container is hidden
      //put html in the container
      $('.detail_container .country_detail').html(htmlCode);
      $('.detail_container').fadeIn(500);
    });
  });

});
