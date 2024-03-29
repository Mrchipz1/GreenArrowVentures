// JavaScript Document
var w = 0;
$(function() {
 "use strict";

    function responsive_dropdown () {
        /* ---- For Navbar JS Start ---- */
        $('.navbar-toggle').on("click", function(){
          var menu_id = $('#menu');
          var nav_icon = $('.navbar-toggle i');
          if(menu_id.hasClass('menu-open')){
            menu_id.removeClass('menu-open');
            nav_icon.removeClass('fa-close');
            nav_icon.addClass('fa-bars');
          }else{
            menu_id.addClass('menu-open');
            nav_icon.addClass('fa-close');
            nav_icon.removeClass('fa-bars');
          }
          return false;
        });
        /* ---- For Navbar JS End ---- */

    }



    /*click to scroll menu*/
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top - 50
        }, 1500);
    });
    /*end scroll menu*/

    function faq_tab () {
        $("#tabs li a").on("click", function(e){
            var title = $(e.currentTarget).attr("title");
            $("#tabs li a , .tab_content li div").removeClass("selected");
            $(".tab-"+title +", .items-"+title).addClass("selected");
            $("#items").attr("class","tab-"+title);

            return false;
        });
    }

   
    /* menu overlay start */
    $(".navbar-toggle").on("click", function() {
        if (!$(".navbar-collapse").hasClass("menu-open")){
            $(".overlay").fadeIn("slow")
        }
    })
    $(".overlay").on("click", function() {

      $(this).fadeOut();
      $(".navbar-collapse").removeClass("in").addClass("collapse");
      $(".navbar-toggle").click();
      return false;
    })

    $('.nav-link').on('click',function(e) {
        $('a.nav-link').removeClass('active');
        $(this).addClass('active');
        if ( $(window).width() < 991 ){
            $(".navbar-toggle").click();
            $(".overlay").fadeOut();
            $(".navbar-collapse").removeClass("in").addClass("collapse");
        }
    });
    /* menu overlay end */

    /*logo slider */
    $(function() {
        var $clientslider = $('#clientlogo');
        var clients = $clientslider.children().length;
        var clientwidth = (clients * 220); 
        $clientslider.css('width', clientwidth);
        var rotating = true;
        var clientspeed = 1800;
        var seeclients = setInterval(rotateClients, clientspeed);
        $(document).on({
          mouseenter: function() {
            rotating = false;
          },
          mouseleave: function() {
            rotating = true;
          }
        }, '#ourclients');
        function rotateClients() {
          if (rotating != false) {
            var $first = $('#clientlogo li:first');
            $first.animate({
              'margin-left': '-220px'
            }, 0, function() {
              $first.remove().css({
                'margin-left': '0px'
              });
              $('#clientlogo li:last').after($first);
            });
          }
        }
      });

    /*logo slider end*/



	$( window ).on('resize', function(){
		//location.reload();
		$('.donut').listtopie('refresh');
		$('html, body').animate({scrollTop: '0px'}, 100);

	});


    $(".main-box").addClass(function( index ) {
        if ((index + 1) % 2 == 0){
            //return "fadeInDown";
            $(".main-box").eq(index).children().children(".roadmap-detail-box").addClass('fadeInDown')
            $(".main-box").eq(index).children().children(".date-title").addClass('fadeInUp')
        }else{
            $(".main-box").eq(index).children().children(".roadmap-detail-box").addClass('fadeInUp')
            $(".main-box").eq(index).children().children(".date-title").addClass('fadeInDown')
            //return "fadeInUp";
        }
    });

    responsive_dropdown ();
	faq_tab (); /*accordion ();*/

});

$(window).on("load", function() {
  "use strict";
    /* -------- preloader ------- */
    $('#preloader').delay(2000).fadeOut(500);
    /*------End----------*/
  
});
