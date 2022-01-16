var collection_html = `
    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
        <div class="item" data-aos="zoom-in">
            <div class="pic">
                            
            </div>

            <div class="descript">
                <div class="creator">
                    <p class="span  m-10 gray-12">PhantaBear</p>
                    <p>PHANTA BEAR #689</p>
                
                </div>
                <div class="price">
                <p class="span  m-10 gray-12">Bid</p>
                <p>555</p>
                
                </div>
            </div>
            <div class="like">
                <p>511</p>
            </div>
        </div>
    </div>
`


$(document).ready(function(){
    //1. HTML to document

    let dataAmount = (collection.length);

    //換圖片
    for(let i=0; i<dataAmount; i++){

        $('.collection .row').append(collection_html);

        // let pic = $('.collection .pic')
        // let no = $('.collection .creator p:nth-child(2)')
        // let price = $('.collection .price p:nth-child(2)')
        // let like = $('.collection .like p')

        $('.collection .pic').eq(i).append($('<img src ="'+collection[i].pic+'"/>'));
        $('.collection .creator p:nth-child(2)').eq(i).text(collection[i].no)
        $('.collection .price p:nth-child(2)').eq(i).text(collection[i].price)
        $('.collection .like p').eq(i).text(collection[i].like)
        
    }
    //===============================================
    //2. Navbar fixed
    
    $(window).scroll(function () {
            let scrollVal = $(this).scrollTop();
            let nav_top=$(".banner_content").offset().top;
            let side_top=$(".intro .style_link").offset().top

            if(window.innerWidth>767){ 
                //For rwd none work
                if(scrollVal > nav_top){
                    $(".header").css({
                    "position": "fixed",
                    "top": "0px",
                    "left": "0px",
                    "right":"0px",
                    "z-index":"1"
                    });          
                }else{
                    $(".header").css({"position": "relative"});
                };

                if(scrollVal > side_top){
                    $('.side_menu').addClass('side-fixed')
                    $('.main_area').addClass('main-fixed')
                    $('.collection').addClass('collection-fixed')
                    $('.main_area .row').css({
                        "padding-top":"20px"
                    })
                    
                }else{
                    $('.side_menu').removeClass('side-fixed')
                    $('.main_area').removeClass('main-fixed')
                    $('.collection').removeClass('collection-fixed')
                    $('.main_area .row').css({
                        "padding-top":"0px"
                    })

                }

            }else{
              $(".header").css({"position": "relative"});
            }
    });


    //==============================================
    //4. select placeholder js    

    $('.select').on('click','.placeholder',function(){
        var parent = $(this).closest('.select');
        if ( ! parent.hasClass('is-open')){
            parent.addClass('is-open');
            $('.select.is-open').not(parent).removeClass('is-open');
        }else{
            parent.removeClass('is-open');
        }
    }).on('click','ul>li',function(){
        let parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
    });
});