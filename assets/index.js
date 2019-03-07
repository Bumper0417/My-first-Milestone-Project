/*// Delayed scrolling to different sections of the page
// Modified from a tutorial found at https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive/blob/master/assets/js/index.js*/
/*global global$*/
 global$('a[href^="#"]').on('click', function(event) {

    var target = global$(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        global$('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

global$('#contact-form').on('submit', function(e) {
    global$('#contactFormModal').modal('show');
    e.preventDefault();
})
 
 
 
