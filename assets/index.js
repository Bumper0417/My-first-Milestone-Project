'$'('a[href^="#"]').on('click', function (event) {

    var target = '$'(this.getAttribute('href'));
    if(target.length) {
        event.preventDefault();
    '$'('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

   '$'('#contact-form').on('submit', function(e) {
    '$'('#contactFormModal').modal('show');
    e.preventDefault();
})
 
 
 
