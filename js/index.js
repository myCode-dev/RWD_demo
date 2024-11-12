//alert for one time
// let alertmessage="'This website is a study project of a student from front-end design engineer class of Weiyu TibaMe Educational Institution. This platform is for learning purposes only. This platform is not for commercial use. If you have concerns about infringement, you can contact with TibaMe and the follow-up will be handled by a dedicated person.'"
    

// get cookies

function get_cookie(Name) {
    var search = Name + "=";
    var returnvalue = "";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) { // if cookie exists
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1)
                end = document.cookie.length;
            returnvalue=document.cookie.substring(offset, end);
        }
    }
    return returnvalue;
}



// var show = true;
    
// if(get_cookie('alerted') == 'yes'){
//     show = false
//     console.log("show= false");
// }

// if(show){
//     var rus = confirm(alertmessage);
// }

// if(rus == true){
//     document.cookie="alerted=yes";
// }

if(get_cookie('alerted') != 'yes'){
    // alert(alertmessage);
    document.cookie="alerted=yes";
}

    

//owl carousel
$(function() {
    var owl = $('.owl-carousel'),
        owlOptions = {
            loop: true,
            center: true,
            responsive: {
                 0: {
                    items: 1.2,
                }
            }
        };

    if ($(window).width() < 992 ) {
        var owlAct = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    };

    $(window).resize(function() {
        if ( $(window).width() < 992 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlAct = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
                }
            }
        });
    });


// back to top btn
      //Make sure the user has scrolled at least double the height of the browser
      var toggleHeight = $(window).outerHeight() * 2;

      $(window).scroll(function() {
          if ($(window).scrollTop() > toggleHeight) {
              //Adds active class to make button visible
              $(".m-backtotop").addClass("active");
               
          } else {
              //Removes active class to make button visible
              $(".m-backtotop").removeClass("active");
          }
      });
      
      
      //Scrolls the user to the top of the page again
      $(".m-backtotop").click(function() {
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
      });



