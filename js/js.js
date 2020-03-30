$('#wwss').owlCarousel({


    loop:true,
    margin:10,
    nav:false,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        985:{
            items:2
        },
        1200:{
            items:4
        }
    }
});

var owl = $('.sliderWapper');
owl.owlCarousel();

$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.owl-prev').click(function() {

    owl.trigger('prev.owl.carousel', [300]);
});


$('#qqaa').owlCarousel({
    

    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

$('#operator').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    pagination: false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})