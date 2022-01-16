var hide_html = `
    <div class="col-12 col-md-6 col-lg-3 col-xl-3">
        <div class="item" data-aos="zoom-in">
            <div class="pic">
                            
            </div>

            <div class="descript">
                <div class="creator">
                    <p class="span  m-10 gray-12">PhantaBear</p>
                    <p>PHANTA BEAR #689</p>
                
                </div>
                <div class="price">
                    <p class="span  m-10 gray-12">Top Bid</p>
                    <p class="eth">4.2</p>
                
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

        $('.collection .row').append(hide_html);

        let pic = $('.collection .pic')
        let no = $('.collection .creator p:nth-child(2)')
        let price = $('.collection .price p:nth-child(2)')
        let like = $('.collection .like p')

        $('.collection .pic').eq(i).append($('<img src ="'+collection[i].pic+'"/>'));
        $('.collection .creator p:nth-child(2)').eq(i).text(collection[i].no)
        $('.collection .price p:nth-child(2)').eq(i).text(collection[i].price)
        $('.collection .like p').eq(i).text(collection[i].like)
        
    }

    //2. Navbar fixed
    
        $(window).scroll(function () {
            let scrollVal = $(this).scrollTop();
            let nav_top=$(".banner_content").offset().top;
            let side_top=$(".side_menu").offset().top;

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
                    // $(".side_menu").css({
                    //     "position": "fixed",
                    //     "top": "70px",
                    //     "bottom": "45px",
                    //     "left": "0px",
                    //     "right":"0px",
                    //     "min-height": "0",
                    //     "z-index":"1"
                    // });
                    $('.collection_area .row').css({
                        // "position": "fixed",
                        // "top": "70px",
                        // "bottom": "45px",
                        // "left": "0px",
                        // "right":"0px",
                        // "min-height": "0",
                        // "z-index":"999"
                    }); 
                    // $('.main_area').css({
                    //     "position": "fixed",
                    //     "top": "70px",
                    //     "bottom": "45px",
                    //     "left": "0px",
                    //     "right":"0px",
                    //     "min-height": "0",
                    //     "z-index":"1"
                    // }); 
                    
                }

            }else{
              $(".header").css({"position": "relative"});
            }
        });


    //3. select 
        $('.select').on('click','.placeholder',function(){
        var parent = $(this).closest('.select');
        if ( ! parent.hasClass('is-open')){
            parent.addClass('is-open');
            $('.select.is-open').not(parent).removeClass('is-open');
        }else{
            parent.removeClass('is-open');
        }
        }).on('click','ul>li',function(){
        var parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
        });

    
    //4.hide side menu

    let hide_html = 
        `
        <section class="collection_area">
        <div class="container">
            <div class="row">
                <div class="col-md-1 col-lg-1 side_menu" style="border: 1px solid darkgrey; text-align: center;">
                    <i class="fas fa-arrow-right" style="font-size: 25px;"></i>
                </div>   
                
                <!-- categories -->
                <div class="col-md-11 col-lg-11 main_area">
                    <section class="categories">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-3">
                                    <div class="searchBar">
                                        <i class="fas fa-search"></i>
                                        <input type="text" placeholder="Search">
                                    </div>
                                </div>
    
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="select">
                                        <span class="placeholder">Single Item</span>
                                        <ul>
                                        <li>España- Español</li>
                                        <li>United States - English</li>
                                        <li>France - Français</li>
                                        <li>Deutschland - Deutsch</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-12 col-md-7 col-lg-7 price">
                                    <div class="select ">
                                        <span class="placeholder">Price: Low to high</span>
                                        <ul>
                                        <li>España- Español</li>
                                        <li>United States - English</li>
                                        <li>France - Français</li>
                                        <li>Deutschland - Deutsch</li>
                                        </ul>
                                    </div>
                                    <div class="viewbtn" style="width:30%">
                                        <button><img src="images/collections/apps_white_24dp.svg" alt=""></button>
                                        <button><img src="images/collections/crop_din_white_24dp.svg" alt=""></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                <!-- collection -->
                    <section class="collection">
                        <div class="container">
                            <div class="row">
                            </div>
                        </div>    
                    </section>
        `

        var main_html = `
    <div class="col-12 col-md-6 col-lg-3 col-xl-3">
        <div class="item" data-aos="zoom-in">
            <div class="pic">
                            
            </div>

            <div class="descript">
                <div class="creator">
                    <p class="span  m-10 gray-12">PhantaBear</p>
                    <p>PHANTA BEAR #689</p>
                
                </div>
                <div class="price">
                    <p class="span  m-10 gray-12">Top Bid</p>
                    <p class="eth">4.2</p>
                
                </div>
            </div>
            <div class="like">
                <p>511</p>
            </div>
        </div>
    </div>
`
      

        $('.fa-chevron-left').click(function(){
            $('.side_menu').hide(500)
            $('.collection_area').remove()
            $('.intro').append(hide_html)
             //1. HTML to document

            let dataAmount = (collection.length);    
    
            //換圖片

            for(let i=0; i<dataAmount; i++){

                $('.collection .row').append(main_html);
              
                let pic = $('.collection .pic')
                let no = $('.collection .creator p:nth-child(2)')
                let price = $('.collection .price p:nth-child(2)')
                let like = $('.collection .like p')

                $('.collection .pic').eq(i).append($('<img src ="'+collection[i].pic+'"/>'));
                $('.collection .creator p:nth-child(2)').eq(i).text(collection[i].no)
                $('.collection .price p:nth-child(2)').eq(i).text(collection[i].price)
                $('.collection .like p').eq(i).text(collection[i].like)
                
            }
                    
                    });
       
    


       
 

        

       
    


    


});