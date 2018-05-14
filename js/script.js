$(document).ready(function(){
   

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop>=50){
            console.log(scrollTop);
            $(".nav").css({
                'position': 'fixed',
                'top': 0,
                'width': '100%'
            });
        }else{
            $(".nav").css({
                'position': 'initial',
                'top': '50px',
                'width': '100%'
            });
        }
    });

});