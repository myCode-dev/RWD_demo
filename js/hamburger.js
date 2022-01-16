//hamburger function

function showUp(){
    let nav = document.getElementById('nav');
    nav.classList.remove('none')
}


if($(window).width() < 1000 ){
    nav.classList.add('none')
    menu_btn.addEventListener('click', showUp, false)  
}else{
    nav.classList.remove('none')
};



$(function(){
    $(window).resize(function(){
        let nav = document.getElementById('nav');
        let menu_btn = document.getElementById('menu_btn');

        if($(window).width() < 1000 ){
            nav.classList.add('none')
            menu_btn.addEventListener('click', showUp, false)  
        }else{
            nav.classList.remove('none')
        };

    });
});



