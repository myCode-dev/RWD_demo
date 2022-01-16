let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('prev')
let picImg = document.querySelectorAll('.pic img')
console.log(picImg);

let originPic = [
    "images/explore/monster.png",
    "images/explore/decil.png",
    "images/explore/kingfrog.png",
    "images/explore/fat.png",
    "images/explore/swapper.png",
    "images/explore/chainRunner.png",
    "images/explore/winterspace.png",
    "images/explore/theHeart.jpg",
    "images/explore/dino.jpg",
    "images/explore/outerspace.png",
    "images/explore/tojyo.png",
    "images/explore/sky.png",
]

let newPic = [
    "images/explore/explore_new/card.jpg", 
    "images/explore/explore_new/angle.png",
    "images/explore/explore_new/coolct.png",
    "images/explore/explore_new/cute.png",
    "images/explore/explore_new/duck.png",
    "images/explore/explore_new/horse.png",
    "images/explore/explore_new/town.png",
    "images/explore/explore_new/ugly_mon.gif",
    "images/explore/explore_new/worlgirl.png",
    "images/explore/explore_new/zombie.png",
    "images/explore/explore_new/sushi.png",
    "images/explore/explore_new/little.jpg"
]

function changeNewPic(){
    for(let i=0; i<picImg.length; i++){
        picImg[i].src = newPic[i] 
    }
    $("html, body").animate({ scrollTop: 0 }, "slow");

}
function changeOldPic(){
    for(let i=0; i<picImg.length; i++){
        picImg[i].src = originPic[i] 
    }
    $("html, body").animate({ scrollTop: 0 }, "slow");

}
nextBtn.addEventListener('click', changeNewPic, false)
prevBtn.addEventListener('click', changeOldPic, false)

