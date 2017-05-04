
$('.scroll').click(function() {
        $('html, body').animate({
            'scrollTop': $($.attr(this, 'href')).position().top-50
        }, 500);
        return false;
    });