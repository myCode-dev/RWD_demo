let rankingsPc =  `
<!-- section2 rankings for pc-->
<section class="rankings" id="rankingPc">
   <div class="container">
       <!-- creator -->
       <div class="row creator data_pc">
          <div class="col-md-5 col-lg-5">
              <span>1</span>
              <div class="pic">
                  <img src="images/homepage/seller1.jpg" alt="">
              </div>
              <div class="txt">
                  <p>creator</p>
              </div>
          </div>
          <div class="col-md-1 col-lg-1">
              <p>123</p>
          </div>
          <div class="col-md-1 col-lg-1">
              <p>123</p>
          </div>
          <div class="col-md-1 col-lg-1">
              <p>123</p>
          </div>
          <div class="col-md-1 col-lg-1">
              <p>123</p>
          </div>
          <div class="col-md-1 col-lg-1">
              <p>123</p>
          </div>
          <div class="col-md-1 col-lg-1">
              <p>123</p>
          </div>
       </div>
   </div>
</section>
`
let rankingsMb = `
<!-- section2 rankings for mb-->
     <section class="rankings" id="rankingMb">
        <div class="container">
            <!-- for creator -->
            <div class="row creator data_mb">
               <div class="col-8">
                   <div class="pic">
                       <img src="images/homepage/seller1.jpg" alt="">
                   </div>
                   <div class="txt">
                       <p>creator</p>
                       <button>+more</button>
                   </div>
               </div>

               <div class="col-4">
                   <p>123</p>
                   <p>123</p>
               </div>
              
               <div class="col-3">
                    <h4>7d %</h4>
                    <p>123</p>
               </div>
               <div class="col-3">
                    <h4>Price</h4>
                    <p>123</p>
               </div>
               <div class="col-3">
                    <h4>Owners</h4>
                    <p>123</p>
               </div>
               <div class="col-3">
                    <h4>Items</h4>
                    <p>123</p>
               </div>
            </div>
        </div>
    </section>
`

$(document).ready(function(){

    // 1. HTML to document

    // 1.1 Window onload
    let width = $(window).width();
    if(width > 768){
        $('body').append(rankingsPc);
    }else{
        $('body').append(rankingsMb);
    }

    //1.2 Window resize
    $(window).resize(function() {
        let width = $(window).width();
        if(width > 768){
            $('#rankingMb').remove()
            $('body').append(rankingsPc);
        }else{
            $('.data_pc').remove()
            $('body').append(rankingsMb);
        }
    });
    





    
    //2. select jq
    $('.select').on('click','.placeholder',function(){
        let parent = $(this).closest('.select');
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