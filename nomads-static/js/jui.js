// JavaScript Document

$(document).ready( function() {
							
	if ( $("#gallery-full-size a")) {	
		$("#gallery-full-size a").lightBox();
	}
	
	$('a.lightbox').lightBox();
	
	/* Drop down -- from Sitepoint's tutorial: http://www.sitepoint.com/blogs/2009/03/31/make-a-mega-drop-down-menu-with-jquery/*/
	function addDrop(){
		
        $("#share-controls").addClass("hovering");
        }

      function removeDrop(){
        $("#share-controls").removeClass("hovering");
        }

   	 var dropConfig = {
         interval: 300,
         sensitivity: 4,
         over: addDrop,
         timeout: 500,
         out: removeDrop
    };

    $("#gallery-share").hoverIntent(dropConfig);

	
	function makeCarousel() { 
	
		
		
		$(".spots-carousel").jCarouselLite( {
        
                    btnNext: ".next",
                    btnPrev: ".prev",
                   	scroll: 1,
					circular: true,
					visible: 1
                   
                
                });
	}
	
	
	makeCarousel();
	
		
	
	
});