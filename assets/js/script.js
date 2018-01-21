/*
    Template Name: Classic - Minimal CV/Personal Portfolio
    Version: 1.0
    Author: BulkStudio
    Author URI: http://bulkstudio.com
    Description: CV, Resume, Portfolio Minimal HTML5 Template
*/

(function($) {

    "use strict";

    /* ---- Facts Counter ---- */
    $('.counter-data').counterUp({
        delay: 10,
        time: 2000
    });

    /* ---- Twitter, Change username ---- */
    // $('.tweet').twittie({
    //     username: 'mightypixel', // Change username
    //     count: 1,
    //     dateFormat: '%d/%b/%y',
    //     template: '<strong class="date">{{date}}</strong> - {{tweet}} - {{screen_name}} ',
    //     apiPath: 'assets/js/api/tweet.php'
    // });

    /* ---- Menu Toggle Class ---- */
    $('.menu-holder').on('click', function() {
        $('.menu').toggleClass('menu-active');
    });

    /* ---- One Page Nav ---- */
    $('.menu-ul').onePageNav({
        currentClass: 'current',
        easing: 'swing'
    });

    /* ---- WOW JS ---- */
    new WOW().init();
})(jQuery);
