    $(window).load(function(){
        //$('html, body').animate({scrollTop: 0},1);
        $('.wrapper-body').css({'display' : 'block'});
    });

    function setheight(){
        var theWindow = $(window).height();
        $('#wrapper-top').height(theWindow);
        //alert("monitorHeight: " + theWindow);
    }

    $(window).load(function() {
        setheight();
    });

    $(window).resize(function(){
        setheight();
    });