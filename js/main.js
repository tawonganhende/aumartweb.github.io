(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // International Tour carousel
    $(".InternationalTour-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // packages carousel
    $(".packages-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

     // Read More button
  $('#read-more-btn').click(function (event) {
    event.preventDefault(); // Prevent the default link behavior
    $('#popup-box').show(); // Show the popup box
  });

    // Unlock Business Read More Button
    $('#unlock-business-btn').click(function (event) {
        event.preventDefault();
        $('#unlock-business-box').show();
    })

    // when all are working, please find a way to make code short and better and remove the console logs

    // FAQ Tab1 pressed
    $('#faqTab-1').click(function (event) {
        event.preventDefault();
        $('#faq1-popup-box').show();

        console.log("Popped")
    })

    // FAQ Tab2 pressed
    $('#faqTab-2').click(function (event) {
        event.preventDefault();
        $('#faq2-popup-box').show();

        console.log("Popped")
    })

    // FAQ Tab3 pressed
    $('#faqTab-3').click(function (event) {
        event.preventDefault();
        $('#faq3-popup-box').show();

        console.log("Popped")
    })

    // FAQ Tab4 pressed
    $('#faqTab-4').click(function (event) {
        event.preventDefault();
        $('#faq4-popup-box').show();

        console.log("Popped")
    })

    // FAQ 5 pressed
    $('#faqTab-5').click(function (event) {
        event.preventDefault();
        $('#faq5-popup-box').show();

        console.log("Popped")
    })

    // Hide popup boxes when clicked outside
    $(document).click(function (event) {
        if (event.target.id === 'popup-box' || event.target.id === 'unlock-business-box' || event.target.id === 'faq1-popup-box' || 
        event.target.id === 'faq2-popup-box' || event.target.id === 'faq3-popup-box' || event.target.id === 'faq4-popup-box' || 
        event.target.id === 'faq5-popup-box') {
            $(event.target).hide(); // Hide the popup box if clicked outside the content area
        }
    });

})(jQuery);

