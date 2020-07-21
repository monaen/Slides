//* Starting the opening chapter
//fade in & fade out
jQuery(function($) {
    var divs = $('#head');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        if (st > 200) {
            // We only need to treat scroll event for the header. Ignore over scrolling.
            return;
        }
        divs.css({ 
            'margin-top' : -(st/3)+"px", 
            'opacity' : 1 - st/35
        }); 
    });
});

//* end of the opening chapter
//* add preloading page
// $(document).ready(function() {
 
//     setTimeout(function(){
//         $('body').addClass('loaded');
//     }, 5000);

// $( "#loadsub" ).fadeIn( 1000, function() {
//     $( "h1" ).fadeIn( 100, function() {
//         $( "#loadtitle" ).fadeIn( 100, function() {
    
//   });
    
//   });
//   });
 
// });


//     (document).ready(function() {
//         $('#pagepiling').pagepiling({
//             menu: null,
//             direction: 'vertical',
//             verticalCentered: true,
//             sectionsColor: [],
//             anchors: [],
//             scrollingSpeed: 700,
//             easing: 'swing',
//             loopBottom: false,
//             loopTop: false,
//             css3: true,
//             navigation: {
//                 'textColor': '#000',
//                 'bulletsColor': '#000',
//                 'position': 'right',
//                 'tooltips': ['section1', 'section2', 'section3', 'section4']
//             },
//             normalScrollElements: null,
//             normalScrollElementTouchThreshold: 5,
//             touchSensitivity: 5,
//             keyboardScrolling: true,
//             sectionSelector: '.section',
//             animateAnchor: false,

//         //events
//         onLeave: function(index, nextIndex, direction){},
//         afterLoad: function(anchorLink, index){},
//         afterRender: function(){},
//     });
// });

/* starting map1 
<!--- $(window).scroll(function() {
    var pxFromBottom = 400;
    if ($(window).scrollTop() + $(window).height() > $(document).height() - pxFromBottom) {
        $('.gdpcap').fadeOut('slow');
    } else {
        $('.gdpcap').fadeIn('slow')
    }
}); 

starting map2 
$(window).scroll(function() {
    var pxFromBottom = 1400;
    if ($(window).scrollTop() + $(window).height() > $(document).height() - pxFromBottom) {
        $('.unemployment').fadeOut('slow');
    } else {
        $('.unemployment').fadeIn('slow')
    }
});    

*/

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.section').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()-250;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});



