

$(document).ready(function(){
    //1. Form hide or show

    let scroll_top=$(".createForm h3").offset().top;
    let scroll_create = $(".create").offset().top;
    $('.createForm').hide()

    $('#single').click(function(){
        $('.createForm').slideDown(800);
        window.scroll({top: scroll_top, left: 0, behavior: 'smooth'})

    })
    $('#multiple').click(function(){
        $('.createForm').slideDown(800);
        window.scroll({top: scroll_top, left: 0, behavior: 'smooth'})
    })
    $('#closeForm').click(function(){
        $('.createForm').slideUp(400)
        window.scroll({top: scroll_create, left: 0, behavior: 'smooth'})
    })

    //==========================================
    //2. input val to preview item

    $('.createForm').keyup(function(){
         $('.item-card p:first').text($('#title').val())
         $('.item-card p').eq(1).text($('#price').val())
         $('.item-card p').eq(2).text($('#royalties').val())
    })
    //==========================================
    //3. nav fixed

    $(window).scroll(function(){
        let scrollVal = $(this).scrollTop();
        let banner_top=$(".banner").offset().top;
        
        if(window.innerWidth>767){
            if(scrollVal > banner_top){
                $("#header").css({
                "position": "fixed",
                "top": "0px",
                "left": "0px",
                "right":"0px",
                "z-index":"999"
                });            
            }else{
                $("#header").css({"position": "relative"});
            };
        }else{
            $(".header").css({"position": "relative"});
        }
    })
    //==========================================
         
})
   




