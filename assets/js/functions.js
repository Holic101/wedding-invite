window.onload = function() {
	smoothScroll(300);
	initialize();
}

// Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function initialize() {
  var myCenter = new google.maps.LatLng(50.943110, 6.898520);
  var rathaus = new google.maps.LatLng(50.938472, 6.958566);
  var lessingStrasse = new google.maps.LatLng(50.942083, 6.839572);
  var mapProp = {
    center:myCenter,
    //ToDo: media-query for small screens with less zoom
    zoom:12,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

		
	/*var marker = new google.maps.Marker({
	position:myCenter
	});*/
  var marker2 = new google.maps.Marker({
    position: lessingStrasse,
    clickable: true
  });
  var marker3 = new google.maps.Marker({
    position: rathaus,
    clickable: true
  })


	var contentString = "Rathausplatz, 50667 Köln --> Hier wird geheiratet";
  var contentString2 = "Lessingstr. 62, 50858 Köln --> Hier wird gefeiert!"

	var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  })

	marker3.setMap(map);
  marker2.setMap(map);
	infowindow.open(map, marker3);
  infowindow2.open(map, marker2);
}