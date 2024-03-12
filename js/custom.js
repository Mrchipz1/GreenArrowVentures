$(document).ready(function() {
    "use strict";

    // Function to handle smooth scrolling to sections
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top - 50
        }, 1500);
    });

    // Function to handle navbar toggle
    $('.navbar-toggle').on("click", function(){
        var menu_id = $('#menu');
        var nav_icon = $('.navbar-toggle i');
        if(menu_id.hasClass('menu-open')){
            menu_id.removeClass('menu-open');
            nav_icon.removeClass('fa-close');
            nav_icon.addClass('fa-bars');
        } else {
            menu_id.addClass('menu-open');
            nav_icon.addClass('fa-close');
            nav_icon.removeClass('fa-bars');
        }
        return false;
    });

    // Function to handle token graph animation
    function animateTokenGraph() {
        var scrollDistance = $(window).scrollTop();
        var scrollDistance1 = $('#tokensale-part').offset().top - 100;

        if (scrollDistance >= (scrollDistance1 - 100)) {
            $('.donut').listtopie({
                startAngle: 270,
                strokeWidth: 5,
                hoverEvent: true,
                hoverBorderColor: '#6239d7',
                hoverAnimate: false,
                drawType: 'round',
                speedDraw: 150,
                hoverColor: '#ffffff',
                textColor: '#3d1f94',
                strokeColor: '#3d1f94',
                textSize: '18',
                hoverAnimate: true,
                marginCenter: 85,
            });
        }
    }

    // Call the token graph animation function on window scroll
    $(window).on('scroll', function(){
        animateTokenGraph();
    });

    // Other functions and event handlers...

});
