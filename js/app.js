$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      // navigation : true, // Show next and prev buttons
      slideSpeed : 1000,
      paginationSpeed : 400,
      singleItem:true
      
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

    $('#map-canvas').addClass('scrolloff'); // set the pointer events to none on doc ready
      $('#map-canvas').on('click', function () {
          $('#map-canvas').removeClass('scrolloff'); // set the pointer events true on click
      });

      // you want to disable pointer events when the mouse leave the canvas area;

      $("#map-canvas").mouseleave(function () {
          $('#map-canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
      });
 
});