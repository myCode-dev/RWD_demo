let rankingsPc = `
        <!-- creator -->
            <div class="row creator data_pc">
                <div class="col-md-5 col-lg-5">
                    <span></span>
                    
                    <div class="pic">
                        
                    </div>
                    <div class="txt">
                        <p></p>
                    </div>
                </div>
                <div class="col-md-1 col-lg-1 ">
                    <img src="images/status/ETH.svg" alt="eth">
                    <p></p>
                </div>
                <div class="col-md-1 col-lg-1 cl">
                    <p></p>
                </div>
                <div class="col-md-1 col-lg-1 cl">
                    <p></p>
                </div>
                <div class="col-md-1 col-lg-1">
                    <img src="images/status/ETH.svg" alt="eth_price">
                    <p></p>
                </div>
                <div class="col-md-1 col-lg-1">
                    <p></p>
                </div>
                <div class="col-md-1 col-lg-1">
                    <p></p>
                </div>
            </div>
`

let rankingsMb = `
<!-- section2 rankings for mb-->
     <section class="rankings" id="rankingMb"> 
        <div class="container">
            <!-- for creator -->
            <div class="row creator data_mb">
               <div class="col-8">
                   <span></span>
                   <div class="pic">
                       
                   </div>
                   <div class="txt">
                       <button class"addMoreBtn">+more</button>
                   </div>
               </div>

               <div class="col-4 cl">
               
                   <p></p>
               </div>
              
               <div class="col-3 cl">
                    <h4>7d %</h4>
                    <p></p>
               </div>
               <div class="col-3">
                    <h4>Price</h4>
                    <p></p>
               </div>
               <div class="col-3">
                    <h4>Owners</h4>
                    <p></p>
               </div>
               <div class="col-3">
                    <h4>Items</h4>
                    <p></p>
               </div>
            </div>
        </div>
    </section>
`

$(document).ready(function () {

    // 1. HTML to document

    // 1.1 Window onload
    let width = $(window).width();

    //資料筆數
    let dataAmount = (creator.length);

    for (i = 0; i < (dataAmount); i++) {
        //template for pc
        $('#rankingPc').append(rankingsPc);

        $('.data_pc span').eq(i).text(i + 1);
        $('.data_pc .pic').eq(i).append($('<img src ="' + creator[i].pic + '"/>'));
        $('#rankingPc .txt').eq(i).append("<p>" + creator[i].collection + "</p>");
        $('.data_pc').eq(i).find("div").eq(3).append("<p class='ETH'>" + creator[i].volume + "</p>")
        $('.data_pc').eq(i).find("div").eq(4).append("<p>" + creator[i].hours + "</p>")
        $('.data_pc').eq(i).find("div").eq(5).append("<p>" + creator[i].day + "</p>")
        $('.data_pc').eq(i).find("div").eq(6).append("<p >" + creator[i].price + "</p>")
        $('.data_pc').eq(i).find("div").eq(7).append("<p>" + creator[i].owners + "</p>")
        $('.data_pc').eq(i).find("div").eq(8).append("<p>" + creator[i].items + "</p>")

        //template for mb

        $('#rankingMb').append(rankingsMb);
        $('.data_mb span').eq(i).text(i + 1);
        $('.data_mb .pic').eq(i).append($('<img src ="' + creator[i].pic + '"/>'));
        $('#rankingMb .txt').eq(i).prepend("<p>" + creator[0].collection + "</p>");
        $('.data_mb').eq(i).find("div").eq(3).append("<p class='cl_none'>" + '<img src="images/status/ETH.svg" alt="eth">' + creator[i].volume + "</p>" + "<p>" + creator[i].hours + "</p>")
        $('.data_mb').eq(i).find("div").eq(4).append("<p>" + creator[i].day + "</p>")
        $('.data_mb').eq(i).find("div").eq(5).append("<p>" + '<img src="images/status/ETH.svg" alt="eth">' + creator[i].price + "</p>")
        $('.data_mb').eq(i).find("div").eq(6).append("<p>" + creator[i].owners + "</p>")
        $('.data_mb').eq(i).find("div").eq(7).append("<p>" + creator[i].items + "</p>")

    }

    if (width > 768) {
        $('#rankingMb').hide();
    } else {
        $('#rankingPc').hide();
    }


    //1.2 Window resize => for RWD

    $(window).resize(function () {
        let width = $(window).width();
        if (width > 768) {
            $('#rankingMb').hide();
            $('#rankingPc').show();
        } else {
            $('#rankingMb').show();
            $('#rankingPc').hide();



        }
    });

    //===============================================
    //2. change CSS style

    let cl = document.querySelectorAll('.cl p')
    for (let i = 0; i < cl.length; i++) {
        // arr.push(cl[i].innerText)
        if (cl[i].innerText.includes('-')) {
            cl[i].style.color = '#DE5757';
        } else {
            console.log(cl[i]);
            cl[i].style.color = '#34C76A';
        }
    }

    $('.cl_none').css({
        color: '#fff',
    });


    //===============================================
    //3. show more info for mobile

    const allRankingMb = document.querySelectorAll('section#rankingMb');

    allRankingMb.forEach(v => {
        $(v).find('button').click((e) => {
            const infos = $(e.target).parents('.row.creator.data_mb').find('.col-3');

            const col_8 = $(e.target).parents('.row.creator.data_mb').find('.col-8');
            console.log(col_8);

            const col_4 = $(e.target).parents('.row.creator.data_mb').find('.col-4');

            // var isHide = $("#id").is(":hidden");
            if (infos.is(":visible")) {
                infos.hide("slow");
                $(v).find('button').text('+more');

            } else {
                infos.show("slow");
                infos.css("text-align", "center");
                col_8.css("border-bottom", "2px solid #292B56")
                col_4.css("border-bottom", "2px solid #292B56")
                $(v).find('button').text('-more');


            }
        })
    })

    //3-1. load more for mobile
    for (let i = 10; i < 20; i++) {
        $('.data_mb').eq(i).hide();
        $('.show_more').click(function () {
            $('.data_mb').eq(i).slideToggle();
            $('.show_more').text('show less');
        })
    }
    // const data_hide = $('.data_mb').eq(19)
    // if(data_hide.is(":visible")){
    //     $('.show_more').text('show less');
    // }
    // let a = document.querySelectorAll('#rankingMb');
    // console.log(a);
    // if(a.length > 20){

    // }

    //3-2. click to collection page

    $('.pic img').click(function () {
        $(window).attr('location', 'collection.html');
    })
    //==============================================
    //4. select placeholder js
    $('.select').on('click', '.placeholder', function () {
        var parent = $(this).closest('.select');
        if (!parent.hasClass('is-open')) {
            parent.addClass('is-open');
            $('.select.is-open').not(parent).removeClass('is-open');
        } else {
            parent.removeClass('is-open');
        }
    }).on('click', 'ul>li', function () {
        var parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.placeholder').text($(this).text());
    });
    //==============================================
    //5. navbar fixed
    $(window).scroll(function () {
        let scrollVal = $(this).scrollTop();
        let banner_top = $(".banner").offset().top;

        if (window.innerWidth > 767) {
            if (scrollVal > banner_top) {
                $("#header").css({
                    "position": "fixed",
                    "top": "0px",
                    "left": "0px",
                    "right": "0px",
                    "z-index": "999"
                });
            } else {
                $("#header").css({
                    "position": "relative"
                });
            };
        } else {
            $(".header").css({
                "position": "relative"
            });
        }

    })

});