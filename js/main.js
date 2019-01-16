$(document).on('ready', function() {

    $(".section-poster").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $(".speakers-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        paddinng:10,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".experttestim-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('#speakersModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var contentname = button.data('contentname')
        $(this).find('.speakers-title').text(contentname);
    })
});
$(function() {

    $("#open-form").click(function(e) {
        e.preventDefault();

        $(".mobile-hidden").addClass('active');
        $(".desctop-hidden").addClass('inactive');
    })
});
(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.menu').toggleClass('menu_state_open');
            if ($(".menu").hasClass('menu_state_open')) {
                $('<div class="overlay">&nbsp;</div>').prependTo($('body'));
                $("body").addClass('noscroll');
            } else {
                $('.overlay').remove();
                $('body').removeClass('noscroll');
            }
        });
    });
})(jQuery);