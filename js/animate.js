 function toDown() {
        $("#round").animate({'margin-top': '1%'}, 2000);
        $("#round").fadeOut( "slow" );
    }

    function reset() {
        setTimeout($("#round").animate({'margin-top': '-1.6%'}), 2000);
        $("#round").fadeIn( "slow" );
    }

    setInterval(function() {
        toDown();
        reset();
    }, 2000);

    function customizeToDown() {
        var height = $(window).height() + 'px';
        $('html, body').animate({scrollTop: height},1000);
    }

    $("#main-info").on('inview', function (event, isInView) {
        if (isInView) {
            $("#main-info").addClass('animated-main-info zoomInDown');
            $("#main-info").css({opacity: '1'});
        }
    });

    $("#item-info-border-info").on('inview', function (event, isInView) {
        if (isInView) {
            $("#item-info-border-info").addClass('animated-text-list zoomIn');
            $("#item-info-border-info").css({opacity: '1'});
        }
    });

    /*list item info */
    $("#item-info-1").on('inview', function (event, isInView) {
        if (isInView) {
            $("#item-info-1").addClass('animated fadeInUp');
            $("#item-info-1").css({opacity: '1'});
        }
    });


    $("#item-info-title-2").on('inview', function (event, isInView) {
        if (isInView) {
            $("#item-info-title-2").addClass('animated fadeInUp');
            $("#item-info-title-2").css({opacity: '1'});
        }
    });

    $("#item-info-2").on('inview', function (event, isInView) {
        if (isInView) {
            $("#item-info-2").addClass('animated fadeInUp');
            $("#item-info-2").css({opacity: '1'});
        }
    });


    $("#item-info-title-3").on('inview', function (event, isInView) {
        if (isInView) {
            $("#item-info-title-3").addClass('animated fadeInUp');
            $("#item-info-title-3").css({opacity: '1'});
        }
    });

    $("#item-info-3").on('inview', function (event, isInView) {
        if (isInView) {
            $("#item-info-3").addClass('animated fadeInUp');
            $("#item-info-3").css({opacity: '1'});
        }
    });


    $("#item-info-4").on('inview', function (event, isInView) {
        if (isInView) {
            $("#item-info-4").addClass('animated fadeInUp');
            $("#item-info-4").css({opacity: '1'});
        }
    });


    $("#item-info-title-5").on('inview', function (event, isInView) {
        if (isInView) {
            $("#item-info-title-5").addClass('animated fadeInUp');
            $("#item-info-title-5").css({opacity: '1'});
        }
    });


    $("#item-info-title-6").on('inview', function (event, isInView) {
        if (isInView) {
            $("#item-info-title-6").addClass('animated fadeInUp');
            $("#item-info-title-6").css({opacity: '1'});
        }
    });


    $("#item-info-title-7").on('inview', function (event, isInView) {
        if (isInView) {
            $("#item-info-title-7").addClass('animated fadeInUp');
            $("#item-info-title-7").css({opacity: '1'});
        }
    });

    /*list item images*/
    $("#list-img-1").on('inview', function (event, isInView) {
        if (isInView) {
            $("#list-img-1").addClass('animated-img-list zoomIn');
            $("#list-img-1").css({opacity: '1'});
        }
    });

    $("#list-img-2").on('inview', function (event, isInView) {
        if (isInView) {
            $("#list-img-2").addClass('animated-img-list zoomIn');
            $("#list-img-2").css({opacity: '1'});
        }
    });

    $("#list-img-3").on('inview', function (event, isInView) {
        if (isInView) {
            $("#list-img-3").addClass('animated-img-list zoomIn');
            $("#list-img-3").css({opacity: '1'});
        }
    });

    $("#list-img-4").on('inview', function (event, isInView) {
        if (isInView) {
            $("#list-img-4").addClass('animated-img-list zoomIn');
            $("#list-img-4").css({opacity: '1'});
        }
    });

    $("#list-img-5").on('inview', function (event, isInView) {
        if (isInView) {
            $("#list-img-5").addClass('animated-img-list zoomIn');
            $("#list-img-5").css({opacity: '1'});
        }
    });

    /*department*/
    $("#department-1").on('inview', function (event, isInView) {
        if (isInView) {
            $("#department-1").addClass('animated fadeInUp');
            $("#department-1").css({opacity: '1'});
        }
    });

    $("#department-2").on('inview', function (event, isInView) {
        if (isInView) {
            $("#department-2").addClass('animated fadeInUp');
            $("#department-2").css({opacity: '1'});
        }
    });

    $("#department-3").on('inview', function (event, isInView) {
        if (isInView) {
            $("#department-3").addClass('animated fadeInUp');
            $("#department-3").css({opacity: '1'});
        }
    });

    $("#department-4").on('inview', function (event, isInView) {
        if (isInView) {
            $("#department-4").addClass('animated fadeInUp');
            $("#department-4").css({opacity: '1'});
        }
    });

    $("#department-5").on('inview', function (event, isInView) {
        if (isInView) {
            $("#department-5").addClass('animated fadeInUp');
            $("#department-5").css({opacity: '1'});
        }
    });

    $("#department-6").on('inview', function (event, isInView) {
        if (isInView) {
            $("#department-6").addClass('animated fadeInUp');
            $("#department-6").css({opacity: '1'});
        }
    });

    $("#department-7").on('inview', function (event, isInView) {
        if (isInView) {
            $("#department-7").addClass('animated fadeInUp');
            $("#department-7").css({opacity: '1'});
        }
    });

    $("#department-8").on('inview', function (event, isInView) {
        if (isInView) {
            $("#department-8").addClass('animated fadeInUp');
            $("#department-8").css({opacity: '1'});
        }
    });

    $("#department-9").on('inview', function (event, isInView) {
        if (isInView) {
            $("#department-9").addClass('animated fadeInUp');
            $("#department-9").css({opacity: '1'});
        }
    });

    $("#department-10").on('inview', function (event, isInView) {
        if (isInView) {
            $("#department-10").addClass('animated fadeInUp');
            $("#department-10").css({opacity: '1'});
        }
    });

    $("#department-11").on('inview', function (event, isInView) {
        if (isInView) {
            $("#department-11").addClass('animated fadeInUp');
            $("#department-11").css({opacity: '1'});
        }
    });

    $("#department-12").on('inview', function (event, isInView) {
        if (isInView) {
            $("#department-12").addClass('animated fadeInUp');
            $("#department-12").css({opacity: '1'});
        }
    });

    $("#department-13").on('inview', function (event, isInView) {
        if (isInView) {
            $("#department-13").addClass('animated fadeInUp');
            $("#department-13").css({opacity: '1'});
        }
    });
