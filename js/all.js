$(document).ready(function() {

    //下拉選單:hover
    $(".hover").hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).children('a').toggleClass('active');
        $(this).children('ul').stop().slideToggle();
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).children('a').toggleClass('active');
        $(this).children('ul').stop().slideToggle();
        //hoever功能要加在li，移至下拉選單才不會消失，要加stop不然會閃爍
    });

    //下拉選單:click
    /*$('.dropdown').click(function(event) {
        /* Act on the event */
    /*
            event.preventDefault();
            $(this).toggleClass('active');
            $(this).parent().children('ul').stop().slideToggle();
        });*/

    //返回頁面頂端
    $(".top a").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    //lightbox
    lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true,
        'disableScrolling': true,
        'positionFromTop': 100
            /*'showImageNumberLabel': false*/
    })
});
//nivo slide
$(window).load(function() {
    $('#slider').nivoSlider({
        effect: 'fade', // Specify sets like: 'fold,fade,sliceDown' 
        slices: 15, // For slice animations 
        boxCols: 8, // For box animations 
        boxRows: 4, // For box animations 
        animSpeed: 500, // Slide transition speed 
        pauseTime: 2000, // How long each slide will show 
        startSlide: 0, // Set starting Slide (0 index) 
        directionNav: true, // Next & Prev navigation 
        controlNav: true, // 1,2,3... navigation 
        controlNavThumbs: true, // Use thumbnails for Control Nav 
        pauseOnHover: true, // Stop animation while hovering 
        manualAdvance: false, // Force manual transitions  
        prevText: 'Prev', // Prev directionNav text 
        nextText: 'Next', // Next directionNav text 
        randomStart: false, // Start on a random slide 
        beforeChange: function() {}, // Triggers before a slide transition 
        afterChange: function() {}, // Triggers after a slide transition 
        slideshowEnd: function() {}, // Triggers after all slides have been shown 
        lastSlide: function() {}, // Triggers when last slide is shown 
        afterLoad: function() {} // Triggers when slider has loaded 
    });

});
