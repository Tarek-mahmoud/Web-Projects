/*global $, alert, console*/

$(function () {

    'use strict';

    // Adjust Header Height

    var myHeader = $('.header');

    myHeader.height($(window).height());

    $(window).resize(function() {

        myHeader.height($(window).height());

    });


    // Adjust Header width
    myHeader.width($(window).width());

    $(window).resize(function() {

        myHeader.width($(window).width());

    });


    // Link Add Active Class
    $('.links li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

    })
});